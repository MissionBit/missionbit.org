import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import Programs from "../components/programs";

const Page: NextPage<{}> = () => (
  <Layout title="Mission Bit – Programs">
    <Programs />
  </Layout>
);

export default Page;
