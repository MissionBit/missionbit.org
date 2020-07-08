import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Programs from "components/programs";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Free coding programs for high school students - Mission Bit"
    description="Mission Bit offers a number of free coding programs for area high schoolers including online workshops, summer bootcamps, and programming classes."
  >
    <Programs />
  </Layout>
);

export { getStaticProps };
export default Page;
