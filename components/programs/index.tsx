import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Workshops from "./Workshops";
import Courses from "./Courses";
import Faq from "./Faq";
import Showcase from "../Showcase";
import {
  SummerClassInstances,
  SpringClassInstances,
  SummerDates,
} from "./ClassInstanceData";
import { LongDateTimeFormat } from "../../src/dates";
import VioletButton from "../VioletButton";
import IndigoButton from "../IndigoButton";
import FlourishSeparator from "./FlourishSeparator";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > section": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  description: {
    "& > p": {
      marginBottom: theme.spacing(2),
    },
  },
  deadline: {
    marginTop: theme.spacing(2),
  },
  deadlineEmphasis: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  landingTitle: {
    padding: theme.spacing(0, 3),
  },
  landing: {
    padding: theme.spacing(3, 0),
    textAlign: "center",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
    },
  },
  landingPhoto: {
    maxWidth: "100%",
    margin: "0 auto",
    "& > img": {
      maxWidth: 1380,
      maxHeight: 300,
      width: "100%",
      objectFit: "cover",
      margin: "0 auto",
    },
  },
  courseNotes: {
    ...theme.typography.body1,
    paddingLeft: theme.spacing(2),
    "& > li": {
      margin: theme.spacing(1, 0),
    },
  },
}));

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Box id="landing" component="section" className={classes.landing}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          className={classes.landingTitle}
        >
          Become an Innovator
        </Typography>
        <Typography>
          Mission Bit provides free after-school coding courses,{" "}
          <Link href="#workshops">workshops</Link>, and{" "}
          <Link href="#courses">summer bootcamps</Link> to high school students
          from underserved and underrepresented communities.
        </Typography>
        <img src={require("../../public/images/program/programs-page.svg")} />
        <Box>
          <VioletButton variant="contained" href="#workshops" size="large">
            Workshops
          </VioletButton>
          <IndigoButton variant="contained" href="#courses" size="large">
            Classes
          </IndigoButton>
        </Box>
      </Box>
      <Container
        component="section"
        id="description"
        className={classes.description}
      >
        <picture className={classes.landingPhoto}>
          <source
            type="image/webp"
            srcSet={require("../../public/images/program/safia_jaleel.jpg?webp")}
          />
          <img
            alt="Photo of student"
            src={require("../../public/images/program/safia_jaleel.jpg")}
          />
        </picture>

        <Typography>
          We offer our students a field trip to a Bay Area tech company, career
          and college advising related to the technology field, and an
          opportunity to showcase their group projects to a large community of
          supporters during our Demo Day event at the end of the term.
        </Typography>
        <Typography>
          Our program’s inclusive community fosters positive relationships
          between students, their peers, and our experienced classroom leaders.
          Mission Bit brings like-minded individuals together to form
          long-lasting meaningful connections and gives students all the tools
          they need to succeed in the tech industry.
        </Typography>
      </Container>
      <Container component="section" id="enroll">
        <Courses instances={SpringClassInstances}>
          <Typography
            variant="h3"
            align="center"
            className={classes.alert}
            id="workshops"
          >
            Spring 2020 Workshops
          </Typography>
          <Typography align="center">
            A 90-minute window into the exciting world of tech.
          </Typography>
        </Courses>
        <Courses instances={SummerClassInstances}>
          <Typography
            variant="h3"
            align="center"
            className={classes.alert}
            id="courses"
          >
            Summer 2020 Bootcamps
          </Typography>
          <Typography align="center" className={classes.deadline}>
            Spend 6 weeks learning how to develop websites or games.
            <br />
            <span className={classes.deadlineEmphasis}>
              Registration deadline:
            </span>{" "}
            {LongDateTimeFormat.format(SummerDates.registrationDeadline)}
          </Typography>
        </Courses>
        <FlourishSeparator />
      </Container>
      <Faq />
      <Workshops />
      <Showcase />
      <Supporters />
    </main>
  );
};

export default Main;
