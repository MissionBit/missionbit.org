import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import Donate, { DonateProps } from "components/donate";
import { parseDonatePrefill } from "components/donate/DonateCard";

const Page: NextPage<{ layout: LayoutStaticProps; donate: DonateProps }> = ({
  layout,
  donate,
}) => (
  <Layout {...layout} title="Mission Bit – Donate">
    <Donate {...donate} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      layout: await getLayoutStaticProps(),
      donate: {
        prefill: parseDonatePrefill({ ...ctx.query, ...(ctx.params ?? {}) }),
      },
    },
  };
};

export default Page;
