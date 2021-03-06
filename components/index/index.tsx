import * as React from "react";
import Stats from "./Stats";
import Students from "./Students";
import Social from "./Social";
import Supporters from "components/Supporters";
import SupportOurYouth from "./SupportOurYouth";
import Register from "./Register";
import MissionStatement from "./MissionStatement";
import CoreValues from "./CoreValues";
import { makeStyles } from "@material-ui/core/styles";
import WebTechSupporters from "./WebTechSupporters";

const useStyles = makeStyles(() => ({
  main: {
    /*
      This prevents margin collapse, ensuring the #main scroll position
      is at the very top of the stats section
    */
    display: "flex",
    flexDirection: "column",
  },
}));

const Index: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.main}>
      <Stats />
      <MissionStatement />
      <CoreValues />
      <Register />
      <Students />
      <Supporters />
      <WebTechSupporters />
      <SupportOurYouth />
      <Social />
    </main>
  );
};

export default Index;
