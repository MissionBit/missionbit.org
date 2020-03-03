import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/index/Landing";
import Index from "../components/index";
import styles from "../styles/index.module.css";

const Page: NextPage<{}> = () => (
  <Layout
    title="Mission Bit"
    headerChildren={<Landing />}
    headerClassName={styles.header}
  >
    <Index />
  </Layout>
);

export default Page;
