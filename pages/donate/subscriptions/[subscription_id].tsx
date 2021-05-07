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
import Error404 from "pages/404";

interface PageProps extends LayoutStaticProps {
  subscriptionInfo?: DonateSubscriptionProps;
}

const Page: NextPage<PageProps> = ({ subscriptionInfo, ...props }) =>
  subscriptionInfo === undefined ? (
    <Error404 {...props} />
  ) : (
    <Layout {...props} title="Mission Bit – Manage Your Subscription">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DonateSubscription {...subscriptionInfo} />
    </Layout>
  );

function ensureString(x: unknown, context: string): string {
  if (typeof x !== "string") {
    throw new Error(`Expecting string, not ${typeof x} for ${context}`);
  }
  return x;
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const { res } = ctx;
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const layoutProps = await getLayoutStaticProps();
  const subscription_id = ctx.params?.subscription_id;
  if (typeof subscription_id !== "string") {
    res.statusCode = 404;
    return { props: layoutProps };
  }
  const stripe = require("src/getStripe").getStripe();
  const subscription = await stripe.subscriptions.retrieve(subscription_id, {
    expand: ["default_payment_method"],
  });
  if (subscription.items.data.length !== 1) {
    throw new Error(
      `Expecting one subscription item ${JSON.stringify(subscription)}`
    );
  }
  const item = subscription.items.data[0];
  if (
    typeof item?.plan?.amount !== "number" ||
    typeof item.quantity !== "number"
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
      ...layoutProps,
      subscriptionInfo: {
        ...billingDetailsTo(pm.billing_details),
        paidInvoices: invoices.map((invoice) => ({
          created: invoice.created,
          amount: invoice.amount_paid,
          id: ensureString(invoice.charge, "invoice.charge"),
        })),
        id: subscription.id,
        frequency: "monthly",
        amount: item.plan.amount * item.quantity,
        paymentMethod: formatPaymentMethodDetailsSource(pm),
        nextCycle,
      },
    },
  };
};

export default Page;
