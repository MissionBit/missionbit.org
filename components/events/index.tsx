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
      fontSize: theme.typography.pxToRem(30),
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
    id: "alumni",
    date: Date.parse("2021-10-15T17:00:00-07:00"),
    href: "https://www.tfaforms.com/4936223",
    linkTitle: "Register",
    title: "College Info Session",
    description: (
      <>
        Mission Bit students are invited to come speak to Mission Bit alumni
        about their college experiences! Hear about San Jose State, UC Santa
        Cruz, UC Irvine, UC Davis, UC San Diego, Texan Southern University and
        Harvard!
      </>
    ),
    topRightImage: {
      desc: "2 Black men talking and smiling",
      image: require("public/images/events/alum-event/alum-event1.jpg").default,
    },
    bottomLeftImage: {
      desc: "3 panelists sitting on high stools",
      image: require("public/images/events/alum-event/alum-event2.jpg").default,
    },
  },
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
      image: require("public/images/events/hackathon/hackathon-collage-1.jpg")
        .default,
    },
    bottomLeftImage: {
      desc: "Student holding laptop",
      image: require("public/images/events/hackathon/jada-collage-1.jpg")
        .default,
    },
  },
  {
    id: "demo-day",
    date: Date.parse("2021-07-24T11:00:00-07:00"),
    href: "https://www.eventbrite.com/e/161778875973",
    linkTitle: "Register",
    title: "Summer Demo Day",
    description: (
      <>
        Join us in celebrating our incredibly talented students at our Summer
        2021 Demo Day, a culminating showcase where our students display their
        amazing projects to our community of supporters!
      </>
    ),
    topRightImage: {
      desc: "Family attending demo day",
      image: require("public/images/events/demo-day/demo-day-collage-1.jpg")
        .default,
    },
    bottomLeftImage: {
      desc: "Attendee checking out student project at Demo Day",
      image: require("public/images/events/demo-day/demo-day-collage-2.jpg")
        .default,
    },
  },
  {
    id: "gala",
    date: Date.parse(GalaCalendarEvent.start),
    href: "/gala",
    linkTitle: "Learn More",
    title: "Fifth Annual Gala",
    description: (
      <>
        Mission Bit’s Fifth Annual Gala is a celebration of eight years of
        growth, impact, and learning. Join us for this inspiring event, meet our
        students, hear their stories, and help us reach our 2022 goals!
      </>
    ),
    topRightImage: {
      desc: "Mayor London Breed at 2019 Gala watching students demonstrate their project",
      image: require("public/images/events/gala/gala-collage-1.jpg").default,
    },
    bottomLeftImage: {
      desc: "Student speaker at 2019 Gala",
      image: require("public/images/events/gala/gala-collage-2.jpg").default,
    },
  },
  {
    id: "latinx",
    date: Date.parse("2020-10-13T18:30:00-07:00"),
    href: "https://www.tfaforms.com/4856906",
    linkTitle: "Register",
    title: "Latinx Heritage Month Career Panel",
    description: (
      <>
        Mission Bit’s celebrates Latinx Heritage month with our amazing panel of
        speakers. We welcome Eduardo Tapia from Redfin, Gloria Marissa Trevino
        from Dell, Natalie Isabel Contreras from Adobe Digital Academy, and
        Nicolas Magaña from Lyft. Come and learn about their journeys in tech!
      </>
    ),
    topRightImage: {
      desc: "Career panel with 3 people's face around it",
      image: require("public/images/events/latinx-panel/latinx-1.jpg").default,
    },
    bottomLeftImage: {
      desc: "Latinx Heritage Month",
      image: require("public/images/events/latinx-panel/career1.jpg").default,
    },
  },
  {
    id: "alum",
    date: Date.parse("2021-09-23T17:00:00-07:00"),
    href: "https://www.tfaforms.com/4930413",
    linkTitle: "Register",
    title:
      "Mission Bit Alumni Network Event: Meet and Greet with a Tech Recruiter",
    description: (
      <>
        Mission Bit's first alumni event features guest speaker Melanie Wardhana
        from Cruise who will share insights on how to enter the workforce and
        tech industry specifically. Alumni will have the opportunity to ask
        questions, meet each other and learn about the newly established Mission
        Bit Alumni Network!
      </>
    ),
    topRightImage: {
      desc: "2 Black men talking and smiling",
      image: require("public/images/events/alum-event/alum-event1.jpg").default,
    },
    bottomLeftImage: {
      desc: "3 panelists sitting on high stools",
      image: require("public/images/events/alum-event/alum-event2.jpg").default,
    },
  },
  {
    id: "women",
    date: Date.parse("2021-03-24T17:00:00-07:00"),
    href: "https://www.tfaforms.com/4888698",
    linkTitle: "Register",
    title: "Sisterhood of Code: Women in Tech Mentorship Event",
    description: (
      <>
        5-6:30pm
        <br></br>
        <br></br>
        Mission Bit is collaborating with Women Who Code to host an awesome
        mentoring event. Students will get the chance to talk to women in the
        industry, learn about their journeys in tech, and form professional
        connections! Open to non-binary and women-identifying youth.
      </>
    ),
    topRightImage: {
      desc: "Career panel with 3 people's face around it",
      image: require("public/images/events/womens-event/women2.jpg").default,
    },
    bottomLeftImage: {
      desc: "Latinx Heritage Month",
      image: require("public/images/events/womens-event/women1.jpg").default,
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
      image: require("public/images/events/conference/conference-2.jpg")
        .default,
    },
    bottomLeftImage: {
      desc: "Collage of the people speaking at the event",
      image: require("public/images/events/conference/conference-1.jpg")
        .default,
    },
  },
  {
    id: "youth-conference-2021",
    date: Date.parse("2021-08-11T13:00:00-07:00"),
    href: "/bridge",
    linkTitle: "Learn More",
    title: "Bridging the Youth Tech Divide Conference 2021",
    description: (
      <>
        Gathering Bay Area high school youth in unprecedented times to bridge
        the tech divide. Hosted by the Mission Bit Student Advisory Board.
      </>
    ),
    topRightImage: {
      desc: "An image of youth from the 2020 conference describing their experience in one word",
      image: require("public/images/events/conference/conference2021-1.jpg")
        .default,
    },
    bottomLeftImage: {
      desc: "An image of youth from the 2020 conference describing their experience in one word",
      image: require("public/images/events/conference/conference2021-2.jpg")
        .default,
    },
  },
].sort((a, b) => a.date - b.date);

const PastEvents: React.ComponentProps<typeof YouTubePreview>[] = [
  // {
  //   id: "2kYPCU5HnV0",
  //   title: "Bridging the Youth Tech Divide Conference 2020",
  // },
  { id: "f2NVEq00A38", title: "Game Design Workshop" },
  { id: "J4VEhVk0eME", title: "Code Meets Girl" },
  { id: "X--bjyFPeh8", title: "Fourth Annual Gala" },
  { id: "oTSNS227No4", title: "Third Annual Gala" },
  { id: "RNTbbFC8p-o", title: "Spring 2021 Demo Day" },
  { id: "BT0hFva0zxY", title: "Fall 2020 Demo Day" },
  // { id: "szThYH8p6IU", title: "Summer 2020 Demo Day" },
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
