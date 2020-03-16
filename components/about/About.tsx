import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0"
    }
  },
  team: {
    "& > img": {
      display: "block",
      width: "100%",
      height: "auto"
    }
  },
  dl: {
    ...theme.typography.body1,
    padding: theme.spacing(2),
    "& > dd:nth-child(n + 2)": {
      marginTop: "1em"
    }
  }
}));

const About: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="about">
      <Typography variant="h4" component="h1" align="center">
        About Us
      </Typography>
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} md={6} className={classes.team}>
          <img
            src="/images/about/full-team.jpg"
            width="2048"
            height="1073"
            alt="Mission Bit Team"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <dl className={classes.dl}>
            <Typography variant="h4" component="dd">
              Challenge
            </Typography>
            <Typography component="dt">
              Despite being the heart of the tech industry, the Bay Area is home
              to thousands of high school students who lack access to computer
              science courses. The majority of these students are from
              backgrounds that are underrepresented in tech (Black, Latinx,
              female).
            </Typography>
            <Typography variant="h4" component="dd">
              Mission
            </Typography>
            <Typography component="dt">
              Mission Bit is dedicated to inspiring and empowering students to
              unlock their full potential. We build professional pathways for
              under resourced high school youth across the SF Bay Area by making
              computer science more accessible through our free project-based
              courses.
            </Typography>
            <Typography variant="h4" component="dd">
              Belief
            </Typography>
            <Typography component="dt">
              Mission Bit empowers young innovators who reflect our diversity to
              become leaders of the global technology revolution, developing
              solutions that serve our whole community.
            </Typography>
          </dl>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
