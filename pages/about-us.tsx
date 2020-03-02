import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import AboutUs from "../components/about-us";

const Page: NextPage<{}> = () => (
  <Layout title="Mission Bit – About Us">
    <AboutUs />
  </Layout>
);

export default Page;
