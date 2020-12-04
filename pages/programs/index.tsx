import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Landing from "components/programs/Landing";
import Description from "components/programs/Description";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Free coding classes for high school students - Mission Bit"
    description="Mission Bit offers a number of free coding courses for area high schoolers including online workshops, summer bootcamps, and programming classes."
  >
    <Landing />
    <Description />
  </Layout>
);

export { getStaticProps };
export default Page;
