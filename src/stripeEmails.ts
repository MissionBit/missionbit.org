import Stripe from "stripe";
import getStripe from "src/getStripe";
import {
  formatPaymentMethodDetailsSource,
  billingDetailsTo,
} from "src/stripeSessionInfo";
import getSendGrid from "src/getSendgrid";
import { DONATE_EMAIL } from "src/emails";
import usdFormatter from "src/usdFormatter";
import { Frequency } from "src/stripeHelpers";
import { MailDataRequired } from "@sendgrid/mail";
import { ShortDateFormat, LongDateFormat } from "src/dates";
import { getOrigin } from "src/absoluteUrl";

const sg = getSendGrid();
const stripe = getStripe();

const RECEIPT_TEMPLATE_ID = "d-7e5e6a89f9284d2ab01d6c1e27a180f8";
const FAILURE_TEMPLATE_ID = "d-570b4b8b20e74ec5a9c55be7e07e2665";

function donorName(billing_details: Stripe.Charge.BillingDetails): string {
  if (billing_details.email === null) {
    throw new Error(
      `Expecting non-null email ${JSON.stringify(billing_details)}`
    );
  }
  return billing_details.name
    ? `${billing_details.name} <${billing_details.email}>`
    : billing_details.email;
}

interface EmailTemplateData {
  templateId: string;
  charge: Stripe.Charge;
  frequency: Frequency;
  monthly?: {
    next: string;
    url: string;
  };
  failure_message?: string | null;
  renew_url?: string;
  subscription_id?: string;
  subscription_url?: string;
}

function emailTemplateData({
  templateId,
  charge,
  frequency,
  ...extra
}: EmailTemplateData): MailDataRequired {
  if (!charge?.payment_method_details) {
    throw new Error(
      `Expecting charge to have payment_method_details ${JSON.stringify(
        charge
      )}`
    );
  }
  const payment_method = formatPaymentMethodDetailsSource(
    charge.payment_method_details
  );
  return {
    templateId,
    from: { name: "Mission Bit", email: DONATE_EMAIL },
    personalizations: [
      {
        to: [billingDetailsTo(charge.billing_details)],
        dynamicTemplateData: {
          transaction_id: charge.id,
          frequency,
          total: usdFormatter.format(charge.amount / 100),
          date: ShortDateFormat.format(charge.created * 1000),
          payment_method: payment_method,
          donor: donorName(charge.billing_details),
          ...extra,
        },
      },
    ],
  };
}

export async function stripeCheckoutSessionCompletedPaymentEmail(id: string) {
  const session = await stripe.checkout.sessions.retrieve(id, {
    expand: ["payment_intent"],
  });
  if (session.mode !== "payment") {
    throw new Error(`Expecting session.mode === "payment"`);
  }

  const payment_intent = session.payment_intent;
  if (!payment_intent || typeof payment_intent !== "object") {
    throw new Error(
      `Expecting expanded payment_intent: ${JSON.stringify(payment_intent)}`
    );
  }
  const charge = payment_intent.charges.data[0];
  await sg.send(
    emailTemplateData({
      templateId: RECEIPT_TEMPLATE_ID,
      charge,
      frequency: "one-time",
    })
  );
}

export async function stripeInvoicePaymentEmail(id: string) {
  const invoice = await stripe.invoices.retrieve(id, {
    expand: ["subscription", "payment_intent"],
  });
  if (invoice.billing_reason !== "subscription_cycle") {
    // No email unless it's a renewal, they got an error in the
    // Stripe Checkout UX for new subscriptions.
    return;
  }
  const subscription = invoice.subscription;
  if (typeof subscription !== "object" || subscription === null) {
    throw new Error(
      `Expecting expanded subcription ${JSON.stringify(invoice)}`
    );
  }
  if (
    typeof invoice.payment_intent !== "object" ||
    invoice.payment_intent === null
  ) {
    throw new Error(
      `Expecting expanded payment_intent ${JSON.stringify(invoice)}`
    );
  }
  const charge = invoice.payment_intent.charges.data[0];
  const origin = getOrigin(subscription.metadata.origin);
  if (invoice.status === "open") {
    return await sg.send(
      emailTemplateData({
        templateId: FAILURE_TEMPLATE_ID,
        charge,
        frequency: "monthly",
        failure_message: charge.failure_message,
        renew_url: `${origin}/donate/${usdFormatter.format(
          charge.amount / 100
        )}?frequency=monthly`,
        subscription_id: subscription.id,
        subscription_url: `${origin}/donate/subscriptions/${subscription.id}`,
      })
    );
  } else if (invoice.status === "paid") {
    const next = LongDateFormat.format(subscription.current_period_end * 1000);
    return await sg.send(
      emailTemplateData({
        templateId: RECEIPT_TEMPLATE_ID,
        charge,
        frequency: "monthly",
        monthly: {
          next,
          url: `${getOrigin(
            subscription.metadata.origin
          )}/donate/subscriptions/${subscription.id}`,
        },
      })
    );
  } else {
    throw new Error(
      `Unexpected invoice.status ${JSON.stringify(invoice.status)}`
    );
  }
}
