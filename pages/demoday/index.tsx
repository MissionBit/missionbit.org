import { NextPage } from "next";
import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import DemoDay from "components/demoday/DemoDay";
import oneLine from "src/oneLine";
import { FeaturedEvents } from "components/events";
import Featured from "components/events/Featured";
import { Box, Container } from "@material-ui/core";
import PastProjectsButton from "components/demoday/PastProjectsButton";
import FlourishSeparator from "components/programs/FlourishSeparator";

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

const period = "Fall 2021";
const title = `${period} Demo Day - Mission Bit`;
const description = oneLine`
${period} Demo Day is a culminating showcase where our students display
their amazing projects to our community of supporters!`;

const demoDayEvent = FeaturedEvents.find((event) => event.id === "demo-day");
// Set this to false when the current projects are populated
const registerOnly = false;

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
      {registerOnly ? (
        <Container>
          <>{demoDayEvent && <Featured {...demoDayEvent} />}</>
          <Box mb={4} />
          <FlourishSeparator />
          <PastProjectsButton />
          <Box mb={4} />
        </Container>
      ) : (
        <DemoDay />
      )}
    </Layout>
  );
};

export { getStaticProps };
export default Page;
