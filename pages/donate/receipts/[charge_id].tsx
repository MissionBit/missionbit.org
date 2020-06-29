import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import DonateResult from "components/donate/DonateResult";
import {
  StripeSessionInfo,
  stripeSessionInfoFromCharge,
} from "src/stripeSessionInfo";
import Head from "next/head";

const Page: NextPage<
  LayoutStaticProps & { sessionInfo: StripeSessionInfo }
> = ({ sessionInfo, ...props }) => (
  <Layout {...props} title="Mission Bit – Thank You For Your Donation!">
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <DonateResult sessionInfo={sessionInfo} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { res } = ctx;
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const { charge_id } = ctx.query;
  if (typeof charge_id !== "string") {
    res.statusCode = 404;
    res.end();
    return { props: {} };
  }
  const stripe = (await import("src/getStripe")).getStripe();
  const charge = await stripe.charges.retrieve(charge_id);
  if (charge.status === "failed") {
    res.statusCode = 404;
    res.end();
    return { props: {} };
  }
  return {
    props: {
      ...(await getLayoutStaticProps()),
      sessionInfo: stripeSessionInfoFromCharge(charge),
    },
  };
};

export default Page;
