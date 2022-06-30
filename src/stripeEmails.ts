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
import { APP } from "./stripeMetadata";

const sg = getSendGrid();
const stripe = getStripe();

const EMAIL_TEMPLATES = {
  receipt: "d-7e5e6a89f9284d2ab01d6c1e27a180f8",
  failure: "d-570b4b8b20e74ec5a9c55be7e07e2665",
};

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
  template: keyof typeof EMAIL_TEMPLATES;
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

async function sendEmail(templateData: EmailTemplateData) {
  const mailData = emailTemplateData(templateData);
  const email = billingDetailsTo(templateData.charge.billing_details).email;
  console.log(
    `Sending ${templateData.frequency} ${templateData.template} for ${templateData.charge.id} to ${email}`
  );
  const result = await sg.send(mailData);
  console.log(`Mail statusCode: ${result[0].statusCode} for ${email}`);
  return result;
}

function emailTemplateData({
  template,
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
    templateId: EMAIL_TEMPLATES[template],
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

export async function stripeCheckoutSessionCompletedPaymentEmail(
  id: string
): Promise<void> {
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
  const appMetadata = session.metadata?.app ?? null;
  if (appMetadata !== APP) {
    console.log(
      `Skipping checkout session ${id} with app metadata ${JSON.stringify(
        appMetadata
      )}`
    );
    return;
  }
  const charge = payment_intent.charges.data[0];
  await sendEmail({
    template: "receipt",
    charge,
    frequency: "one-time",
  });
}

function invoiceTemplate({
  status,
  billing_reason,
}: Stripe.Invoice): "receipt" | "failure" | null {
  if (status === "paid") {
    return "receipt";
  } else if (status === "open" && billing_reason === "subscription_cycle") {
    // No failure email unless it's a renewal, we don't want to send one
    // if they got an error in the Stripe Checkout UX.
    return "failure";
  } else {
    return null;
  }
}

function legacyGetOrigin(origin?: string): string {
  // Update any previously used production origin to legacy.missionbit.org,
  // this will allow subscription emails to be routed to the correct place
  return getOrigin(origin).replace(
    /^https:\/\/(www|donate)\.missionbit\.org$/,
    "https://legacy.missionbit.org"
  );
}

export async function stripeInvoicePaymentEmail(id: string): Promise<void> {
  const invoice = await stripe.invoices.retrieve(id, {
    expand: ["subscription", "payment_intent"],
  });
  const template = invoiceTemplate(invoice);
  if (template === null) {
    console.log(
      `Skipping invoice ${invoice.id} with billing_reason ${invoice.billing_reason} and status ${invoice.status}`
    );
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
  const subscriptionOrigin = subscription.metadata.origin;
  if (!subscriptionOrigin) {
    console.log(
      `Skipping invoice ${invoice.id} with missing subscription origin`
    );
    return;
  }
  const charge = invoice.payment_intent.charges.data[0];
  const origin = legacyGetOrigin(subscriptionOrigin);
  if (template === "failure") {
    await sendEmail({
      template,
      charge,
      frequency: "monthly",
      failure_message: charge.failure_message,
      renew_url: `${origin}/donate/${usdFormatter.format(
        charge.amount / 100
      )}?frequency=monthly`,
      subscription_id: subscription.id,
      subscription_url: `${origin}/donate/subscriptions/${subscription.id}`,
    });
  } else {
    const next = LongDateFormat.format(subscription.current_period_end * 1000);
    await sendEmail({
      template,
      charge,
      frequency: "monthly",
      monthly: {
        next,
        url: `${origin}/donate/subscriptions/${subscription.id}`,
      },
    });
  }
}
