import Stripe from "stripe";
import { capitalizeFirst } from "./stripeHelpers";

function sendgridSafeName(name: string): string {
  // The to.name, cc.name, and bcc.name personalizations cannot include either the ; or , characters.
  return name.replace(/([,;]\s*)+/g, " ");
}

export function billingDetailsTo(
  billing_details: Stripe.PaymentMethod.BillingDetails
) {
  return {
    name: sendgridSafeName(billing_details.name ?? ""),
    email: billing_details.email ?? "",
  };
}

function formatIdentifier(s: string): string {
  // >>> format_identifier('apple_pay')
  // 'Apple Pay'
  return s.split("_").map(capitalizeFirst).join(" ");
}

const CARD_BRANDS: { [k: string]: string } = {
  amex: "American Express",
  diners: "Diners Club",
  discover: "Discover",
  jcb: "JCB",
  mastercard: "Mastercard",
  unionpay: "UnionPay",
  visa: "Visa",
};

export function formatPaymentMethodDetailsSource(
  payment_method_details:
    | Stripe.PaymentMethod
    | Stripe.Charge.PaymentMethodDetails
) {
  const payment_type = payment_method_details.type;
  switch (payment_type) {
    case "card": {
      const details = payment_method_details[payment_type];
      if (details === undefined) {
        break;
      }
      const parts: string[] = [];
      const brand = details.brand !== null ? CARD_BRANDS[details.brand] : null;
      if (brand) {
        parts.push(brand);
      }
      if (details.funding !== null && details.funding !== "unknown") {
        parts.push(details.funding);
      }
      parts.push("card");
      if (details.wallet) {
        parts.push(`(${formatIdentifier(details.wallet.type)})`);
      }
      return parts.join(" ");
    }
  }
  return formatIdentifier(payment_type);
}

export interface StripeSessionInfo {
  id: string;
  frequency: string;
  amount: number;
  payment_method: string;
  name: string;
  email: string;
  created: number;
}

export function stripeSessionInfo(
  session: Stripe.Checkout.Session
): StripeSessionInfo {
  switch (session.mode) {
    case "subscription": {
      if (typeof session.subscription !== "object" || !session.subscription) {
        throw new Error(
          `Expected subscription to be expanded ${JSON.stringify(session)}`
        );
      }
      const { subscription } = session;
      const pm = subscription.default_payment_method;
      if (typeof pm !== "object" || !pm) {
        throw new Error(
          `Expected default_payment_method to be expanded ${JSON.stringify(
            session
          )}`
        );
      }
      const { plan, quantity } = subscription;
      if (typeof plan?.amount !== "number" || typeof quantity !== "number") {
        throw new Error(
          `Expected non-null subscription plan ${JSON.stringify(session)}`
        );
      }

      return {
        ...billingDetailsTo(pm.billing_details),
        id: subscription.id,
        frequency: "monthly",
        amount: plan.amount * quantity,
        payment_method: formatPaymentMethodDetailsSource(pm),
        created: subscription.created * 1000,
      };
    }
    case "payment": {
      const { payment_intent } = session;
      if (typeof payment_intent !== "object" || !payment_intent) {
        throw new Error(
          `Expected payment_intent to be expanded ${JSON.stringify(session)}`
        );
      }
      const [charge] = payment_intent.charges.data;
      if (typeof charge !== "object" || !charge) {
        throw new Error(
          `Expected charge to be present ${JSON.stringify(session)}`
        );
      }
      const { payment_method_details } = charge;
      if (
        typeof payment_method_details !== "object" ||
        !payment_method_details
      ) {
        throw new Error(
          `Expected payment_method_details to be expanded ${JSON.stringify(
            session
          )}`
        );
      }
      return {
        ...billingDetailsTo(charge.billing_details),
        id: charge.id,
        frequency: "one-time",
        amount: charge.amount,
        payment_method: formatPaymentMethodDetailsSource(
          payment_method_details
        ),
        created: charge.created,
      };
    }
    default: {
      throw new Error(`Unsupported session type ${JSON.stringify(session)}`);
    }
  }
}

export default stripeSessionInfo;
