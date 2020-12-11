import dayjs from "dayjs";
import { fetch } from "cross-fetch";

export interface BalanceModification {
  readonly name: string;
  readonly amount: number;
  readonly notes: string;
}

export interface BalanceModifications {
  readonly pollTime: number;
  readonly transactions: readonly BalanceModification[];
  readonly goalCents: number;
  readonly goalName: string;
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
  return fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${id}?${[
      ...args,
      `key=${process.env.GOOGLE_API_KEY}`,
    ].join("&")}`
  ).then((res) => res.json());
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

export async function getBalanceModifications(): Promise<BalanceModifications> {
  const pollTime = dayjs().unix();
  const transactions: BalanceModification[] = [];
  const id = "113tb0FFuUusqRJTy6wMyFIBMOo5Q3Z6kWZUpdvE9CuI";
  const doc = await spreadsheetApiRequest(id, [
    "ranges=Adjustments!A2:D",
    "fields=sheets.data.rowData(values(effectiveValue))",
  ]);
  for (const sheet of asArray(doc, "sheets")) {
    for (const data of asArray(sheet, "data")) {
      for (const rowData of asArray(data, "rowData")) {
        const values = asArray(rowData, "values").map(effectiveValue);
        const [nameV, amountV, includeV, notesV] = values;
        if (includeV?.boolValue) {
          transactions.push({
            name: nameV?.stringValue ?? "",
            amount: Math.floor(100 * (amountV?.numberValue ?? 0)),
            notes: notesV?.stringValue ?? "",
          });
        }
      }
    }
  }
  let goalCents = 1000 * 100;
  let goalName = "Mission Bit";
  const goalRes = await spreadsheetApiRequest(id, [
    "ranges=Instructions!A2:B",
    "fields=sheets.data.rowData(values(effectiveValue))",
  ]);
  for (const sheet of asArray(goalRes, "sheets")) {
    for (const data of asArray(sheet, "data")) {
      for (const rowData of asArray(data, "rowData")) {
        if (isEmptyObject(rowData)) {
          continue;
        }
        const values = asArray(rowData, "values").map(effectiveValue);
        const [nameV, amountV] = values;
        if (nameV?.stringValue === "Goal Amount" && amountV?.numberValue) {
          goalCents = Math.floor(100 * amountV.numberValue);
        }
        if (nameV?.stringValue === "Goal Name" && amountV?.stringValue) {
          goalName = amountV.stringValue;
        }
      }
    }
  }
  return { pollTime, transactions, goalCents, goalName };
}

export default getBalanceModifications;
