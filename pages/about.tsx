import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import About from "../components/about";

const Page: NextPage<{}> = () => (
  <Layout title="Mission Bit – About Us">
    <About />
  </Layout>
);

export default Page;
