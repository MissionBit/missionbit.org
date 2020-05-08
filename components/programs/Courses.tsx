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
import RoomIcon from "@material-ui/icons/Room";
import CheckIcon from "@material-ui/icons/Check";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FlourishSeparator from "./FlourishSeparator";
import VioletButton from "../VioletButton";
import IndigoButton from "../IndigoButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 0,
  },
  imageWrapper: {
    display: "flex",
    flex: "0 1 20%",
    padding: theme.spacing(0, 4),
    backgroundColor: `var(--accent-color, ${theme.palette.common.white})`,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    padding: theme.spacing(2),
  },
  mainInfo: {
    display: "flex",
  },
  locationSkills: {
    display: "flex",
  },
  infoText: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  action: {
    flexBasis: "20%",
    textAlign: "center",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  },
  skills: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  skill: {
    display: "flex",
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(2),
    padding: 0,
  },
  skillCheck: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(30),
    marginRight: "0.25rem",
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
  const RegButton = instance.type === "workshop" ? VioletButton : IndigoButton;
  // Use an article component to allow it to be distinguished from its
  // siblings for the background color effect in css
  return (
    <Paper
      component="article"
      className={classes.root}
      variant="outlined"
      elevation={0}
    >
      <Box className={classes.imageWrapper}>
        <img {...course.image} className={classes.image} />
      </Box>
      <Box padding={1} className={classes.content}>
        <Box className={classes.mainInfo}>
          <Box className={classes.infoText}>
            <Typography variant="h5">{course.title}</Typography>
            <Typography>{course.description}</Typography>
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
            {extra && !disabled ? (
              <Typography variant="body1">{extra}</Typography>
            ) : null}
          </Box>
          <Box className={classes.action}>
            <RegButton
              href={signupUrl}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener"
              disabled={disabled}
            >
              {disabled ? "Registration closed" : "Student Sign Up"}
            </RegButton>
          </Box>
        </Box>
        <Box className={classes.locationSkills}>
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
          <ul className={classes.skills}>
            {course.skills.map((skill, i) => (
              <li key={i} className={classes.skill}>
                <CheckIcon className={classes.skillCheck} /> {skill}
              </li>
            ))}
          </ul>
        </Box>
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
  return courses.length === 0 ? null : (
    <>
      <FlourishSeparator />
      {children}
      {courses.map((props, i) => (
        <CourseDescription key={i} instance={props} now={now} />
      ))}
    </>
  );
};

export default Courses;
