import { NextPage } from "next";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import oneLine from "src/oneLine";
import Spring21PastProjectsLanding from "components/demoday/past/Spring21PastProjectsLanding";
import Spring21StudentProjects from "components/demoday/past/Spring21StudentProjects";

const useStyles = makeStyles({
  header: {
    // display: "none"
  },
  footer: {
    "& > *:not(#get-updates)": {
      // display: "none",
    },
  },
});

const title = "Spring 2021 Demo Day - Mission Bit";
const description = oneLine`
Spring 2021 Demo Day is a culminating showcase where our students display
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
      <Spring21PastProjectsLanding />
      <Spring21StudentProjects />
    </Layout>
  );
};

export { getStaticProps };
export default Page;
