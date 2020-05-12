import { NextPage } from "next";
import * as React from "react";
import Layout from "components/Layout";
import Gala from "components/gala/Gala";
import Banner from "components/gala/Banner";
import oneLine from "src/oneLine";

const description = oneLine`
Mission Bit's Fourth Annual Gala is a celebration of seven years of growth,
impact, and learning. Join us for this inspiring event, meet our students,
hear their stories, and help us reach our 2021 goals!
`;

const Page: NextPage<{}> = () => (
  <Layout
    title="Mission Bit – 2020 Mission Bit Gala"
    headerChildren={<Banner />}
    description={description}
    pageImage="/images/gala/2020-poster-save-the-date.jpg"
  >
    <Gala />
  </Layout>
);

export default Page;
