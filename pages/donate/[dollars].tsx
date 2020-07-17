import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import {
  Layout,
  getLayoutStaticProps,
  LayoutStaticProps,
} from "components/Layout";
import Donate, { DonateProps } from "components/donate";
import { parseDonatePrefill } from "components/donate/DonateCard";
import { getOrigin } from "src/absoluteUrl";

interface PageProps {
  layout: LayoutStaticProps;
  donate: DonateProps;
}

const Page: NextPage<PageProps> = ({ layout, donate }) => (
  <Layout {...layout} canonicalPath="/donate" title="Mission Bit – Donate">
    <Donate {...donate} />
  </Layout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  return {
    props: {
      layout: {
        ...(await getLayoutStaticProps()),
        origin: getOrigin(ctx.req.headers.origin),
      },
      donate: {
        prefill: parseDonatePrefill({ ...ctx.query, ...(ctx.params ?? {}) }),
      },
    },
  };
};

export default Page;
