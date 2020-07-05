import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import oneLine from "src/oneLine";
import Bridge from "components/bridge/Bridge";

const description = oneLine`
Bridging the Youth Tech Divide
`;

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Bridging the Youth Tech Divide"
    description={description}
  >
    <Bridge />
  </Layout>
);

export { getStaticProps };
export default Page;
