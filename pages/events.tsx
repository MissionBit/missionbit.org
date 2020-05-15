import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Events from "components/events";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – Events">
    <Events />
  </Layout>
);

export { getStaticProps };
export default Page;
