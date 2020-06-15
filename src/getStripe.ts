import Stripe from "stripe";

export function getStripe(): Stripe {
  const STRIPE_SK_NAME =
    process.env.NODE_ENV === "production" ? "STRIPE_SK_LIVE" : "STRIPE_SK_TEST";
  const STRIPE_SK = process.env[STRIPE_SK_NAME];
  if (STRIPE_SK === undefined) {
    throw new Error(`Missing ${STRIPE_SK_NAME} environment variable`);
  }
  return new Stripe(STRIPE_SK, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2020-03-02",
  });
}

export default getStripe;
