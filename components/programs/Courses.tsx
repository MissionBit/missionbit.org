import * as React from "react";
import Typography from "@material-ui/core/Typography";
import ClassInstances, { ClassInstance } from "./ClassInstanceData";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const CourseDescription: React.FC<ClassInstance> = ({
  course,
  campus,
  meets,
  startDate,
  endDate,
  signupUrl
}) => (
  <div>
    <Typography variant="h5">{course.title}</Typography>
    <Link href={campus.mapUrl} color="secondary" target="_blank" rel="noopener">
      {campus.name}
    </Link>
    <Typography>Meets: {meets}</Typography>
    <Typography>
      Dates: {startDate} - {endDate}
    </Typography>
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
  </div>
);

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
