import { NextPage } from "next";
import * as React from "react";
import Layout from "../../components/Layout";
import Sponsorship from "../../components/gala/Sponsorship";
import Banner from "../../components/gala/Banner";

const Page: NextPage<{}> = () => (
  <Layout
    title="Mission Bit – 2020 Mission Bit Gala Sponsorship"
    headerChildren={<Banner />}
  >
    <Sponsorship />
  </Layout>
);

export default Page;
