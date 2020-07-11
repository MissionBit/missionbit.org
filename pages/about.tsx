import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import About from "components/about";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="About Us - Mission Bit"
    description="Mission Bit is a San Francisco area 501(c)3 non-profit that empowers young innovators through a series of educational classes, coding courses and industry experiences."
  >
    <About />
  </Layout>
);

export { getStaticProps };
export default Page;
