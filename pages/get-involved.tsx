import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import GetInvolved from "components/get-involved";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – Get Involved">
    <GetInvolved />
  </Layout>
);

export { getStaticProps };
export default Page;
