import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Donate from "components/donate";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – Donate">
    <Donate />
  </Layout>
);

export { getStaticProps };
export default Page;
