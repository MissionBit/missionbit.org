import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import GetInvolved from "../components/get-involved";

const Page: NextPage<{}> = () => (
  <Layout title="Mission Bit – Get Involved">
    <GetInvolved />
  </Layout>
);

export default Page;
