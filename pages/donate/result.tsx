import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import DonateResult from "components/donate/DonateResult";
import stripeSessionInfo, { StripeSessionInfo } from "src/stripeSessionInfo";
import Head from "next/head";
import Error404 from "pages/404";

interface PageProps extends LayoutStaticProps {
  sessionInfo?: StripeSessionInfo;
}

const Page: NextPage<PageProps> = ({ sessionInfo, ...props }) =>
  sessionInfo === undefined ? (
    <Error404 {...props} />
  ) : (
    <Layout {...props} title="Mission Bit – Thank You For Your Donation!">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <DonateResult sessionInfo={sessionInfo} />
    </Layout>
  );

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const { res } = ctx;
  if (typeof window !== "undefined") {
    throw new Error("Must be called server-side");
  }
  const { session_id } = ctx.query;
  const layoutProps = await getLayoutStaticProps();
  if (typeof session_id !== "string") {
    res.statusCode = 404;
    return { props: layoutProps };
  }
  const stripe = (await import("src/getStripe")).getStripe();
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["payment_intent", "subscription.latest_invoice.charge"],
  });
  return {
    props: {
      ...layoutProps,
      sessionInfo: stripeSessionInfo(session),
    },
  };
};

export default Page;
