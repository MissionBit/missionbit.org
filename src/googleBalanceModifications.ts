import dayjs from "dayjs";

export interface BalanceModification {
  readonly name: string;
  readonly amount: number;
  readonly notes: string;
}

export interface BalanceModifications {
  readonly pollTime: number;
  readonly transactions: readonly BalanceModification[];
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

export async function getBalanceModifications(): Promise<BalanceModifications> {
  const { fetch } = await import("cross-fetch");
  const pollTime = dayjs().unix();
  const transactions: BalanceModification[] = [];
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/1dZgjF3SJXtO-4cC4M92y0ubvoQHs5GF5tjoj-OQtwl4?${[
      "ranges=Adjustments!A2:D",
      "fields=sheets.data.rowData(values(effectiveValue))",
      `key=${process.env.GOOGLE_API_KEY}`,
    ].join("&")}`
  );
  const doc = await res.json();
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
  return { pollTime, transactions };
}

export default getBalanceModifications;
