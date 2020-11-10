import dayjs from "dayjs";

export interface BalanceTransaction {
  readonly id: string;
  readonly created: number;
  readonly amount: number;
  readonly name: string | null;
  readonly subscription: boolean;
}

export interface BalanceTransactionBatch {
  readonly pollTime: number;
  readonly created: number;
  readonly transactions: readonly BalanceTransaction[];
}

export async function getBalanceTransactions(
  created?: number
): Promise<BalanceTransactionBatch> {
  const stripe = (await import("src/getStripe")).getStripe();
  const pollTime = dayjs().unix();
  created = created ?? dayjs(dayjs().format("YYYY-MM-01T00:00:00Z")).unix();
  const transactions: BalanceTransaction[] = [];
  for await (const txn of stripe.balanceTransactions.list({
    created: { gt: created },
    expand: [
      "data.source",
      "data.source.customer",
      "data.source.payment_method",
    ],
  })) {
    created = Math.max(created, txn.created);
    if (
      txn.type === "charge" &&
      typeof txn.source === "object" &&
      txn.source?.object === "charge"
    ) {
      transactions.push({
        id: txn.id,
        created: txn.created,
        amount: txn.amount,
        name: txn.source.billing_details?.name,
        subscription: txn.source.invoice !== null,
      });
    }
  }
  return { pollTime, created, transactions };
}

export default getBalanceTransactions;
