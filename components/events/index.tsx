import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import YouTubePreview from "components/YouTubePreview";
import { makeStyles } from "@material-ui/core/styles";
import YouTubePreviews from "components/YouTubePreviews";
import GalaCalendarEvent from "components/gala/GalaDates";
import { useRenderTime } from "components/BuildTimeContext";
import Landing from "./Landing";
import SummerTalkSeries from "./SummerTalkSeries";
import FlourishSeparator from "components/programs/FlourishSeparator";
import Featured, { FeaturedEvent } from "./Featured";
import { SummerDates } from "components/programs/ClassInstanceData";

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
}));

interface PastEvent {
  id: string;
  title: string;
}

const FeaturedEvents: FeaturedEvent[] = [
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
      <FlourishSeparator />
      <SummerTalkSeries />
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
    </main>
  );
};

export default Main;
