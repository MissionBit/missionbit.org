import { NextPage } from "next";
import * as React from "react";
import Layout from "../../components/Layout";
import Gala from "../../components/gala/Gala";
import Banner from "../../components/gala/Banner";

const Page: NextPage<{}> = () => (
  <Layout
    title="Mission Bit – 2020 Mission Bit Gala"
    headerChildren={<Banner />}
  >
    <Gala />
  </Layout>
);

export default Page;
