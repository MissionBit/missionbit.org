import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import OrangeButton from "components/OrangeButton";
import CourseShowcases, {
  CourseShowcaseProps,
  ProjectProps,
  TitleProps,
} from "./CodeAtHomeActivitiesData";
import FlourishSeparator from "./FlourishSeparator";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {},
  showcase: {},
  project: {
    display: "grid",
    margin: theme.spacing(4, 0),
    gridGap: theme.spacing(1, 2),
    gridTemplateColumns: "3fr 4fr",
    gridTemplateAreas: `
      "picture     title"
      "picture     description"
      "picture     button"
    `,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "picture"
        "title"
        "description"
        "button"
      `,
    },
  },
  activityTitle: {
    marginBottom: theme.spacing(3),
    fontSize: theme.typography.pxToRem(35),
    lineHeight: 1.5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h4.fontSize,
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h5.fontSize,
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
  },
  activityDescription: {
    fontSize: theme.typography.pxToRem(25),
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  button: {
    gridArea: "button",
    fontSize: theme.typography.pxToRem(22),
    width: "12.5rem",
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      "&:nth-child(n + 2)": {
        marginTop: theme.spacing(2),
      },
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "10rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      margin: "1rem auto",
      width: "10em",
      fontSize: "0.8rem",
    },
  },
  pictures: {
    gridArea: "picture",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(4),
  },
  picture: {
    margin: theme.spacing(0, 2),
    "& > img": {
      height: "auto",
      borderRadius: "50%",
      width: "33vw",
      maxWidth: "70%",
      objectFit: "contain",
    },
  },
}));

const ActivityImage: React.FC<TitleProps> = ({ title, image }) => {
  const classes = useStyles();
  return (
    <picture className={classes.picture}>
      <source type="image/webp" srcSet={image.webp} />
      <source type="image/jpeg" srcSet={image.srcSet} />
      <img alt={title} src={image.jpg} />
    </picture>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  pictures,
  description,
  href,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.project}>
      <Typography variant="h4" className={classes.activityTitle}>
        {title}
      </Typography>
      <Typography className={classes.activityDescription}>
        {description}
      </Typography>
      <OrangeButton
        variant="contained"
        href={href}
        size="large"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.button}
      >
        Download
      </OrangeButton>
      <Box className={classes.pictures}>
        {pictures.map((props, i) => (
          <ActivityImage key={i} {...props} />
        ))}
      </Box>
    </Box>
  );
};

const CourseShowcase: React.FC<CourseShowcaseProps> = ({ projects }) => {
  const classes = useStyles();
  return (
    <Container component="section" className={classes.showcase}>
      {projects.map((props, i) => (
        <Project {...props} key={i} />
      ))}
      <FlourishSeparator></FlourishSeparator>
    </Container>
  );
};

const Activities: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="activities" className={classes.root}>
      {CourseShowcases.map((props, i) => (
        <CourseShowcase {...props} key={i} />
      ))}
    </Box>
  );
};

export default Activities;
