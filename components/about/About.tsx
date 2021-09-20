import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import teamImg from "public/images/about/full-team.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    gridGap: theme.spacing(3),
    gridAutoColumns: "1fr",
    gridTemplateAreas: `
      "team content"
    `,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0",
      gridTemplateAreas: `
        "team"
        "content"
      `,
    },
  },
  content: {
    gridArea: "content",
  },
  team: {
    gridArea: "team",
    position: "relative",
  },
  dl: {
    ...theme.typography.body1,
    padding: theme.spacing(2),
    "& > dd": {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.fontWeightBold,
    },
    "& > dd:nth-child(n + 2)": {
      marginTop: "1em",
    },
  },
}));

const About: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="about">
      <Typography variant="h2" component="h1" align="center">
        About Us
      </Typography>
      <Box className={classes.root}>
        <Box className={classes.team}>
          <Image src={teamImg} alt="Mission Bit Team" priority />
        </Box>
        <Box className={classes.content}>
          <dl className={classes.dl}>
            <Typography component="dd">Challenge</Typography>
            <Typography component="dt">
              Despite being the heart of the tech industry, the Bay Area is home
              to thousands of high school students who lack access to computer
              science courses. The majority of these students are from
              backgrounds that are underrepresented in tech (Black, Latinx,
              female).
            </Typography>
            <Typography component="dd">Mission</Typography>
            <Typography component="dt">
              Mission Bit is dedicated to inspiring and empowering students to
              unlock their full potential. We build professional pathways for
              under resourced high school youth across the SF Bay Area by making
              computer science more accessible through our free project-based
              courses.
            </Typography>
            <Typography component="dd">Belief</Typography>
            <Typography component="dt">
              Mission Bit empowers young innovators who reflect our diversity to
              become leaders of the global technology revolution, developing
              solutions that serve our whole community.
            </Typography>
          </dl>
        </Box>
      </Box>
    </section>
  );
};

export default About;
