import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/index/Landing";
import Main from "../components/index/Main";
import styles from "../styles/index.module.css";

const Home: NextPage<{}> = () => (
  <Layout
    title="Mission Bit"
    headerChildren={<Landing />}
    headerClassName={styles.header}
  >
    <Main />
  </Layout>
);

export default Home;
