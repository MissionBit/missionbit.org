import * as React from "react";
import AddToCalendar from "./AddToCalendar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import { makeStyles } from "@material-ui/core/styles";
import { GalaCalendarEvent, galaStartEnd } from "./GalaDates";
import { DEVELOPMENT_EMAIL } from "src/emails";
import GalaLanding from "./GalaLanding";
import FlourishSeparator from "components/programs/FlourishSeparator";
import SponsorSection from "./SponsorSection";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";
import IndigoButton from "components/IndigoButton";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  emojiBullets: {
    listStyle: "none",
    paddingLeft: 0,
    textIndent: 0,
    fontSize: theme.typography.pxToRem(16),
    "& > li[data-bullet]": {
      display: "flex",
      minHeight: "2em",
      alignItems: "center",
      paddingBottom: 0,
      "&::before": {
        content: "attr(data-bullet)",
        fontSize: "200%",
        paddingRight: "0.5em",
      },
    },
  },
  copySection: {
    "& > p": {
      margin: theme.spacing(2, 0),
    },
  },
  saveTheDateHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
      "& > button": {
        display: "block",
        margin: `${theme.spacing(2)}px auto`,
      },
    },
  },
  saveTheDate: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
  videoSection: {
    marginBottom: theme.spacing(8),
  },
  link: {
    color: brand.violet,
  },
  button: {
    fontSize: theme.typography.pxToRem(35),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  sponsorshipTitle: {
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
      fontSize: theme.typography.h5.fontSize,
    },
  },
  sponsorshipCopy: {
    fontSize: theme.typography.pxToRem(24),
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
      padding: theme.spacing(2, 0),
    },
  },
  sponsorshipActions: {},
}));

const Gala: React.FC<{}> = () => {
  const classes = useStyles();
  const { date, time } = galaStartEnd();
  return (
    <main id="main" className={classes.root}>
      <GalaLanding />
      <FlourishSeparator />
      <Container component="section" className={classes.copySection}>
        <Typography
          variant="h2"
          align="center"
          className={classes.saveTheDateHeading}
        >
          Save the Date <AddToCalendar event={GalaCalendarEvent} />
        </Typography>
        <Typography variant="h3" align="center" className={classes.saveTheDate}>
          {date}
          <br />
          {time}
          <br />
          Online
        </Typography>
        <Typography>
          Mission Bit's Fourth Annual Gala is a celebration of seven years of
          growth, impact, and learning. Join us online for this inspiring event,
          meet our students, hear their stories, and help us reach our 2021
          goals!
        </Typography>
        <Typography>
          For more information on sponsorships, see our{" "}
          <a href="/gala/sponsorship">Gala Sponsorship Packages</a> or contact
          us at{" "}
          <a
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPMENT_EMAIL}
          </a>
          .
        </Typography>
        {/*
        <Typography component="div">
          <strong>What to Expect:</strong>
          <br />
          <ul className={classes.emojiBullets}>
            <li data-bullet="👩🏽‍💻">Booths featuring amazing student projects</li>
            <li data-bullet="🥃">Open bar with specialty cocktails</li>
            <li data-bullet="🥢">Delicious San Francisco-inspired food</li>
            <li data-bullet="🙋🏿‍♂">
              Great network of folks to connect with who care about our young
              people
            </li>
          </ul>
        </Typography>
        */}
        <Typography>
          We're excited to share this very special evening with you!
        </Typography>
        <Typography>
          For any questions regarding{" "}
          <a href="/gala/sponsorship">Gala Sponsorship Packages</a>,
          {/* or to use a payment method other than credit card, */ " "}
          please contact us at{" "}
          <a
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPMENT_EMAIL}
          </a>
          .
        </Typography>
      </Container>
      <FlourishSeparator />
      <Container component="section" id="sponsorship-info">
        <Typography
          variant="h2"
          className={classes.sponsorshipTitle}
          align="center"
        >
          Looking to sponsor Mission Bit's Fourth Annual Gala?
        </Typography>
        <Typography className={classes.sponsorshipCopy} align="center">
          Contact{" "}
          <Link
            className={classes.link}
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPMENT_EMAIL}
          </Link>{" "}
          with questions
        </Typography>
        <Box className={classes.sponsorshipActions} textAlign="center">
          <IndigoButton
            variant="outlined"
            size="large"
            href="/gala/sponsorship"
            className={classes.button}
          >
            Gala Sponsorship Packages
          </IndigoButton>
        </Box>
      </Container>
      <FlourishSeparator />
      <Container component="section">
        <GalaVideo />
      </Container>
      <FlourishSeparator />
      <SponsorSection />
    </main>
  );
};

export default Gala;
