import { NextPage, GetServerSideProps } from "next";
import * as React from "react";
import { Layout } from "components/Layout";
import Donate from "components/donate";
import {
  DonatePrefill,
  parseDonatePrefill,
} from "components/donate/DonateCard";
import {
  PageProps as LivePageProps,
  getServerSideProps as liveGetServerSideProps,
} from "pages/donate/live";

export interface PageProps extends LivePageProps {
  prefill?: DonatePrefill;
}

const Page: NextPage<PageProps> = ({
  prefill,
  batch,
  modifications,
  ...layout
}) => (
  <Layout {...layout} canonicalPath="/donate" title="Mission Bit – Donate">
    <Donate
      prefill={prefill}
      campaign={batch && modifications ? { batch, modifications } : undefined}
    />
  </Layout>
);

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const result = await liveGetServerSideProps(ctx);
  if ("redirect" in result || "notFound" in result) {
    return result;
  }
  return {
    props: {
      ...result.props,
      prefill: parseDonatePrefill({ ...ctx.query, ...(ctx.params ?? {}) }),
    },
  };
};

export default Page;
