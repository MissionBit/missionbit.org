import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Workshops from "./Workshops";
import Courses from "./Courses";
import Faq from "./Faq";
import Showcase from "../Showcase";
import SummerClassInstances, {
  SpringClassInstances,
} from "./ClassInstanceData";

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
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
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
            <img src="/images/program/girl-unity.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/jada.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/jesus.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/miguel_yanez.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/safia_jaleel.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/nathan_powell.jpg" />
          </Grid>
        </Grid>
      </Box>
      <Container component="section" id="description">
        <Typography>
          Mission Bit provides free semester-long project-based coding courses
          to high school students from underserved and underrepresented
          communities. We offer our students career and college advising related
          to the technology field, a field trip to a Bay Area tech company, and
          an opportunity to showcase their group projects to a large community
          of supporters during our Demo Day event at the end of the term. Our
          program’s inclusive community fosters positive relationships between
          students, their peers, and our experienced classroom leaders. Mission
          Bit brings like-minded individuals together to form long-lasting
          meaningful connections and gives students all the tools they need to
          succeed in the tech industry.
        </Typography>
        <Typography>
          There are no GPA requirements and any San Francisco public or charter
          school student is encouraged to apply. Given the lack of diversity in
          the tech industry and our focus on equity, we accept applications from
          students of color and girls who attend private schools in San
          Francisco, as well.
        </Typography>
      </Container>
      <Container component="section" id="enroll">
        <Typography variant="h3" align="center" className={classes.alert}>
          Spring 2020 Workshops:
        </Typography>
        <Courses instances={SpringClassInstances} />
        <Typography variant="h3" align="center" className={classes.alert}>
          Sign up for Summer 2020 classes now!
          <br />
          Registration deadline: Sunday, May 31, 2020 at 8pm
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
              Interviews will take place on Wednesday, June 3rd, 2020.
            </strong>{" "}
            Please provide accurate email information to receive your
            invitation.
          </li>
          <li>
            Each term ends with Demo Day, which is a required event for
            students. Friends and family are strongly encouraged to attend;
            please mark your calendar for{" "}
            <strong>Saturday, July 25th, 2020.</strong>
          </li>
          <li>
            <strong>
              Registration Deadline is Sunday, May 31, 2020 at 8pm.
            </strong>
          </li>
        </ul>
        <Typography>
          For additional questions about registration, please contact us at{" "}
          <a href="mailto:info@missionbit.org">info@missionbit.org.</a>
        </Typography>
      </Container>
      <Workshops />
      <Faq />
      <Showcase />
      <Supporters />
    </main>
  );
};

export default Main;
