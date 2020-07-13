import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { bridgeStartEnd } from "./BridgeDates";
import clsx from "clsx";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateAreas: `
      "logo title"
      "logo subtitle"
      "date date"
      "time time"
      "body body"
    `,
    gridGap: theme.spacing(2, 4),
    gridTemplateColumns: "1fr 2fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateAreas: `
        "logo title"
        "subtitle subtitle"
        "date date"
        "time time"
        "body body"
      `,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateAreas: `
      "logo"
      "title"
      "subtitle"
      "date"
      "time"
      "body"
    `,
      gridTemplateColumns: "1fr",
    },
  },
  logo: {
    gridArea: "logo",
    objectFit: "contain",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      maxHeight: 200,
    },
  },
  title: {
    gridArea: "title",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h3.fontSize,
      alignSelf: "center",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  subtitle: {
    gridArea: "subtitle",
    color: theme.typography.h3.color,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      textAlign: "center",
    },
  },
  date: {
    gridArea: "date",
    paddingTop: theme.spacing(2),
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  time: {
    gridArea: "time",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  body: {
    gridArea: "body",
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(24),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

export const Intro: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  const { date, time } = bridgeStartEnd();
  return (
    <Container
      component="section"
      id="intro"
      className={clsx(classes.root, className)}
    >
      <img
        src={require("public/images/bridge/btytd-logo.svg")}
        alt="Bridging the Youth Tech Divide Logo"
        className={classes.logo}
      />
      <Typography variant="h2" component="h1" className={classes.title}>
        Bridging the Youth Tech Divide 2020
      </Typography>
      <Typography variant="h4" component="h2" className={classes.subtitle}>
        Gathering SF high school youth in unprecedented times to bridge the tech
        divide.
      </Typography>
      <Typography variant="h3" className={classes.date} align="center">
        {date}
      </Typography>
      <Typography variant="h3" className={classes.time} align="center">
        {time}
      </Typography>
      <Typography className={classes.body}>
        Bridging the Youth Tech Divide 2020 is a free conference{" "}
        <Link href="#team" color="secondary">
          led by SF youth
        </Link>{" "}
        for SF youth, seeking to inspire attendees to explore the potential and
        possibility of a tech career. We recognize the vast disparities that
        prevent many youth from seeking out a tech career; including, but not
        limited to, a lack of diversity, economic inequality, and systemic
        racism. Attendees will be from under-resourced and diverse backgrounds
        who demonstrate a compelling interest in tech.
        <br />
        <br />
        The conference will feature{" "}
        <Link href="#keynote-speakers" color="secondary">
          speakers
        </Link>{" "}
        from Facebook and Slack, relating their own stories and insights to
        youth interested in breaking into tech. Bridging the Youth Tech Divide
        will also feature a{" "}
        <Link href="#panelists" color="secondary">
          panel
        </Link>{" "}
        consisting of an array of professionals from all corners of the tech
        industry, as well as a college student studying Computer Science. Our
        goal is not that all attendees immediately set out to pursue a tech
        career, but that they will leave inspired, having a greater sense of
        what a tech career could mean for them. We hope to learn from each
        other, support each other, and advocate for one another to ensure a more
        equitable future in tech.
      </Typography>
    </Container>
  );
};

export default Intro;
