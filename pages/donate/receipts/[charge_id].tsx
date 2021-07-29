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
  const layoutProps = await getLayoutStaticProps();
  const { charge_id } = ctx.query;
  if (typeof charge_id !== "string") {
    res.statusCode = 404;
    return { props: layoutProps };
  }
  const stripe = (require("src/getStripe") as typeof import("src/getStripe")).getStripe();
  const charge = await stripe.charges.retrieve(charge_id);
  if (charge.status === "failed") {
    res.statusCode = 404;
    return { props: layoutProps };
  }
  return {
    props: {
      ...layoutProps,
      sessionInfo: stripeSessionInfoFromCharge(charge),
    },
  };
};

export default Page;
