import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FlourishSeparator from "components/programs/FlourishSeparator";
import Landing from "./Landing";
import SupportOurWork from "./SupportOurWork";
import MakeAnOnlineGift from "./MakeAnOnlineGift";
import LearnMore from "./LearnMore";
import OtherWaysToGive from "./OtherWaysToGive";
import PhotoFooter from "./PhotoFooter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(1),
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
      "supportOurWork makeAnOnlineGift"
      "flourishMiddle flourishMiddle"
      "learnMore      otherWaysToGive"
      "flourishBottom flourishBottom"
      "photoFooter    photoFooter"
    `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "makeAnOnlineGift"
        "learnMore"
        "supportOurWork"
        "otherWaysToGive"
        "photoFooter"
      `,
      "& $flourishMiddle": { display: "none" },
      "& $flourishBottom": { display: "none" },
    },
  },
  supportOurWork: {
    gridArea: "supportOurWork",
  },
  makeAnOnlineGift: {
    gridArea: "makeAnOnlineGift",
  },
  flourishMiddle: {
    gridArea: "flourishMiddle",
  },
  learnMore: {
    gridArea: "learnMore",
  },
  otherWaysToGive: {
    gridArea: "otherWaysToGive",
  },
  flourishBottom: {
    gridArea: "flourishBottom",
  },
  photoFooter: {
    gridArea: "photoFooter",
  },
}));

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main">
      <Landing />
      <Container className={classes.root}>
        <SupportOurWork className={classes.supportOurWork} />
        <MakeAnOnlineGift className={classes.makeAnOnlineGift} />
        <FlourishSeparator className={classes.flourishMiddle} />
        <LearnMore className={classes.learnMore} />
        <OtherWaysToGive className={classes.otherWaysToGive} />
        <FlourishSeparator className={classes.flourishBottom} />
        <PhotoFooter className={classes.photoFooter} />
      </Container>
    </main>
  );
};

export default Main;
