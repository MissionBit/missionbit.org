import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Sponsorship from "components/gala/Sponsorship";
import oneLine from "src/oneLine";

const description = oneLine`
Mission Bit's Fourth Annual Gala is a celebration of seven years of growth,
impact, and learning. Join us for this inspiring event, meet our students,
hear their stories, and help us reach our 2021 goals!
`;

const Page: NextPage<LayoutStaticProps> = (props) => (
  <Layout
    {...props}
    title="Mission Bit – 2020 Mission Bit Gala Sponsorship"
    description={description}
    pageImage="/images/gala/2020-poster-save-the-date.jpg"
  >
    <Sponsorship />
  </Layout>
);

export { getStaticProps };
export default Page;
