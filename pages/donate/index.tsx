import { NextPage } from "next";
import * as React from "react";
import { Layout } from "components/Layout";
import { PageProps, getServerSideProps } from "pages/donate/live";
import Donate from "components/donate";

const Page: NextPage<PageProps> = ({
  batch,
  modifications,
  prefill,
  ...props
}) => (
  <Layout
    {...props}
    canonicalPath="/donate"
    title="Donate Today - Mission Bit"
    description="Donate and support San Francisco area 501c3 Mission Bit today with a tax-deductible donation."
  >
    <Donate
      campaign={batch && modifications ? { batch, modifications } : undefined}
      prefill={prefill}
    />
  </Layout>
);

export { getServerSideProps };
export default Page;
