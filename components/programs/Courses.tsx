import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { City, ClassOrWorkshopInstance } from "./ClassInstanceData";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import PublicIcon from "@material-ui/icons/Public";
import Paper from "@material-ui/core/Paper";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    "& > *:not(:last-child)": {
      margin: theme.spacing(1, 0),
    },
  },
  worldIcon: {
    marginRight: "0.2rem",
  },
  mapLink: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.subtitle1.fontSize,
  },
  learnMoreHeading: {
    color: theme.palette.secondary.main,
    textDecoration: "underline",
    textDecorationStyle: "dotted",
  },
}));

const ExpansionPanel = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: -1,
    minHeight: 56,
    justifyContent: "flex-start",
    "&$expanded": {
      minHeight: 56,
    },
  },
  expandIcon: {
    padding: 0,
    color: theme.palette.secondary.main,
  },
  content: {
    flexGrow: 0,
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
}))(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(() => ({
  root: {
    padding: 0,
  },
}))(MuiExpansionPanelDetails);

const CourseDescription: React.FC<{
  instance: ClassOrWorkshopInstance;
  now: number;
}> = ({ instance, now }) => {
  const classes = useStyles();
  const { extra, course, campus, meets, signupUrl } = instance;
  const disabled =
    now >=
    (instance.type === "workshop"
      ? instance.date
      : instance.classDates.registrationDeadline);
  return (
    <Paper className={classes.root} variant="outlined" elevation={0}>
      <Typography variant="h5">{course.title}</Typography>
      {campus.city === City.Online ? (
        <Link
          href={signupUrl}
          color="secondary"
          target="_blank"
          rel="noopener"
          className={classes.mapLink}
        >
          <PublicIcon className={classes.worldIcon} /> {campus.name}
        </Link>
      ) : (
        <Link
          href={campus.mapUrl}
          color="secondary"
          target="_blank"
          rel="noopener"
          className={classes.mapLink}
        >
          <RoomIcon /> {campus.name}
        </Link>
      )}
      {instance.type === "class" ? (
        <>
          <Typography>
            <strong>Meets:</strong> {meets}
          </Typography>
          <Typography>
            <strong>Dates:</strong> {instance.startDate} - {instance.endDate}
          </Typography>
        </>
      ) : (
        <>
          <Typography>
            <strong>When:</strong> {meets}
          </Typography>
          <Typography>
            <strong>Who:</strong> {instance.who}
          </Typography>
        </>
      )}
      {extra ? <Typography variant="body1">{extra}</Typography> : null}
      <Button
        href={signupUrl}
        variant="contained"
        color="secondary"
        target="_blank"
        rel="noopener"
        disabled={disabled}
      >
        {disabled ? "Registration closed" : "Student Signup"}
      </Button>
      <ExpansionPanel square>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.learnMoreHeading}>
            Learn More
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{course.description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
};

const Courses: React.FC<{ instances: ClassOrWorkshopInstance[] }> = ({
  children,
  instances,
}) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => setNow(Date.now()), []);
  // Skip workshops that have started already
  const courseFilter = useCallback(
    (instance: ClassOrWorkshopInstance): boolean =>
      !(instance.type === "workshop" && now >= instance.date),
    [now]
  );
  const courses = instances.filter(courseFilter);
  return courses.length === 0 ? null : (
    <>
      {children}
      {courses.map((props, i) => (
        <CourseDescription key={i} instance={props} now={now} />
      ))}
    </>
  );
};

export default Courses;
