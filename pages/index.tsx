import { NextPage } from "next";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Landing from "components/index/Landing";
import Index from "components/index";
import Alerts from "components/index/Alerts";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    maxHeight: "var(--document-height, 100vh)",
  },
}));

const Page: NextPage<LayoutStaticProps> = (props) => {
  const classes = useStyles();
  return (
    <Layout
      {...props}
      title="Free coding courses for San Franciso high schoolers - Mission Bit"
      alerts={<Alerts />}
      headerChildren={<Landing />}
      headerClassName={classes.header}
      requireDocumentSize={true}
    >
      <Index />
    </Layout>
  );
};

export { getStaticProps };
export default Page;
