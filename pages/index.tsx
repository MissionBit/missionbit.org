import { NextPage } from "next";
import * as React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../components/Layout";
import Landing from "../components/index/Landing";
import Index from "../components/index";
import Alerts from "../components/index/Alerts";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    maxHeight: "var(--document-height, 100vh)",
  },
}));

function updateDocumentHeight() {
  if (typeof document === "undefined") {
    return;
  }
  const el = document.documentElement;
  el.style.setProperty("--document-height", `${el.clientHeight}px`);
}

const Page: NextPage<{}> = () => {
  const classes = useStyles();
  useEffect(() => {
    updateDocumentHeight();
    window.addEventListener("resize", updateDocumentHeight);
    return () => window.removeEventListener("resize", updateDocumentHeight);
  }, []);
  return (
    <Layout
      title="Mission Bit"
      alerts={<Alerts />}
      headerChildren={<Landing />}
      headerClassName={classes.header}
    >
      <Index />
    </Layout>
  );
};

export default Page;
