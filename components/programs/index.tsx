import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CommunityWorkshops from "./CommunityWorkshops";
import Supporters from "components/Supporters";
import Enroll from "./Enroll";
import Faq from "./Faq";
import Showcase from "components/Showcase";
import Landing from "./Landing";
import Description from "./Description";
import { SectionId } from "./ClassInstanceData";

const useStyles = makeStyles((theme) => ({
  root: {},
  deadline: {
    marginTop: theme.spacing(2),
  },
  deadlineEmphasis: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  courseNotes: {
    ...theme.typography.body1,
    paddingLeft: theme.spacing(2),
    "& > li": {
      margin: theme.spacing(1, 0),
    },
  },
}));

const Main: React.FC<{ sections?: readonly SectionId[] }> = ({ sections }) => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Landing />
      <Description />
      <Enroll sections={sections} />
      <Faq />
      <CommunityWorkshops />
      <Showcase />
      <Supporters />
    </main>
  );
};

export default Main;
