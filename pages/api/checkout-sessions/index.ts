import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import getStripe from "src/getStripe";
import { Frequency, FREQUENCIES } from "src/stripeHelpers";

const MONTHLY_PLAN_ID = "mb-monthly-001";

const stripe = getStripe();

const MIN_AMOUNT = 1 * 100;
const MAX_AMOUNT = 10000 * 100;

interface PostBody {
  amount: number;
  frequency: Frequency;
  metadata: { [k: string]: string };
}

function isFrequency(s: any): s is Frequency {
  return FREQUENCIES.indexOf(s) >= 0;
}

function parseBody(body: any): PostBody | undefined {
  if (typeof body !== "object") {
    return undefined;
  }
  const { amount, frequency, metadata } = body;
  if (
    typeof amount !== "number" ||
    amount < MIN_AMOUNT ||
    amount > MAX_AMOUNT
  ) {
    return undefined;
  }
  if (!isFrequency(frequency)) {
    return undefined;
  }
  return { amount, frequency, metadata: metadata ?? {} };
}

function session_args(
  origin: string,
  amount: number,
  frequency: Frequency,
  metadata: { [k: string]: string }
): Stripe.Checkout.SessionCreateParams {
  const payment_method_types: Stripe.Checkout.SessionCreateParams.PaymentMethodType[] = [
    "card",
  ];
  const success_url = `${origin}/donate/result?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${origin}/donate/result?session_id={CHECKOUT_SESSION_ID}`;
  if (frequency === "monthly") {
    return {
      mode: "subscription",
      payment_method_types,
      success_url,
      cancel_url,
      subscription_data: {
        items: [{ plan: MONTHLY_PLAN_ID, quantity: amount }],
        metadata,
      },
    };
  } else {
    return {
      mode: "payment",
      payment_method_types,
      success_url,
      cancel_url,
      line_items: [
        {
          amount,
          currency: "USD",
          name: "One-time donation",
          quantity: 1,
        },
      ],
      submit_type: "donate",
      payment_intent_data: { description: "Donation", metadata },
    };
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const body = parseBody(req.body);
      if (body === undefined) {
        res.status(400).json({ error: "Invalid input" });
        return;
      }
      const { amount, frequency, metadata } = body;
      // Create Checkout Sessions from body params.
      console.log(
        session_args(
          req.headers.origin ?? "https://donate.missionbit.org",
          amount,
          frequency,
          metadata
        )
      );
      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(
        session_args(
          req.headers.origin ?? "https://donate.missionbit.org",
          amount,
          frequency,
          metadata
        )
      );

      res.status(200).json({ sessionId: checkoutSession.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
