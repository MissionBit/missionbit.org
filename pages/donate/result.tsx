import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import DonateResult from "components/donate/DonateResult";
import stripeSessionInfo, { StripeSessionInfo } from "src/stripeSessionInfo";

const Page: NextPage<
  LayoutStaticProps & { sessionInfo: StripeSessionInfo }
> = ({ sessionInfo, ...props }) => (
  <Layout {...props} title="Mission Bit – Thank You For Your Donation!">
    <DonateResult sessionInfo={sessionInfo} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const { session_id } = ctx.query;
  if (typeof session_id !== "string") {
    res.statusCode = 404;
    res.end();
    return { props: {} };
  }
  const stripe = (await import("src/getStripe")).getStripe();
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["payment_intent", "subscription.default_payment_method"],
  });
  return {
    props: {
      ...(await getLayoutStaticProps()),
      sessionInfo: stripeSessionInfo(session),
    },
  };
};

export default Page;
