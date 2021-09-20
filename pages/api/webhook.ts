import { NextApiHandler } from "next";
import Stripe from "stripe";
import getStripe from "src/getStripe";
import getStripeKey from "src/getStripeKey";
import { buffer, RequestHandler } from "micro";
import Cors from "micro-cors";
import {
  stripeCheckoutSessionCompletedPaymentEmail,
  stripeInvoicePaymentEmail,
} from "src/stripeEmails";

const stripe = getStripe();

const STRIPE_WEBHOOK_SIGNING_SECRET = getStripeKey(
  "STRIPE_WEBHOOK_SIGNING_SECRET"
);

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
    await stripeCheckoutSessionCompletedPaymentEmail(session.id);
    // track_donation(
    //     metadata=payment_intent.metadata, frequency="one-time", charge=charge
    // )
  }
}

async function stripeInvoicePaymentSucceeded(event: Stripe.Event) {
  const obj: Stripe.Invoice = eventObject(event);
  await stripeInvoicePaymentEmail(obj.id);
  // track_donation(metadata=subscription.metadata, frequency="monthly", charge=charge)
}

async function stripeInvoicePaymentFailed(event: Stripe.Event) {
  const obj: Stripe.Invoice = eventObject(event);
  await stripeInvoicePaymentEmail(obj.id);
  // track_invoice_failure(
  //     metadata=subscription.metadata, frequency="monthly", charge=charge
  // )
}

async function defaultHandler(event: Stripe.Event) {
  console.log(`${event.type} not handled id: ${event.id}`);
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

const handler: NextApiHandler = async (req, res) => {
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
    res.status(400).send(`Webhook Error: ${(err as Error).message}`);
    return;
  }
  const handleEvent = HANDLERS[event.type] ?? defaultHandler;
  await handleEvent(event);
  res.status(200).json({ received: true });
};

export default Cors({
  allowMethods: ["POST", "HEAD"],
})(handler as RequestHandler);
