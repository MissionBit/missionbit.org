import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Bridge from "components/bridge/past/Bridge";
import { title, description, pageImage } from "components/bridge/Metadata";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title={title}
    description={description}
    pageImage={pageImage}
  >
    <Bridge />
  </Layout>
);

export { getStaticProps };
export default Page;
