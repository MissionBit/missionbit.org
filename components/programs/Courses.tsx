import * as React from "react";
import { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import {
  City,
  ClassOrWorkshopInstance,
  WorkshopInstance,
  Course,
} from "./ClassInstanceData";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionLink from "./ExpansionLink";
import Grid from "@material-ui/core/Grid";
import FlourishSeparator from "./FlourishSeparator";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    textAlign: "center",
  },
  gridContainer: {
    padding: theme.spacing(1, 0),
  },
  content: {
    padding: theme.spacing(1),
    "& > *:not(:first-child)": {
      margin: theme.spacing(1, 0, 0, 0),
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
  mapLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.typography.subtitle1.fontSize,
  },
  learnMoreHeading: {
    color: theme.palette.secondary.main,
    textAlign: "center",
  },
}));

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
      <img {...course.image} className={classes.image} />
      <Box padding={1} className={classes.content}>
        <Typography variant="h5">{course.title}</Typography>
        {campus.city === City.Online ? (
          <Link
            href={signupUrl}
            color="secondary"
            target="_blank"
            rel="noopener"
            className={classes.mapLink}
          >
            <RoomIcon /> {campus.name}
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
              <strong>Meets:</strong>
              <br />
              {meets}
            </Typography>
            <Typography>
              <strong>Dates:</strong>
              <br />
              {instance.startDate} - {instance.endDate}
            </Typography>
          </>
        ) : (
          <>
            <Typography>
              <strong>When:</strong>
              <br />
              {meets}
            </Typography>
            <Typography>
              <strong>Who:</strong>
              <br />
              {instance.who}
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
        <ExpansionLink
          summary={
            <Typography className={classes.learnMoreHeading}>
              Learn More
            </Typography>
          }
        >
          <Typography>{course.description}</Typography>
        </ExpansionLink>
      </Box>
    </Paper>
  );
};

function filterCourses(
  now: number,
  instances: ClassOrWorkshopInstance[]
): ClassOrWorkshopInstance[] {
  // Return a new course list that removes any workshops that have already
  // occurred if there is a later instance of that workshop available
  const latestWorkshops: Map<Course, WorkshopInstance> = new Map();
  // Find the latest of each workshop course
  for (const instance of instances) {
    if (instance.type === "workshop") {
      const seen = latestWorkshops.get(instance.course);
      if (seen === undefined || seen.date < instance.date) {
        latestWorkshops.set(instance.course, instance);
      }
    }
  }
  return instances.filter(
    (instance) =>
      !(
        instance.type === "workshop" &&
        now >= instance.date &&
        latestWorkshops.get(instance.course) !== instance
      )
  );
}

const Courses: React.FC<{
  instances: ClassOrWorkshopInstance[];
}> = ({ children, instances }) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => setNow(Date.now()), []);
  const courses = filterCourses(now, instances);
  const classes = useStyles();
  return courses.length === 0 ? null : (
    <>
      <FlourishSeparator />
      {children}
      <Grid container spacing={1} className={classes.gridContainer}>
        {courses.map((props, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CourseDescription instance={props} now={now} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Courses;
