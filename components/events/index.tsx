import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import YouTubePreview from "../YouTubePreview";
import { makeStyles } from "@material-ui/core/styles";
import YouTubePreviews from "../YouTubePreviews";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  section: {
    marginBottom: theme.spacing(4),
  },
}));

interface PastEvent {
  id: string;
  title: React.ReactNode;
}

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

const Upcoming: React.FC<{ date: string; href: string }> = ({
  date,
  href,
  children,
}) => {
  return (
    <Box>
      <Typography variant="h5" align="center">
        {date} - <a href={href}>{children}</a>
      </Typography>
    </Box>
  );
};

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="main" id="main">
      <section id="current" className={classes.section}>
        <Typography variant="h2" component="h1" className={classes.heading}>
          Upcoming Events
        </Typography>
        <Upcoming date="April 23, 2020" href="/programs#workshops">
          Beginner Unity Game Design Workshop
        </Upcoming>
        <Upcoming date="November 12, 2020" href="/gala">
          Fourth Annual Mission Bit Gala
        </Upcoming>
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
