import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import DonateCancel from "components/donate/DonateCancel";
import Head from "next/head";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – Donation Canceled">
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <DonateCancel />
  </Layout>
);

export { getStaticProps };
export default Page;
