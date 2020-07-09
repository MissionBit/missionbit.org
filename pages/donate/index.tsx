import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Donate from "components/donate";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    canonicalPath="/donate"
    title="Donate Today - Mission Bit"
    description="Donate and support San Francisco area 501c3 Mission Bit today with a tax-deductible donation."
  >
    <Donate />
  </Layout>
);

export { getStaticProps };
export default Page;
