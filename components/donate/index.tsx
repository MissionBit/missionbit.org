import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import FlourishSeparator from "components/programs/FlourishSeparator";
import Landing from "./Landing";
import SupportOurWork from "./SupportOurWork";
import MakeAnOnlineGift from "./MakeAnOnlineGift";
import LearnMore from "./LearnMore";
import OtherWaysToGive from "./OtherWaysToGive";
import PhotoFooter from "./PhotoFooter";
import { DonatePrefill } from "./DonateCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    padding: theme.spacing(0, 4),
    marginBottom: theme.spacing(2),
    gridGap: theme.spacing(1, 4),
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
      padding: 0,
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "makeAnOnlineGift"
        "learnMore"
        "supportOurWork"
        "otherWaysToGive"
        "flourishBottom"
        "photoFooter"
      `,
      "& $flourishMiddle": { display: "none" },
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
    margin: theme.spacing(0, -4),
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}));

export interface DonateProps {
  prefill?: DonatePrefill;
}

const Main: React.FC<DonateProps> = ({ prefill }) => {
  const classes = useStyles();
  return (
    <main id="main">
      <Landing />
      <Box className={classes.root}>
        <SupportOurWork className={classes.supportOurWork} />
        <MakeAnOnlineGift
          className={classes.makeAnOnlineGift}
          prefill={prefill}
        />
        <FlourishSeparator className={classes.flourishMiddle} />
        <LearnMore className={classes.learnMore} />
        <OtherWaysToGive className={classes.otherWaysToGive} />
        <FlourishSeparator className={classes.flourishBottom} />
        <PhotoFooter className={classes.photoFooter} />
      </Box>
    </main>
  );
};

export default Main;
