import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import Events from "../components/events";

const Page: NextPage<{}> = () => (
  <Layout title="Mission Bit – Events">
    <Events />
  </Layout>
);

export default Page;
