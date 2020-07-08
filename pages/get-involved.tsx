import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import GetInvolved from "components/get-involved";
import { makeStyles } from "@material-ui/core/styles";
import Landing from "components/get-involved/Landing";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      minHeight: "var(--document-height, 100vh)",
    },
  },
}));

const Page: NextPage<LayoutStaticProps> = (props) => {
  const classes = useStyles();
  return (
    <Layout
      {...props}
      headerClassName={classes.header}
      headerChildren={<Landing />}
      requireDocumentSize={true}
      title="Get Involved - Mission Bit"
      description="Help Mission Bit by volunteering or donating to help support its cause and mission of bridging the technology divide today."
    >
      <GetInvolved />
    </Layout>
  );
};

export { getStaticProps };
export default Page;
