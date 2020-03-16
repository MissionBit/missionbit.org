import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Workshops from "./Workshops";

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
          Mission Bit provides computer science courses that expose high school
          students from underserved and underrepresented communities to multiple
          coding languages. We design our classrooms with project based, small
          group learning in mind. We offer our students a field trip to a Bay
          Area tech company, career and college advising related to the
          technology field, and an opportunity to showcase their group projects
          to a large community of supporters during our Demo Day event at the
          end of the term.
        </Typography>
      </Container>
      <Container component="section" id="enroll">
        <Typography variant="h3" align="center" className={classes.alert}>
          Sign up for Summer 2020 classes now! Registration deadline: 5/20/20
        </Typography>
      </Container>
      <Workshops />
      <Container component="section" id="faq">
        <Typography>FAQ</Typography>
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
