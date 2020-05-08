import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CommunityWorkshops from "./CommunityWorkshops";
import Supporters from "../Supporters";
import Enroll from "./Enroll";
import Faq from "./Faq";
import Showcase from "../Showcase";
import Landing from "./Landing";
import Description from "./Description";

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

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Landing />
      <Description />
      <Enroll />
      <Faq />
      <CommunityWorkshops />
      <Showcase />
      <Supporters />
    </main>
  );
};

export default Main;
