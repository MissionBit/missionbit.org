import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";
import { Link } from "@material-ui/core";
import StudentProjectRooms, {
  StudentProjectRoomProps,
  ProjectProps,
} from "./Fall21StudentProjectData";
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
  room: {
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
    gridTemplateColumns: "350px 1fr",
    gridTemplateAreas: `
      "image title"
      "image course"
      "image names"
      "image description"
      "image link"
    `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "image"
        "title"
        "course"
        "names"
        "description"
        "link"
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
  studentClassNames: {
    gridArea: "course",
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
  image: {
    gridArea: "image",
    padding: theme.spacing(0, 2),
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "40vh",
    },
  },
}));

const Project: React.FC<ProjectProps> = ({
  title,
  course,
  students,
  description,
  href,
  image,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.project}>
      <div className={classes.image}>
        <Image alt={title} src={image} objectFit="contain" />
      </div>
      <Typography variant="h4" className={classes.projectTitle}>
        {title}
      </Typography>
      <Typography className={classes.projectStudentNames}>
        {students.join(", ")}
      </Typography>
      <Typography className={classes.studentClassNames}>{course}</Typography>
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
    </Box>
  );
};

const StudentProjectRoom: React.FC<StudentProjectRoomProps> = ({
  room,
  projects,
}) => {
  const classes = useStyles();
  return (
    <Container component="section" className={classes.showcase}>
      <Typography variant="h3" className={classes.room}>
        {room}
      </Typography>
      {projects.map((props, i) => (
        <Project {...props} key={i} />
      ))}
    </Container>
  );
};

const StudentProjects: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="projects" className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h2" align="center">
          Student Projects
        </Typography>
      </Container>
      {StudentProjectRooms.map((props, i) => (
        <StudentProjectRoom {...props} key={i} />
      ))}
    </Box>
  );
};

export default StudentProjects;
