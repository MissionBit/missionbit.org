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
import { Link } from "@material-ui/core";
import Image from "next/image";

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
    fontSize: theme.typography.pxToRem(40),
    color: brand.indigo,
    margin: theme.spacing(6, 0),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: theme.spacing(4, 0),
    },
  },
  project: {
    display: "grid",
    margin: theme.spacing(4, 0),
    gridGap: theme.spacing(1, 2),
    gridTemplateColumns: "3fr 5fr",
    gridTemplateAreas: `
      "title        students"
      "names        students"
      "description  students"
      "link         students"
    `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "title"
        "names"
        "description"
        "link"
        "students"
      `,
    },
  },
  projectTitle: {
    gridArea: "title",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  projectStudentNames: {
    gridArea: "names",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  projectDescription: {
    gridArea: "description",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  projectLink: {
    gridArea: "link",
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  students: {
    gridArea: "students",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  student: {
    margin: theme.spacing(0, 2),
    "& > img": {
      width: "100%",
      height: "auto",
      maxWidth: 150,
      borderRadius: "50%",
    },
  },
}));

const Student: React.FC<StudentProps> = ({ name, image }) => {
  const classes = useStyles();
  return <Image alt={name} src={image} className={classes.student} />;
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
      <Typography className={classes.projectStudentNames}>
        {students.map((p) => p.name).join(", ")}
      </Typography>
      <Typography className={classes.projectDescription}>
        {description}
      </Typography>
      <Link
        className={classes.projectLink}
        href={href}
        color="secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </Link>
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
    <Container component="section" className={classes.showcase}>
      <Typography variant="h3" className={classes.courseTitle}>
        {course.title}
      </Typography>
      {projects.map((props, i) => (
        <Project {...props} key={i} />
      ))}
    </Container>
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
