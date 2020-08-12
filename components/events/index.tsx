import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import YouTubePreview from "components/YouTubePreview";
import { makeStyles } from "@material-ui/core/styles";
import YouTubePreviews from "components/YouTubePreviews";
import GalaCalendarEvent from "components/gala/GalaDates";
import { useRenderTime } from "components/BuildTimeContext";
import Landing from "./Landing";
// import SummerTalkSeries from "./SummerTalkSeries";
import FlourishSeparator from "components/programs/FlourishSeparator";
import Featured, { FeaturedEvent } from "./Featured";
import { SummerDates } from "components/programs/ClassInstanceData";
import Box from "@material-ui/core/Box";
import VioletButton from "components/VioletButton";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  heading: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
    },
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  pastEvents: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  indigoHeading: {
    fontWeight: theme.typography.fontWeightBold,
    color: brand.indigo,
    textAlign: "center",
    fontSize: theme.typography.pxToRem(50),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(40),
    },
  },
  button: {
    fontSize: theme.typography.pxToRem(25),
    width: "12rem",
    [theme.breakpoints.down("sm")]: {
      width: "10rem",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginBottom: theme.spacing(6),
  },
  buttonContainer: {
    textAlign: "center",
  },
}));

const FeaturedEvents: FeaturedEvent[] = [
  {
    id: "mb-hackathon",
    date: Date.parse("2020-07-11T09:00:00-07:00"),
    href: "https://cloud.hackthefog.com/",
    linkTitle: "Register",
    title: "Hack the Cloud",
    description: (
      <>
        In March 2018, San Francisco’s first high school hackathon, Hack the Fog
        1.0, made history. It was a massive success. This year, Hack the Cloud
        is happening for 48 hours on July 11th - 12th, 2020. Join us for our
        online hackathon!
      </>
    ),
    topRightImage: {
      desc: "Hack the Cloud's website",
      width: 599,
      height: 400,
      webp: [
        {
          src: require("public/images/events/hackathon/hackathon-collage-1.jpg?webp"),
          width: 599,
        },
        {
          src: require("public/images/events/hackathon/hackathon-collage-0.5.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/hackathon/hackathon-collage-1.jpg"),
          width: 599,
        },
        {
          src: require("public/images/events/hackathon/hackathon-collage-0.5.jpg"),
          width: 299,
        },
      ],
    },
    bottomLeftImage: {
      desc: "Student holding laptop",
      width: 599,
      height: 400,
      webp: [
        {
          src: require("public/images/events/hackathon/jada-collage-1.jpg?webp"),
          width: 599,
        },
        {
          src: require("public/images/events/hackathon/jada-collage-0.5.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/hackathon/jada-collage-1.jpg"),
          width: 599,
        },
        {
          src: require("public/images/events/hackathon/jada-collage-0.5.jpg"),
          width: 299,
        },
      ],
    },
  },
  {
    id: "demo-day",
    date: SummerDates.demoDay,
    href:
      "https://www.eventbrite.com/e/mission-bit-presents-summer-2020-demo-day-tickets-108626591058?utm_source=mb&utm_medium=web&utm_campaign=events",
    linkTitle: "Register",
    title: "Summer Demo Day",
    description: (
      <>
        Join us in celebrating our incredibly talented students at our Summer
        2020 Demo Day, a culminating showcase where our students display their
        amazing projects to our community of supporters!
      </>
    ),
    topRightImage: {
      desc: "Family attending demo day",
      width: 599,
      height: 400,
      webp: [
        {
          src: require("public/images/events/demo-day/demo-day-collage-1.jpg?webp"),
          width: 599,
        },
        {
          src: require("public/images/events/demo-day/demo-day-collage-1@0.5x.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/demo-day/demo-day-collage-1.jpg"),
          width: 599,
        },
        {
          src: require("public/images/events/demo-day/demo-day-collage-1@0.5x.jpg"),
          width: 299,
        },
      ],
    },
    bottomLeftImage: {
      desc: "Attendee checking out student project at Demo Day",
      width: 599,
      height: 400,
      webp: [
        {
          src: require("public/images/events/demo-day/demo-day-collage-2.jpg?webp"),
          width: 599,
        },
        {
          src: require("public/images/events/demo-day/demo-day-collage-2@0.5x.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/demo-day/demo-day-collage-2.jpg"),
          width: 599,
        },
        {
          src: require("public/images/events/demo-day/demo-day-collage-2@0.5x.jpg"),
          width: 299,
        },
      ],
    },
  },
  {
    id: "youth-conference",
    date: Date.parse("2020-08-05T13:00:00-07:00"),
    href: "https://www.missionbit.org/bridge",
    linkTitle: "Learn More",
    title: "Bridging the Youth Tech Divide Conference 2020",
    description: (
      <>
        Gathering SF high school youth in unprecedented times to bridge the tech
        divide.
      </>
    ),
    topRightImage: {
      desc: "San Francisco City Skyline",
      width: 599,
      height: 400,
      webp: [
        {
          src: require("public/images/events/conference/conference-2.jpg?webp"),
          width: 599,
        },
        {
          src: require("public/images/events/conference/conference-2-small.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/conference/conference-2.jpg"),
          width: 599,
        },
        {
          src: require("public/images/events/conference/conference-2-small.jpg"),
          width: 299,
        },
      ],
    },
    bottomLeftImage: {
      desc: "Collage of the people speaking at the event",
      width: 599,
      height: 400,
      webp: [
        {
          src: require("public/images/events/conference/conference-1.jpg?webp"),
          width: 599,
        },
        {
          src: require("public/images/events/conference/conference-1-small.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/conference/conference-1.jpg"),
          width: 599,
        },
        {
          src: require("public/images/events/conference/conference-1-small.jpg"),
          width: 299,
        },
      ],
    },
  },
  {
    id: "gala",
    date: Date.parse(GalaCalendarEvent.start),
    href: "/gala",
    linkTitle: "Learn More",
    title: "Fourth Annual Gala",
    description: (
      <>
        Mission Bit’s Fourth Annual Gala is a celebration of seven years of
        growth, impact, and learning. Join us for this inspiring event, meet our
        students, hear their stories, and help us reach our 2021 goals!
      </>
    ),
    topRightImage: {
      desc:
        "Mayor London Breed at 2019 Gala watching students demonstrate their project",
      width: 600,
      height: 401,
      webp: [
        {
          src: require("public/images/events/gala/gala-collage-1.jpg?webp"),
          width: 600,
        },
        {
          src: require("public/images/events/gala/gala-collage-1@0.5x.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/gala/gala-collage-1.jpg"),
          width: 600,
        },
        {
          src: require("public/images/events/gala/gala-collage-1@0.5x.jpg"),
          width: 299,
        },
      ],
    },
    bottomLeftImage: {
      desc: "Student speaker at 2019 Gala",
      width: 600,
      height: 401,
      webp: [
        {
          src: require("public/images/events/gala/gala-collage-2.jpg?webp"),
          width: 600,
        },
        {
          src: require("public/images/events/gala/gala-collage-2@0.5x.jpg?webp"),
          width: 299,
        },
      ],
      jpg: [
        {
          src: require("public/images/events/gala/gala-collage-2.jpg"),
          width: 600,
        },
        {
          src: require("public/images/events/gala/gala-collage-2@0.5x.jpg"),
          width: 299,
        },
      ],
    },
  },
].sort((a, b) => a.date - b.date);

const PastEvents: React.ComponentProps<typeof YouTubePreview>[] = [
  { id: "f2NVEq00A38", title: "Game Design Workshop" },
  { id: "J4VEhVk0eME", title: "Code Meets Girl" },
  { id: "oTSNS227No4", title: "Third Annual Gala" },
  { id: "o_1sd_F54NQ", title: "Fall 2019 Demo Day" },
  { id: "9HqfU7-DCao", title: "Summer 2019 Demo Day" },
  { id: "rmNEBaDVMlI", title: "MLK Codes Day 2019" },
  { id: "ptGX9yNXnjE", title: "Spring 2019 Demo Day" },
  { id: "QG88ydg_5Rk", title: "Second Annual Gala" },
  { id: "PGih3MelgwQ", title: "Fall 2018 Demo Day" },
  { id: "PgRbloKGPNM", title: "Summer 2018 Demo Day" },
  { id: "AFS9kJrrPoY", title: "Fall 2017 Demo Day" },
];

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  const now = useRenderTime();
  return (
    <main id="main">
      <Landing />
      {/* <FlourishSeparator />
      <SummerTalkSeries /> */}
      <FlourishSeparator />
      <Container component="section" id="current" className={classes.section}>
        {FeaturedEvents.map((props) =>
          props.date < now ? null : (
            <React.Fragment key={props.id}>
              <Featured {...props} />
              <FlourishSeparator />
            </React.Fragment>
          )
        )}
      </Container>
      <Container
        component="section"
        id="past"
        className={`${classes.section} ${classes.pastEvents}`}
      >
        <Typography variant="h2" className={classes.heading}>
          Past Events
        </Typography>
        <YouTubePreviews values={PastEvents} />
      </Container>
      <FlourishSeparator />
      <Box component="section" id="programs" className={classes.root}>
        <Container className={classes.container}>
          <Typography className={classes.indigoHeading}>
            Are you a high school student in San Francisco who wants to learn
            more about computer science? Visit our programs page and check out
            our free programming classes and workshops.
            <br />
          </Typography>
          <Container className={classes.buttonContainer}>
            <VioletButton
              variant="contained"
              href="/programs"
              size="large"
              className={classes.button}
            >
              Programs
            </VioletButton>
          </Container>
        </Container>
      </Box>
    </main>
  );
};

export default Main;
