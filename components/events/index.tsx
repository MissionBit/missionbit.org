import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import YouTubePreview from "components/YouTubePreview";
import { makeStyles } from "@material-ui/core/styles";
import YouTubePreviews from "components/YouTubePreviews";
import Box from "@material-ui/core/Box";
import GalaCalendarEvent from "components/gala/GalaDates";
import { SpringClassInstances } from "components/programs/ClassInstanceData";
import { MediumDateFormat } from "src/dates";
import { useEffect, useState } from "react";

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
  events: {
    marginTop: theme.spacing(4),
  },
  upcoming: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.h5.fontSize,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      "& > span": {
        display: "none",
      },
      "& > a": {
        display: "block",
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
      ? {
          date: props.date,
          title: props.course.title,
          href: "/programs#workshops",
        }
      : null
  ).filter((props): props is UpcomingEvent => props !== null),
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
      {date}
      <span> - </span>
      <a href={href}>{children}</a>
    </Box>
  );
};

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => setNow(Date.now()), []);
  return (
    <Container component="main" id="main" className={classes.root}>
      <section id="current" className={classes.section}>
        <Typography variant="h2" component="h1" className={classes.heading}>
          Upcoming Events
        </Typography>
        <Box className={classes.events}>
          {UpcomingEvents.map(({ date, href, title }, i) =>
            date < now ? null : (
              <Upcoming
                key={i}
                date={MediumDateFormat.format(date)}
                href={href}
                className={classes.upcoming}
              >
                {title}
              </Upcoming>
            )
          )}
        </Box>
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
