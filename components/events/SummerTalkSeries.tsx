import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { CourseDateTimeFormat, hourStartEndParts } from "src/dates";
import Box from "@material-ui/core/Box";
import VioletButton from "components/VioletButton";

const useStyles = makeStyles((theme) => ({
  root: {},
  logo: {
    width: "100%",
    height: 80,
    objectFit: "contain",
  },
  events: {
    display: "grid",
    justifyContent: "center",
    margin: theme.spacing(6, 0, 4, 0),
    gridGap: theme.spacing(3),
    gridTemplate: "auto / repeat(auto-fill, minmax(380px, 1fr))",
    [theme.breakpoints.down("xs")]: {
      gridTemplate: "auto / auto",
    },
  },
  description: {
    margin: theme.spacing(2, 0),
    flexGrow: 1,
  },
  event: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    border: "1px solid #707070",
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  button: {
    display: "inline-flex",
    alignSelf: "center",
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  dates: {
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      "& > strong": {
        display: "block",
      },
    },
  },
}));

interface EventData {
  logo: string;
  alt: string;
  title: string;
  date: number;
  minutes: number;
  who: string;
  description: React.ReactNode;
  url: string;
}

function eventData({
  logo,
  alt,
  title,
  date,
  minutes = 90,
  who = "14-24 year olds",
  description,
  url,
}: {
  logo: string;
  alt: string;
  title: string;
  date: number;
  minutes?: number;
  who?: string;
  description: React.ReactNode;
  url: string;
}): EventData {
  return {
    logo,
    alt,
    title,
    date,
    minutes,
    who,
    description,
    url,
  };
}

// Cruise: https://www.tfaforms.com/4830394
// Willis: https://www.tfaforms.com/4830962
// Boundless Brilliance: https://www.tfaforms.com/4830965
// Twilio: https://www.tfaforms.com/4830966
// Redfin: https://www.tfaforms.com/4830967
// MB Alumni: https://www.tfaforms.com/4830968

const Events: EventData[] = [
  eventData({
    alt: "Cruise logo",
    logo: require("public/images/events/summer-talk-series/cruise.png"),
    title: "Cruise",
    date: Date.parse("2020-06-18T17:00:00-07:00"),
    description: (
      <>
        Join us to learn more about what innovative things Cruise, a
        self-driving car company, is doing in 2020.
      </>
    ),
    url: "https://www.tfaforms.com/4830394",
  }),
  eventData({
    alt: "Catchafire logo",
    logo: require("public/images/events/summer-talk-series/catchafire.png"),
    title: "Digital Marketing Strategist",
    date: Date.parse("2020-06-25T17:00:00-07:00"),
    description: (
      <>
        Willis is a Digital Marketing Strategist with over 5 years of agency
        experience in the automotive industry and over 10 years of social media
        marketing experience.
      </>
    ),
    url: "https://www.tfaforms.com/4830962",
  }),
  eventData({
    alt: "Boundless Brilliance logo",
    logo: require("public/images/events/summer-talk-series/boundless-brilliance.png"),
    title: "Boundless Brilliance",
    date: Date.parse("2020-07-02T17:00:00-07:00"),
    description: (
      <>
        Join us to learn about how these 3 brilliant women started their own
        non-profit organization in college.
      </>
    ),
    url: "https://www.tfaforms.com/4830965",
  }),
  eventData({
    alt: "Twilio logo",
    logo: require("public/images/events/summer-talk-series/twilio.png"),
    title: "Communications Manager",
    date: Date.parse("2020-07-09T17:00:00-07:00"),
    description: (
      <>
        Lupita Uribe is an Internal Communications Manager at Twilio, where she
        helps keep 3,000+ employees informed and aligned to the company.
      </>
    ),
    url: "https://www.tfaforms.com/4830966",
  }),
  eventData({
    alt: "Redfin logo",
    logo: require("public/images/events/summer-talk-series/redfin.svg"),
    title: "Software Engineer",
    date: Date.parse("2020-07-16T17:00:00-07:00"),
    description: (
      <>
        Eddie is a software engineer on the customer growth team, building data
        driven features to drive the company’s most important metrics.
      </>
    ),
    url: "https://www.tfaforms.com/4830967",
  }),
  eventData({
    alt: "Bridging the Gap (Mission Bit) logo",
    logo: require("public/images/events/summer-talk-series/bridging-the-gap.svg"),
    title: "Mission Bit Alumni",
    date: Date.parse("2020-07-23T17:00:00-07:00"),
    description: (
      <>
        Eddie is a software engineer on the customer growth team, building data
        driven features to drive the company’s most important metrics.
      </>
    ),
    url: "https://www.tfaforms.com/4830968",
  }),
];

const Event: React.FC<{ event: EventData }> = ({ event }) => {
  const classes = useStyles();
  const parts = hourStartEndParts(
    event.date,
    event.date + event.minutes * 60 * 1000,
    {
      format: CourseDateTimeFormat,
      ordinalDay: true,
    }
  );

  return (
    <Paper className={classes.event} square={true} elevation={1}>
      <img className={classes.logo} src={event.logo} alt={event.alt} />
      <Typography className={classes.title} variant="h5">
        {event.title}
      </Typography>
      <Typography className={classes.dates}>
        <strong>When:</strong> {parts.date}{" "}
        <Box component="span" display="inline-block">
          {parts.time}
        </Box>
      </Typography>
      <Typography className={classes.dates}>
        <strong>Who:</strong> {event.who}
      </Typography>
      <Typography className={classes.description}>
        {event.description}
      </Typography>
      <VioletButton
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        size="large"
        className={classes.button}
      >
        Sign Up
      </VioletButton>
    </Paper>
  );
};

const SummerTalkSeries: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="share-a-bit" className={classes.root}>
      <Typography variant="h3" align="center" className={classes.heading}>
        Share a Bit: Summer Career Talk Series
      </Typography>
      <Box className={classes.events}>
        {Events.map((event) => (
          <Event event={event} key={event.title} />
        ))}
      </Box>
    </Container>
  );
};

export default SummerTalkSeries;
