import Stripe from "stripe";
import getStripeKey from "./getStripeKey";

export function getStripe(): Stripe {
  return new Stripe(getStripeKey("STRIPE_SK"), {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2020-03-02",
    maxNetworkRetries: 3,
  });
}

export default getStripe;
