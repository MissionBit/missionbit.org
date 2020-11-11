import dayjs from "dayjs";

export interface BalanceTransaction {
  readonly id: string;
  readonly created: number;
  readonly amount: number;
  readonly name: string | null;
  readonly type: DonationType;
  readonly subscription: boolean;
}

export interface BalanceTransactionBatch {
  readonly pollTime: number;
  readonly created: number;
  readonly transactions: readonly BalanceTransaction[];
}

const DONATION_TYPES = ["direct", "give-lively"] as const;
type DonationType = typeof DONATION_TYPES[number];

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
      txn.source?.object === "charge" &&
      // Ignore sponsorship transaction
      txn.id !== "txn_1HjQaWK5yunglhMSQnZ8U92N"
    ) {
      const metadata = txn.source.metadata;
      const type =
        metadata.client_application_name === "smart-donations"
          ? "give-lively"
          : "direct";
      const name =
        txn.source.billing_details?.name ??
        ([metadata.user_first_name, metadata.user_last_name]
          .filter((x) => !!x)
          .join(" ") ||
          metadata.user_email) ??
        null;
      transactions.push({
        id: txn.id,
        created: txn.created,
        amount: txn.amount,
        name,
        type,
        subscription: txn.source.invoice !== null,
      });
    }
  }
  return { pollTime, created, transactions };
}

export default getBalanceTransactions;
