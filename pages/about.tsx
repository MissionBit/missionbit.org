import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import About from "components/about";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout {...props} title="Mission Bit – About Us">
    <About />
  </Layout>
);

export { getStaticProps };
export default Page;
