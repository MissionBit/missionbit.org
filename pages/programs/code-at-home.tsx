import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import LandingCodeAtHome from "components/programs/LandingCodeAtHome";
import FlourishSeparator from "components/programs/FlourishSeparator";
import CodeAtHome from "components/programs/CodeAtHome";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Free coding classes for high school students - Mission Bit"
    description="Mission Bit offers a number of free coding courses for area high schoolers including online workshops, summer bootcamps, and programming classes."
  >
    <LandingCodeAtHome />
    <FlourishSeparator />
    <CodeAtHome />
    <FlourishSeparator />
  </Layout>
);

export { getStaticProps };
export default Page;
