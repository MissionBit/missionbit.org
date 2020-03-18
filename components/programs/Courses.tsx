import * as React from "react";
import Typography from "@material-ui/core/Typography";
import ClassInstances, { ClassInstance } from "./ClassInstanceData";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1, 0)
    }
  },
  mapLink: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.subtitle1.fontSize
  }
}));

const CourseDescription: React.FC<ClassInstance> = ({
  course,
  campus,
  meets,
  startDate,
  endDate,
  signupUrl
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant="outlined" elevation={0}>
      <Typography variant="h5">{course.title}</Typography>
      <Typography>
        <strong>Meets:</strong> {meets}
      </Typography>
      <Typography>
        <strong>Dates:</strong> {startDate} - {endDate}
      </Typography>
      <Link
        href={campus.mapUrl}
        color="secondary"
        target="_blank"
        rel="noopener"
        className={classes.mapLink}
      >
        <RoomIcon /> {campus.name}
      </Link>
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

const Courses: React.FC<{}> = () => {
  return (
    <>
      {ClassInstances.map((props, i) => (
        <CourseDescription key={i} {...props} />
      ))}
    </>
  );
};

export default Courses;
