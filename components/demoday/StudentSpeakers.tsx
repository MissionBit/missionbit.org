import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CourseShowcases, {
  CourseShowcaseProps,
  ProjectProps,
  StudentProps,
} from "./StudentSpeakerData";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {},
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(70),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  showcase: {},
  courseTitle: {
    color: brand.indigo,
  },
  project: {},
  projectTitle: {},
  students: {},
  student: {
    margin: theme.spacing(0, 2),
    "& > img": {
      width: "100%",
      height: "100%",
      maxWidth: 150,
      borderRadius: "50%",
    },
  },
}));

const Student: React.FC<StudentProps> = ({ name, image }) => {
  const classes = useStyles();
  return (
    <picture className={classes.student}>
      <source type="image/webp" srcSet={image.webp} />
      <source type="image/jpeg" srcSet={image.srcSet} />
      <img alt={name} src={image.jpg} />
    </picture>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  students,
  description,
  href,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.project}>
      <Typography variant="h4" className={classes.projectTitle}>
        {title}
      </Typography>
      <Typography>{students.map((p) => p.name).join(", ")}</Typography>
      <Typography>{description}</Typography>
      <Typography>
        <a href={href} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </Typography>
      <Box className={classes.students}>
        {students.map((props, i) => (
          <Student key={i} {...props} />
        ))}
      </Box>
    </Box>
  );
};

const CourseShowcase: React.FC<CourseShowcaseProps> = ({
  course,
  projects,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.showcase}>
      <Typography variant="h3" className={classes.courseTitle}>
        {course.title}
      </Typography>
      {projects.map((props, i) => (
        <Project {...props} key={i} />
      ))}
    </Box>
  );
};

const StudentSpeakers: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="speakers" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Student Speakers
        </Typography>
      </Container>
      {CourseShowcases.map((props, i) => (
        <CourseShowcase {...props} key={i} />
      ))}
    </Box>
  );
};

export default StudentSpeakers;
