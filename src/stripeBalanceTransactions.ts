import dayjs from "dayjs";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

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

const DONATION_TYPES = ["direct"] as const;
type DonationType = typeof DONATION_TYPES[number];

const DB_TABLE_NAME = `stripe_balance_transactions${
  process.env.STRIPE_KEY_POSTFIX === "_LIVE" ? "" : "_test"
}`;

function getSupabaseClient(): SupabaseClient {
  return createClient(
    process.env.SUPABASE_PROJECT_URL!,
    process.env.SUPABASE_PRIVATE_API_KEY!
  );
}

function unixToISOTimestamp(unix: number): string {
  return new Date(1000 * unix).toISOString();
}

function isoTimestampToUnix(timestamp: string): number {
  return new Date(timestamp).getTime() / 1000;
}

async function getDbTransactions(
  supabase: SupabaseClient,
  created?: number
): Promise<{ created: number; transactions: BalanceTransaction[] }> {
  created = created ?? dayjs(dayjs().format("YYYY-MM-01T00:00:00Z")).unix();
  const { data, error } = await supabase
    .from(DB_TABLE_NAME)
    .select("id, amount, name, type, subscription, created")
    .gte("created", unixToISOTimestamp(created))
    .order("created", { ascending: true });
  if (error || !data) {
    console.error(error);
    throw new Error(error?.message ?? "Unknown error");
  }
  const transactions: BalanceTransaction[] = [];
  for (const row of data) {
    const rowCreated = isoTimestampToUnix(row.created);
    created = Math.max(created, rowCreated);
    transactions.push({
      id: row.id,
      amount: row.amount,
      name: row.name,
      type: row.type,
      subscription: row.subscription,
      created: rowCreated,
    });
  }
  return { created, transactions };
}

async function insertStripeTransactions(
  supabase: SupabaseClient,
  transactions: BalanceTransaction[]
): Promise<void> {
  if (transactions.length === 0) {
    return;
  }
  console.log(
    await supabase.from(DB_TABLE_NAME).upsert(
      transactions.map((row) => ({
        ...row,
        created: unixToISOTimestamp(row.created),
      })),
      { returning: "minimal", ignoreDuplicates: true }
    )
  );
}

export async function getBalanceTransactions(
  created?: number
): Promise<BalanceTransactionBatch> {
  const stripe = (
    require("src/getStripe") as typeof import("src/getStripe")
  ).getStripe();
  const pollTime = dayjs().unix();
  const supabase = getSupabaseClient();
  const res = await getDbTransactions(supabase, created);
  created = res.created;
  const cachedTransactions = res.transactions;
  const stripeTransactions: BalanceTransaction[] = [];
  for await (const txn of stripe.balanceTransactions.list({
    created: { gt: created },
    expand: ["data.source"],
  })) {
    created = Math.max(created, txn.created);
    if (
      txn.type === "charge" &&
      typeof txn.source === "object" &&
      txn.source?.object === "charge"
    ) {
      const metadata = txn.source.metadata;
      const type = "direct";
      const name =
        txn.source.billing_details?.name ??
        ([metadata.user_first_name, metadata.user_last_name]
          .filter((x) => !!x)
          .join(" ") ||
          metadata.user_email) ??
        null;
      stripeTransactions.push({
        id: txn.id,
        created: txn.created,
        amount: txn.amount,
        name,
        type,
        subscription: txn.source.invoice !== null,
      });
    }
  }
  await insertStripeTransactions(supabase, stripeTransactions);
  return {
    pollTime,
    created,
    transactions: [...cachedTransactions, ...stripeTransactions],
  };
}

export default getBalanceTransactions;
