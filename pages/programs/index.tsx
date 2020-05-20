import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Programs from "components/programs";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – Programs">
    <Programs />
  </Layout>
);

export { getStaticProps };
export default Page;
