import { NextPage } from "next";
import * as React from "react";
import Layout from "../components/Layout";
import Landing from "../components/index/Landing";
import Index from "../components/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
}));

const Page: NextPage<{}> = () => {
  const classes = useStyles();
  return (
    <Layout
      title="Mission Bit"
      headerChildren={<Landing />}
      headerClassName={classes.header}
    >
      <Index />
    </Layout>
  );
};

export default Page;
