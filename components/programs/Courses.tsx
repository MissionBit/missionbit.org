import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { City, ClassOrWorkshopInstance } from "./ClassInstanceData";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import PublicIcon from "@material-ui/icons/Public";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionLink from "./ExpansionLink";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    "& > *:not(:last-child)": {
      margin: theme.spacing(1, 0),
    },
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  worldIcon: {
    marginRight: "0.2rem",
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
  image: string;
}> = ({ instance, now, image }) => {
  const classes = useStyles();
  const { extra, course, campus, meets, signupUrl } = instance;
  const disabled =
    now >=
    (instance.type === "workshop"
      ? instance.date
      : instance.classDates.registrationDeadline);
  return (
    <Paper className={classes.root} variant="outlined" elevation={0}>
      <img src={image} className={classes.image} />
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
    </Paper>
  );
};

const Courses: React.FC<{
  instances: ClassOrWorkshopInstance[];
  nextImage: () => string;
}> = ({ children, instances, nextImage }) => {
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
      <Grid container spacing={1}>
        {courses.map((props, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CourseDescription instance={props} now={now} image={nextImage()} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Courses;
