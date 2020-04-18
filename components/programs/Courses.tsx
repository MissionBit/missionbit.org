import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { City, ClassOrWorkshopInstance } from "./ClassInstanceData";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import PublicIcon from "@material-ui/icons/Public";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    "& > *": {
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
}));

const CourseDescription: React.FC<{ instance: ClassOrWorkshopInstance }> = ({
  instance,
}) => {
  const classes = useStyles();
  const { course, campus, meets, signupUrl } = instance;
  return (
    <Paper className={classes.root} variant="outlined" elevation={0}>
      <Typography variant="h5">{course.title}</Typography>
      <Typography>
        <strong>Meets:</strong> {meets}
      </Typography>
      {instance.type === "class" ? (
        <Typography>
          <strong>Dates:</strong> {instance.startDate} - {instance.endDate}
        </Typography>
      ) : null}
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
      <Button
        href={signupUrl}
        variant="contained"
        color="secondary"
        target="_blank"
        rel="noopener"
      >
        Student Signup
      </Button>
      <Typography variant="body1">{course.description}</Typography>
    </Paper>
  );
};

const Courses: React.FC<{ instances: ClassOrWorkshopInstance[] }> = ({
  instances,
}) => {
  return (
    <>
      {instances.map((props, i) => (
        <CourseDescription key={i} instance={props} />
      ))}
    </>
  );
};

export default Courses;
