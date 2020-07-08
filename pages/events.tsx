import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Events from "components/events";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Upcoming Events - Mission Bit"
    description="Mission Bit participates and hosts a number of upcoming events and after-school workships in the San Francisco area that are free for students and their families."
  >
    <Events />
  </Layout>
);

export { getStaticProps };
export default Page;
