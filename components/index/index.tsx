import * as React from "react";
import Stats from "./Stats";
import Events from "./Events";
import Students from "./Students";
import Social from "./Social";
import Supporters from "../Supporters";
import { makeStyles } from "@material-ui/core/styles";

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
      <Events />
      <Students />
      <Social />
      <Supporters />
    </main>
  );
};

export default Index;
