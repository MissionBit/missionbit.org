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
import PinIcon from "../icons/Pin";
import CheckIcon from "../icons/Check";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FlourishSeparator from "./FlourishSeparator";
import VioletButton from "../VioletButton";
import IndigoButton from "../IndigoButton";
import { brand } from "../../src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imageWrapper: {
    display: "flex",
    flex: "0 1 20%",
    padding: theme.spacing(0, 4),
    backgroundColor: `var(--accent-color, ${theme.palette.common.white})`,
    [theme.breakpoints.down("sm")]: {
      flex: "1",
      maxHeight: "20vh",
      padding: theme.spacing(2, 4),
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    padding: theme.spacing(2),
  },
  mainInfo: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  locationSkills: {
    display: "flex",
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
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
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  description: {
    margin: theme.spacing(2, 0),
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  dates: {
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
      "& > strong": {
        display: "block",
      },
    },
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
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      justifyContent: "flex-start",
    },
  },
  skill: {
    display: "flex",
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(2),
    padding: 0,
    lineHeight: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
      marginLeft: 0,
    },
  },
  skillCheck: {
    color: theme.palette.primary.main,
    fontSize: "3rem",
    marginRight: "0.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.75rem",
      marginRight: 0,
    },
  },
  mapLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: brand.violet,
  },
  pin: {
    fontSize: "2rem",
    margin: "0 0.4rem 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0.4rem",
    },
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  campusName: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(22),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  learnMoreHeading: {
    color: theme.palette.secondary.main,
    textAlign: "center",
  },

  datesExtra: {
    display: "flex",
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(2),
    },
  },
  datesWrapper: {
    flexGrow: 1,
    flexShrink: 0,
    marginRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      flexShrink: 1,
    },
  },
  extra: {
    flexGrow: 1,
    textAlign: "center",
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      textAlign: "left",
      fontSize: theme.typography.body2.fontSize,
    },
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
            <Typography variant="h5" className={classes.title}>
              {course.title}
            </Typography>
            <Typography className={classes.description}>
              {course.description}
            </Typography>
            <Box className={classes.datesExtra}>
              <Box className={classes.datesWrapper}>
                {instance.type === "class" ? (
                  <>
                    <Typography className={classes.dates}>
                      <strong>Meets:</strong> {meets}
                    </Typography>
                    <Typography className={classes.dates}>
                      <strong>Dates:</strong> {instance.startDate} -{" "}
                      {instance.endDate}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography className={classes.dates}>
                      <strong>When:</strong> {meets}
                    </Typography>
                    <Typography className={classes.dates}>
                      <strong>Who:</strong> {instance.who}
                    </Typography>
                  </>
                )}
              </Box>
              {extra && !disabled ? (
                <Typography variant="body1" className={classes.extra}>
                  {extra}
                </Typography>
              ) : null}
            </Box>
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
          <Box className={classes.location}>
            <Link
              href={campus.city === City.Online ? signupUrl : campus.mapUrl}
              target="_blank"
              rel="noopener"
              className={classes.mapLink}
            >
              <PinIcon className={classes.pin} />
            </Link>{" "}
            <Typography className={classes.campusName}>
              {campus.name}
            </Typography>
          </Box>
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
