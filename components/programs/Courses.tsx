import * as React from "react";
import Typography from "@material-ui/core/Typography";
import {
  City,
  ClassOrWorkshopInstance,
  WorkshopInstance,
  Course,
} from "./ClassInstanceData";
import Box from "@material-ui/core/Box";
import PinIcon from "components/icons/Pin";
import CheckIcon from "components/icons/Check";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FlourishSeparator from "./FlourishSeparator";
import VioletButton from "components/VioletButton";
import IndigoButton from "components/IndigoButton";
import { brand } from "src/colors";
import Button from "@material-ui/core/Button";
import { useRenderTime } from "components/BuildTimeContext";

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
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(0, 4),
    backgroundColor: `var(--accent-color, ${theme.palette.common.white})`,
    [theme.breakpoints.down("sm")]: {
      flex: "1",
      maxHeight: "20vh",
      flexDirection: "row",
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
    flexWrap: "wrap",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-0.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  infoText: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  action: {
    textAlign: "center",
    alignSelf: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2),
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  sectionTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
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
    },
    [theme.breakpoints.down("xs")]: {
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
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  skill: {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(2),
    padding: 0,
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
    color: brand.violet,
    minWidth: "inherit",
    padding: 0,
    margin: "0 0.4rem 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0.4rem",
    },
  },
  pin: {
    // These should add up to the same height as skillCheck for
    // vertical alignment with skills
    fontSize: "2rem",
    margin: "0.5rem 0",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  buttonExtra: {
    fontWeight: theme.typography.fontWeightBold,
    color: brand.violet,
    marginBottom: theme.spacing(2),
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
  const {
    extra,
    buttonExtra,
    course,
    campus,
    meets,
    signupUrl,
    buttonText,
  } = instance;
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
        <img {...course.image} alt="" className={classes.image} />
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
            {disabled ? null : (
              <Box className={classes.buttonExtra}>{buttonExtra}</Box>
            )}
            <RegButton
              href={signupUrl}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
              disabled={disabled}
            >
              {disabled ? "Registration closed" : buttonText}
            </RegButton>
          </Box>
        </Box>
        <Box className={classes.locationSkills}>
          <Box className={classes.location}>
            <Button
              href={campus.city === City.Online ? signupUrl : campus.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.mapLink}
              disabled={campus.city === City.Online && disabled}
            >
              <PinIcon className={classes.pin} />
            </Button>{" "}
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
  id: string;
  title: string;
  instances: ClassOrWorkshopInstance[];
}> = ({ id, title, children, instances }) => {
  const now = useRenderTime();
  const courses = filterCourses(now, instances);
  const classes = useStyles();
  return courses.length === 0 ? null : (
    <>
      <FlourishSeparator />
      <Typography
        variant="h3"
        align="center"
        className={classes.sectionTitle}
        id={id}
      >
        {title}
      </Typography>
      {children}
      {courses.map((props, i) => (
        <CourseDescription key={i} instance={props} now={now} />
      ))}
    </>
  );
};

export default Courses;
