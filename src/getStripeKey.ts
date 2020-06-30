const STRIPE_KEY_PREFIXES = [
  "STRIPE_PK",
  "STRIPE_SK",
  "STRIPE_WEBHOOK_SIGNING_SECRET",
] as const;
export type StripeKeyPrefix = typeof STRIPE_KEY_PREFIXES[number];

export function getStripeKey(prefix: StripeKeyPrefix): string {
  const name = `${prefix}${process.env.STRIPE_KEY_POSTFIX ?? ""}`;
  const key = process.env[name];
  if (key === undefined) {
    throw new Error(`Missing ${name} environment variable`);
  }
  return key;
}

export default getStripeKey;
