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
  <Layout {...layout} canonicalPath="/donate" title="Mission Bit – Donate">
    <Donate {...donate} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      layout: {
        ...(await getLayoutStaticProps()),
        origin: ctx.req.headers.origin,
      },
      donate: {
        prefill: parseDonatePrefill({ ...ctx.query, ...(ctx.params ?? {}) }),
      },
    },
  };
};

export default Page;
