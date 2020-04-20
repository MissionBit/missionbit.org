import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import YouTubePreview from "../YouTubePreview";
import { makeStyles } from "@material-ui/core/styles";
import YouTubePreviews from "../YouTubePreviews";
import Box from "@material-ui/core/Box";
import GalaCalendarEvent from "../gala/GalaDates";
import { SpringClassInstances } from "../programs/ClassInstanceData";
import { MediumDateFormat } from "../../src/dates";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  heading: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
    },
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  upcoming: {
    marginBottom: theme.spacing(2),
    "& > h5": {
      [theme.breakpoints.down("sm")]: {
        "& > span": {
          display: "none",
        },
        "& > a": {
          display: "block",
        },
      },
    },
  },
}));

interface PastEvent {
  id: string;
  title: React.ReactNode;
}

interface UpcomingEvent {
  date: number;
  href: string;
  title: React.ReactNode;
}

const UpcomingEvents: UpcomingEvent[] = [
  {
    date: Date.parse(GalaCalendarEvent.start),
    href: "/gala",
    title: "Fourth Annual Mission Bit Gala",
  },
  ...SpringClassInstances.map((props) =>
    props.type === "workshop"
      ? [
          {
            date: props.date,
            title: props.course.title,
            href: "/programs#workshops",
          },
        ]
      : []
  ).flat(1),
].sort((a, b) => a.date - b.date);

const PastEvents: PastEvent[] = [
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

const Upcoming: React.FC<{ date: string; href: string; className: string }> = ({
  date,
  href,
  children,
  className,
}) => {
  return (
    <Box className={className}>
      <Typography variant="h5" align="center">
        {date}
        <span> - </span>
        <a href={href}>{children}</a>
      </Typography>
    </Box>
  );
};

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="main" id="main" className={classes.root}>
      <section id="current" className={classes.section}>
        <Typography variant="h2" component="h1" className={classes.heading}>
          Upcoming Events
        </Typography>
        {UpcomingEvents.map(({ date, href, title }, i) => (
          <Upcoming
            key={i}
            date={MediumDateFormat.format(date)}
            href={href}
            className={classes.upcoming}
          >
            {title}
          </Upcoming>
        ))}
      </section>
      <section id="past" className={classes.section}>
        <Typography variant="h2" className={classes.heading}>
          Past Events
        </Typography>
        <YouTubePreviews>
          {PastEvents.map(({ id, title }) => (
            <YouTubePreview key={id} id={id}>
              {title}
            </YouTubePreview>
          ))}
        </YouTubePreviews>
      </section>
    </Container>
  );
};

export default Main;
