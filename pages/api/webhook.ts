import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import getStripe from "src/getStripe";
import getStripeKey from "src/getStripeKey";
import {
  formatPaymentMethodDetailsSource,
  billingDetailsTo,
} from "src/stripeSessionInfo";
import { APP } from "src/stripeMetadata";
import getSendGrid from "src/getSendgrid";
import { DONATE_EMAIL } from "src/emails";
import usdFormatter from "src/usdFormatter";
import { Frequency } from "src/stripeHelpers";
import { MailDataRequired } from "@sendgrid/mail";
import { ShortDateFormat, LongDateFormat } from "src/dates";
import { getOrigin } from "src/absoluteUrl";
import { buffer, RequestHandler } from "micro";
import Cors from "micro-cors";

const sg = getSendGrid();
const stripe = getStripe();

const STRIPE_WEBHOOK_SIGNING_SECRET = getStripeKey(
  "STRIPE_WEBHOOK_SIGNING_SECRET"
);
const RECEIPT_TEMPLATE_ID = "d-7e5e6a89f9284d2ab01d6c1e27a180f8";
const FAILURE_TEMPLATE_ID = "d-570b4b8b20e74ec5a9c55be7e07e2665";

function eventObject<T extends Stripe.Event.Data.Object & { id: string }>(
  event: Stripe.Event
) {
  const obj = event.data.object as T;
  console.log(`handling ${event.type} id: ${obj.id}`);
  return obj;
}

async function stripeCheckoutSessionCompleted(event: Stripe.Event) {
  const session: Stripe.Checkout.Session = eventObject(event);
  if (session.mode === "payment") {
    return stripeCheckoutSessionCompletedPayment(
      await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["payment_intent"],
      })
    );
  }
}

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

async function stripeCheckoutSessionCompletedPayment(
  session: Stripe.Checkout.Session
) {
  const payment_intent = session.payment_intent;
  if (!payment_intent || typeof payment_intent !== "object") {
    throw new Error(
      `Expecting expanded payment_intent: ${JSON.stringify(payment_intent)}`
    );
  }
  const charge = payment_intent.charges.data[0];
  if (payment_intent.metadata.app !== APP) {
    console.log(`Skipping charge email from old app: ${charge.id}`);
  }
  await sg.send(
    emailTemplateData({
      templateId: RECEIPT_TEMPLATE_ID,
      charge,
      frequency: "one-time",
    })
  );
  // track_donation(
  //     metadata=payment_intent.metadata, frequency="one-time", charge=charge
  // )
}

async function stripeInvoicePaymentSucceeded(event: Stripe.Event) {
  const obj: Stripe.Invoice = eventObject(event);
  const invoice = await stripe.invoices.retrieve(obj.id, {
    expand: ["subscription", "payment_intent"],
  });
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
  if (subscription.metadata.app !== APP) {
    console.log(`Skipping charge email from old app: ${charge.id}`);
    return;
  }
  const next = LongDateFormat.format(subscription.current_period_end * 1000);
  await sg.send(
    emailTemplateData({
      templateId: RECEIPT_TEMPLATE_ID,
      charge,
      frequency: "monthly",
      monthly: {
        next,
        url: `${getOrigin(subscription.metadata.origin)}/donate/subscriptions/${
          subscription.id
        }`,
      },
    })
  );

  // track_donation(metadata=subscription.metadata, frequency="monthly", charge=charge)
}

async function stripeInvoicePaymentFailed(event: Stripe.Event) {
  const obj: Stripe.Invoice = eventObject(event);
  const invoice = await stripe.invoices.retrieve(obj.id, {
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
  if (subscription.metadata.app !== APP) {
    console.log(`Skipping charge email from old app: ${charge.id}`);
    return;
  }
  const origin = getOrigin(subscription.metadata.origin);
  await sg.send(
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

  // track_invoice_failure(
  //     metadata=subscription.metadata, frequency="monthly", charge=charge
  // )
}

async function defaultHandler(event: Stripe.Event) {
  console.log(`${event.type} not handled`);
}

const HANDLERS: { [k: string]: (event: Stripe.Event) => Promise<void> } = {
  "checkout.session.completed": stripeCheckoutSessionCompleted,
  "invoice.payment_succeeded": stripeInvoicePaymentSucceeded,
  "invoice.payment_failed": stripeInvoicePaymentFailed,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  let event: Stripe.Event;
  try {
    const sig = req.headers["stripe-signature"];
    if (sig === undefined) {
      throw new Error(`Missing signature`);
    }
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      STRIPE_WEBHOOK_SIGNING_SECRET
    );
  } catch (err) {
    console.error(err);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  const handleEvent = HANDLERS[event.type] ?? defaultHandler;
  await handleEvent(event);
  res.status(200).json({ received: true });
}

export default Cors({
  allowMethods: ["POST", "HEAD"],
})(handler as RequestHandler);
