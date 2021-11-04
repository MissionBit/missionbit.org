import dayjs from "dayjs";
import { fetch } from "cross-fetch";

// https://docs.google.com/spreadsheets/d/113tb0FFuUusqRJTy6wMyFIBMOo5Q3Z6kWZUpdvE9CuI/edit
// This spreadsheet must have "Anyone with the link can view" permission
export const SPREADSHEET_ID = "113tb0FFuUusqRJTy6wMyFIBMOo5Q3Z6kWZUpdvE9CuI";

export interface BalanceModification {
  readonly name: string;
  readonly amount: number;
  readonly notes: string;
  readonly created: number;
}

export interface IgnoredCharge {
  readonly id: string;
  readonly notes: string;
}

export interface BalanceModifications {
  readonly pollTime: number;
  readonly transactions: readonly BalanceModification[];
  readonly goalCents: number;
  readonly goalName: string;
  readonly ignoredTransactions: readonly IgnoredCharge[];
  readonly startTimestamp: number;
}

function asUnknown(obj: unknown, prop: string): unknown {
  if (obj && typeof obj === "object") {
    return (obj as { [k: string]: unknown })[prop];
  }
  throw new Error(`Expected ${prop}`);
}

function asString(obj: unknown, prop: string): string {
  if (obj && typeof obj === "object") {
    const x = (obj as { [k: string]: unknown })[prop];
    if (typeof x === "string") {
      return x;
    }
  }
  throw new Error(`Expected string at ${prop}`);
}

function asArray(obj: unknown, prop: string): unknown[] {
  if (obj && typeof obj === "object") {
    const x = (obj as { [k: string]: unknown })[prop];
    if (x && Array.isArray(x)) {
      return x;
    }
  }
  throw new Error(`Expected Array at ${prop}`);
}

interface SheetValue {
  effectiveValue?: EffectiveValue;
}

interface EffectiveValue {
  boolValue?: boolean;
  stringValue?: string;
  numberValue?: number;
}

function effectiveValue(v: unknown): EffectiveValue | undefined {
  return !v && typeof v !== "object"
    ? undefined
    : (v as SheetValue).effectiveValue;
}

async function spreadsheetApiRequest(
  id: string,
  args: readonly string[]
): Promise<unknown> {
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${id}?${[
      ...args,
      `key=${process.env.GOOGLE_API_KEY}`,
    ].join("&")}`
  );
  if (res.ok) {
    return await res.json();
  } else {
    console.error(await res.text());
    throw new Error(`${res.status} ${res.statusText}`);
  }
}

function isEmptyObject(v: unknown): v is {} {
  if (typeof v !== "object" || v === null) {
    return false;
  }
  for (const _k in v) {
    return false;
  }
  return true;
}

function parseDocToSheetsAndRows(
  doc: unknown
): Partial<{ [sheet: string]: unknown[] }> {
  const sheets: { [sheet: string]: unknown[] } = {};
  for (const sheet of asArray(doc, "sheets")) {
    const title = asString(asUnknown(sheet, "properties"), "title");
    const rows: unknown[] = [];
    sheets[title] = rows;
    for (const data of asArray(sheet, "data")) {
      if (!isEmptyObject(data)) {
        for (const rowData of asArray(data, "rowData")) {
          if (!isEmptyObject(rowData)) {
            rows.push(rowData);
          }
        }
      }
    }
  }
  return sheets;
}

export async function getBalanceModifications(): Promise<BalanceModifications> {
  const pollTime = dayjs().unix();
  const transactions: BalanceModification[] = [];
  const id = SPREADSHEET_ID;
  const ignoredTransactions: IgnoredCharge[] = [];
  const parsed = parseDocToSheetsAndRows(
    await spreadsheetApiRequest(id, [
      "ranges=IgnoredTransactions!A2:B",
      "ranges=Adjustments!A2:E",
      "ranges=Instructions!A2:B",
      "fields=sheets(properties,data.rowData(values(effectiveValue)))",
    ])
  );
  for (const rowData of asArray(parsed, "IgnoredTransactions")) {
    const values = asArray(rowData, "values").map(effectiveValue);
    const [idV, notesV] = values;
    if (idV?.stringValue) {
      ignoredTransactions.push({
        id: idV.stringValue,
        notes: notesV?.stringValue ?? "",
      });
    }
  }
  for (const rowData of asArray(parsed, "Adjustments")) {
    const values = asArray(rowData, "values").map(effectiveValue);
    const [nameV, amountV, includeV, notesV, timestampV] = values;
    if (includeV?.boolValue && timestampV?.stringValue) {
      transactions.push({
        name: nameV?.stringValue ?? "",
        amount: Math.floor(100 * (amountV?.numberValue ?? 0)),
        notes: notesV?.stringValue ?? "",
        created: Math.floor(
          (Date.parse(timestampV?.stringValue) ?? Date.now()) / 1000
        ),
      });
    }
  }
  let goalCents = 1000 * 100;
  let goalName = "Mission Bit";
  let startTimestamp =
    Date.parse(dayjs().format("YYYY-MM-01T00:00:00Z")) / 1000;
  for (const rowData of asArray(parsed, "Instructions")) {
    const values = asArray(rowData, "values").map(effectiveValue);
    const [nameV, amountV] = values;
    if (nameV?.stringValue === "Goal Amount" && amountV?.numberValue) {
      goalCents = Math.floor(100 * amountV.numberValue);
    }
    if (nameV?.stringValue === "Goal Name" && amountV?.stringValue) {
      goalName = amountV.stringValue;
    }
    if (nameV?.stringValue === "Start Timestamp" && amountV?.stringValue) {
      startTimestamp = Date.parse(amountV.stringValue) / 1000;
    }
  }
  return {
    pollTime,
    transactions,
    goalCents,
    goalName,
    ignoredTransactions,
    startTimestamp,
  };
}

export default getBalanceModifications;
