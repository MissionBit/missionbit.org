import { NextPage } from "next";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import oneLine from "src/oneLine";
import Summer20StudentProjects from "components/demoday/past/Fall20StudentProjects";
import Fall20PastProjectsLanding from "components/demoday/past/Fall20PastProjectsLanding";

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

const title = "Fall 2020 Demo Day - Mission Bit";
const description = oneLine`
Fall 2020 Demo Day is a culminating showcase where our students display
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
      <Fall20PastProjectsLanding />
      <Summer20StudentProjects />
    </Layout>
  );
};

export { getStaticProps };
export default Page;
