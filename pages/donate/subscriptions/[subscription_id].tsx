import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import DonateSubscription, {
  DonateSubscriptionProps,
} from "components/donate/DonateSubscription";
import {
  billingDetailsTo,
  formatPaymentMethodDetailsSource,
} from "src/stripeSessionInfo";
import { LongDateFormat } from "src/dates";
import Head from "next/head";

const Page: NextPage<
  LayoutStaticProps & { subscriptionInfo: DonateSubscriptionProps }
> = ({ subscriptionInfo, ...props }) => (
  <Layout {...props} title="Mission Bit – Manage Your Subscription">
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <DonateSubscription {...subscriptionInfo} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const subscription_id = ctx.params?.subscription_id;
  if (typeof subscription_id !== "string") {
    res.statusCode = 404;
    res.end();
    return { props: {} };
  }
  const stripe = (await import("src/getStripe")).getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscription_id, {
    expand: ["default_payment_method"],
  });
  if (
    typeof subscription?.plan?.amount !== "number" ||
    typeof subscription.quantity !== "number"
  ) {
    throw new Error(
      `Expecting non-null subscription amount and quantity ${JSON.stringify(
        subscription
      )}`
    );
  }
  const pm = subscription.default_payment_method;
  if (typeof pm !== "object" || pm === null) {
    throw new Error(
      `Expecting non-null default_payment_method ${JSON.stringify(
        subscription
      )}`
    );
  }
  const nextCycle =
    subscription.status === "active"
      ? LongDateFormat.format(subscription.current_period_end * 1000)
      : null;

  const { data: invoices } = await stripe.invoices.list({
    subscription: subscription.id,
    limit: 60,
    status: "paid",
  });

  return {
    props: {
      ...(await getLayoutStaticProps()),
      subscriptionInfo: {
        ...billingDetailsTo(pm.billing_details),
        paidInvoices: invoices.map((invoice) => ({
          created: invoice.created,
          amount: invoice.amount_paid,
          id: invoice.charge,
        })),
        id: subscription.id,
        frequency: "monthly",
        amount: subscription.plan.amount * subscription.quantity,
        paymentMethod: formatPaymentMethodDetailsSource(pm),
        nextCycle,
      },
    },
  };
};

export default Page;
