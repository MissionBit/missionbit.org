import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  landing: {
    padding: theme.spacing(3),
    background:
      "transparent linear-gradient(180deg, #2881D0 0%, #1B98A2 39%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
      color: "#fff"
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
    <main id="main">
      <Box id="landing" component="section" className={classes.landing}>
        <Typography variant="h2" component="h1" align="center">
          Programs
        </Typography>
        <Grid container className={classes.grid} spacing={3}>
          <Grid item xs={4}>
            <img src="/images/program/miguel_yanez.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/nathan_powell.jpg" />
          </Grid>
          <Grid item xs={4}>
            <img src="/images/program/safia_jaleel.jpg" />
          </Grid>
        </Grid>
      </Box>
      <section id="description">
        <Typography>
          Mission Bit provides computer science courses that expose high school
          students from underserved and underrepresented communities to multiple
          coding languages. We design our classrooms with project based, small
          group learning in mind. We offer our students a field trip to a Bay
          Area tech company, career and college advising related to the
          technology field, and an opportunity to showcase their group projects
          to a large community of supporters during our Demo Day event at the
          end of the term.
        </Typography>
      </section>
      <section id="enroll">
        Sign up for Winter 2020 classes now! Registration deadline: 1/22/20
      </section>
      <section id="workshops">
        <Typography>
          We also teach 90-minute workshops across the Bay Area!
        </Typography>
        <Typography>
          Create your own portfolio and learning HTML, CSS, and Javascript!
        </Typography>
        <Typography>
          Learn about gameplay, the Unity platform, and how to create your own
          game!
        </Typography>
        <Typography>
          Do you work with 8th graders or high schoolers and want Misison Bit to
          come to your school site or community-based organization? Reach out to
          <a href="mailto:cora@missionbit.org">cora@missionbit.org</a>!
        </Typography>
      </section>
      <section id="faq">
        <Typography>FAQ</Typography>
      </section>
      <section id="showcase">
        <Typography>Games and websites created by Mission Bit students:</Typography>
      </section>
      <Supporters />
    </main>
  );
};

export default Main;
