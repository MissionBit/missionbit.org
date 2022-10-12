import { NextPage } from "next";
import * as React from "react";
import { Layout } from "components/Layout";
import Donate from "components/donate";
import { PageProps, getServerSideProps } from "pages/donate/live";

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

export { getServerSideProps };

export default Page;
