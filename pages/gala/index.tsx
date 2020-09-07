import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Gala from "components/gala/Gala";
import { title, description, pageImage } from "components/gala/Metadata";

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title={title}
    description={description}
    pageImage={pageImage}
  >
    <Gala />
  </Layout>
);

export { getStaticProps };
export default Page;
