import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Workshops from "./Workshops";
import Faq from "./Faq";

const useStyles = makeStyles(theme => ({
  root: {
    "& > section": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "&:first-child": {
        marginTop: 0
      }
    }
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize
    }
  },
  landing: {
    padding: theme.spacing(3),
    background:
      "transparent linear-gradient(180deg, #2881D0 0%, #1B98A2 39%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
      color: theme.palette.common.white
    }
  },
  grid: {
    "& > div > img": {
      maxWidth: "100%"
    }
  }
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
      </Container>
      <Container component="section" id="enroll">
        <Typography variant="h3" align="center" className={classes.alert}>
          Sign up for Summer 2020 classes now! Registration deadline: 5/20/20
        </Typography>
        <div>
          <Typography variant="h5">Web Design 101</Typography>
          <Typography variant="body1">
            This course is specifically designed for students with little to no
            coding experience. Students will learn HTML, CSS, and JavaScript, as
            well as some core programming concepts through project based
            instruction. Throughout the semester, students will build 3
            websites: an adventure game, a portfolio, and a final project of
            their choice.
          </Typography>
        </div>
        <div>
          <Typography variant="h5">Android Game Design</Typography>
          <Typography variant="body1">
            Students will learn to design and build a Java game application for
            Android devices using libGDX, a popular game framework. Topics will
            include Java programming techniques, the Java Android software
            development kit (SDK), LibGDX, principles of game design, and
            version control using git and Github. To be eligible, students must
            be in high school and have taken our intro courses (Unity or Web) or
            have equivalent coding experience.
          </Typography>
        </div>
        <div>
          <Typography variant="h5">Unity Game Design</Typography>
          <Typography variant="body1">
            Students will learn to create with code as they program their own
            exciting gaming projects from scratch while learning C#. As students
            iterate with prototypes, tackle programming challenges, complete
            quizzes, and develop their own personal project, they will transform
            from an absolute beginner to a capable Unity developer. Our
            project-based courses provide students with the ability to begin a
            portfolio or add to their existing portfolio of projects that they
            have created.
          </Typography>
        </div>
      </Container>
      <Workshops />
      <Container component="section" id="faq">
        <Faq />
      </Container>
      <Container component="section" id="showcase">
        <Typography>
          Games and websites created by Mission Bit students:
        </Typography>
      </Container>
      <Supporters />
    </main>
  );
};

export default Main;
