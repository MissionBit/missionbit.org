import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { bridgeStartEnd } from "./BridgeDates";
import clsx from "clsx";
import Link from "@material-ui/core/Link";
import Image from "next/image";
import bytdLogo from "public/images/bridge/bytd-logo.svg";

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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    width: "100%",
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
    paddingTop: theme.spacing(4),
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  time: {
    gridArea: "time",
    paddingBottom: theme.spacing(4),
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
      <Image
        src={bytdLogo}
        alt="Bridging the Youth Tech Divide Logo"
        className={classes.logo}
      />
      <Typography variant="h2" component="h1" className={classes.title}>
        Bridging the Youth Tech Divide 2021
      </Typography>
      <Typography variant="h4" component="h2" className={classes.subtitle}>
        Gathering Bay Area high school youth in unprecedented times to bridge
        the tech divide.
      </Typography>
      <Typography variant="h3" className={classes.date} align="center">
        {date}
      </Typography>
      <Typography variant="h3" className={classes.time} align="center">
        {time}
      </Typography>
      <Typography className={classes.body}>
        Bridging the Youth Tech Divide 2021 is a free conference{" "}
        <Link href="#team" color="secondary">
          led by SF youth
        </Link>{" "}
        for Bay Area youth, seeking to inspire participants to explore the
        potential and possibility of a tech career. We also want to show our
        participants the different types of careers in tech that can impact the
        Mission Bit core values. We recognize the vast disparities that prevent
        many youth from seeking out a tech career; including, but not limited
        to, a lack of diversity, economic inequality, and systemic racism.
        <br />
        <br />
        Our conference will feature both{" "}
        <Link href="#keynote-speakers" color="secondary">
          keynote speakers
        </Link>{" "}
        and{" "}
        <Link href="#panelists" color="secondary">
          panelists
        </Link>{" "}
        with different departments of Verizon. These departments range from:
        Crisis Response Team, Game Design Team, 5G Team, Innovation
        Center/Developer Days, Business Development & Planning, Chief Corporate
        Social Responsibility, and many more.
      </Typography>
    </Container>
  );
};

export default Intro;
