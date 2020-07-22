import { NextPage } from "next";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import DemoDay from "components/demoday/DemoDay";
import oneLine from "src/oneLine";

const useStyles = makeStyles({
  header: { display: "none" },
  footer: {
    "& > *:not(#get-updates)": {
      display: "none",
    },
  },
});

const title = "Summer 2020 Demo Day - Mission Bit";
const description = oneLine`
Summer 2020 Demo Day is a culminating showcase where our students display
their amazing projects to our community of supporters!`;

const Page: NextPage<LayoutStaticProps> = (props) => {
  const classes = useStyles();

  return (
    <Layout
      {...props}
      headerClassName={classes.header}
      footerClassName={classes.footer}
      title={title}
      description={description}
    >
      <DemoDay />
    </Layout>
  );
};

export { getStaticProps };
export default Page;
