import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
import YouTubePreview from "../YouTubePreview";
import YouTubePreviews from "../YouTubePreviews";
import { LongDateFormat, LongDateTimeFormat } from "../../src/dates";

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
    [theme.breakpoints.down("sm")]: {
      "& > strong": {
        display: "block",
      },
    },
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  landing: {
    padding: theme.spacing(3),
    background:
      "transparent linear-gradient(180deg, #2881D0 0%, #1B98A2 39%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
      color: theme.palette.common.white,
    },
  },
  grid: {
    "& > div > img": {
      maxWidth: "100%",
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
        <Typography variant="h2" component="h1" align="center">
          Programs
        </Typography>
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={4}>
            <img src={require("../../public/images/program/girl-unity.jpg")} />
          </Grid>
          <Grid item xs={4}>
            <img src={require("../../public/images/program/jada.jpg")} />
          </Grid>
          <Grid item xs={4}>
            <img src={require("../../public/images/program/jesus.jpg")} />
          </Grid>
        </Grid>
      </Box>
      <Container
        component="section"
        id="description"
        className={classes.description}
      >
        <Typography>
          Mission Bit provides free after-school coding courses,{" "}
          <Link href="#workshops">workshops</Link>, and{" "}
          <Link href="#courses">summer programs</Link> to high school students
          from underserved and underrepresented communities.
        </Typography>
        <Typography>
          We offer our students career and college advising related to the
          technology field, a field trip to a Bay Area tech company, and an
          opportunity to showcase their group projects to a large community of
          supporters during our Demo Day event at the end of the term. Our
          program’s inclusive community fosters positive relationships between
          students, their peers, and our experienced classroom leaders. Mission
          Bit brings like-minded individuals together to form long-lasting
          meaningful connections and gives students all the tools they need to
          succeed in the tech industry.
        </Typography>
      </Container>
      <Container component="section" id="enroll">
        <Typography
          variant="h3"
          align="center"
          className={classes.alert}
          id="workshops"
        >
          Spring 2020 Workshops:
        </Typography>
        <Courses instances={SpringClassInstances} />
        <Typography
          variant="h3"
          align="center"
          className={classes.alert}
          id="courses"
        >
          Sign up for Summer 2020 classes now!
        </Typography>
        <Typography align="center" className={classes.deadline}>
          Registration deadline:{" "}
          <strong>
            {LongDateTimeFormat.format(SummerDates.registrationDeadline)}
          </strong>
        </Typography>
        <Courses instances={SummerClassInstances} />
      </Container>
      <Container component="section" id="enroll-notes">
        <Typography variant="h6">For Summer 2020 Courses:</Typography>
        <ul className={classes.courseNotes}>
          <li>
            Mission Bit has a selective admissions process. We seek to create a
            strong learning community with committed young people who bring a
            variety of perspectives to the classroom. We highly encourage all
            interested students to apply.
          </li>
          <li>
            To be considered for admissions, students are required to take part
            in a group interview. Applicants will receive an invitation to be
            interviewed after the registration deadline has passed.{" "}
            <strong>
              Interviews will take place on{" "}
              {LongDateFormat.format(SummerDates.interview)}.
            </strong>{" "}
            Please provide accurate email information to receive your
            invitation.
          </li>
          <li>
            Each term ends with Demo Day, which is a required event for
            students. Friends and family are strongly encouraged to attend;
            please mark your calendar for{" "}
            <strong>{LongDateFormat.format(SummerDates.demoDay)}.</strong>
          </li>
          <li>
            <strong>
              Registration Deadline is{" "}
              {LongDateTimeFormat.format(SummerDates.registrationDeadline)}.
            </strong>
          </li>
        </ul>
        <Typography>
          For additional questions about registration, please contact us at{" "}
          <a href="mailto:info@missionbit.org">info@missionbit.org.</a>
        </Typography>
        <br />
        <Typography variant="h6">Videos from Summer 2019:</Typography>
        <YouTubePreviews>
          <YouTubePreview id="RZgGXRmfdh0">Orientation</YouTubePreview>
          <YouTubePreview id="9HqfU7-DCao">Demo Day</YouTubePreview>
          <YouTubePreview id="-e0v7Zx-fy0">Mini-Doc Ep 1</YouTubePreview>
          <YouTubePreview id="z9Iz6Z-XH8o">Mini-Doc Ep 2</YouTubePreview>
          <YouTubePreview id="de8JieFe88Y">Mini-Doc Ep 3</YouTubePreview>
          <YouTubePreview id="1eJZBmQtJu0">Mini-Doc Ep 4</YouTubePreview>
        </YouTubePreviews>
      </Container>
      <Workshops />
      <Faq />
      <Showcase />
      <Supporters />
    </main>
  );
};

export default Main;
