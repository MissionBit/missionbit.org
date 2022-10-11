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
import {
  BalanceProps,
  useAnimatedGoal,
  useLiveDashboard,
} from "pages/donate/live";
import clsx from "clsx";
import { lighten, LinearProgress, Typography } from "@material-ui/core";
import { dollars } from "pages/donate/dashboard";
import SectionHeading from "./SectionHeading";

const VERTICAL_BREAK = "sm";
const BAR_COLOR = "#5A6AC9";

const useStyles = makeStyles((theme) => ({
  campaign: {
    gridTemplateAreas: `
      "campaignCard makeAnOnlineGift"
      "supportOurWork makeAnOnlineGift"
      "flourishMiddle flourishMiddle"
      "learnMore      otherWaysToGive"
      "flourishBottom flourishBottom"
      "photoFooter    photoFooter"
      `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateAreas: `
          "campaignCard"
          "makeAnOnlineGift"
          "learnMore"
          "supportOurWork"
          "otherWaysToGive"
          "flourishBottom"
          "photoFooter"
        `,
    },
  },
  noCampaign: {
    gridTemplateAreas: `
      "supportOurWork makeAnOnlineGift"
      "flourishMiddle flourishMiddle"
      "learnMore      otherWaysToGive"
      "flourishBottom flourishBottom"
      "photoFooter    photoFooter"
      `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateAreas: `
          "makeAnOnlineGift"
          "learnMore"
          "supportOurWork"
          "otherWaysToGive"
          "flourishBottom"
          "photoFooter"
        `,
    },
  },
  root: {
    display: "grid",
    padding: theme.spacing(0, 4),
    marginBottom: theme.spacing(2),
    gridGap: theme.spacing(1, 4),
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      gridTemplateColumns: "1fr",
      "& $flourishMiddle": { display: "none" },
    },
  },
  supportOurWork: {
    gridArea: "supportOurWork",
  },
  campaignCard: {
    gridArea: "campaignCard",
    paddingTop: theme.spacing(4),
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
  progressWrapper: {
    border: "1px solid #dedede",
    borderRadius: "0.5rem",
    maxWidth: `calc(100vw - ${theme.spacing(4)}px)`,
  },
  progressContainer: {
    [theme.breakpoints.down(VERTICAL_BREAK)]: {
      flexDirection: "column",
    },
  },
  progressText: {
    fontSize: theme.typography.h4.fontSize,
    flex: 1,
    [theme.breakpoints.down(VERTICAL_BREAK)]: {
      textAlign: "center",
    },
  },
  donorCount: {
    textAlign: "right",
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down(VERTICAL_BREAK)]: {
      textAlign: "center",
    },
  },
  progress: {
    width: "100%",
    borderRadius: "0.5rem",
    border: "2px solid #fff",
    height: theme.spacing(3),
  },
  barColorPrimary: {
    backgroundColor: BAR_COLOR,
  },
  colorPrimary: {
    backgroundColor: lighten(BAR_COLOR, 0.6),
  },
}));

export interface DonateProps {
  prefill?: DonatePrefill;
  campaign?: BalanceProps;
}

function CampaignCard(props: {
  className?: string;
  campaign: BalanceProps;
}): JSX.Element | null {
  const dashboard = useLiveDashboard(props.campaign);
  const classes = useStyles();
  const { donorCount, goalName } = dashboard;
  const { goalCents, totalCents } = useAnimatedGoal(dashboard);
  return (
    <Box
      className={props.className}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <SectionHeading>{goalName}</SectionHeading>
      <Typography className={classes.progressText}>
        <strong>{dollars(totalCents)}</strong> of {dollars(goalCents)} Goal
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        className={classes.progressWrapper}
      >
        <LinearProgress
          className={classes.progress}
          classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary,
          }}
          color="primary"
          variant="determinate"
          value={Math.min(100, 100 * (totalCents / goalCents))}
        />
      </Box>
      <Typography className={classes.donorCount}>
        {donorCount} {donorCount === 1 ? "Donor" : "Donors"}
      </Typography>
    </Box>
  );
}

const Main: React.FC<DonateProps> = ({ prefill, campaign }) => {
  const classes = useStyles();
  return (
    <main id="main">
      <Landing />
      <Box
        className={clsx(
          classes.root,
          campaign ? classes.campaign : classes.noCampaign
        )}
      >
        <SupportOurWork className={classes.supportOurWork} />
        {campaign ? (
          <CampaignCard className={classes.campaignCard} campaign={campaign} />
        ) : null}
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
