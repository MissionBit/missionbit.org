import * as React from "react";
import AddToCalendar from "./AddToCalendar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import {
  Sponsors,
  SponsorData,
  SponsorLevel,
  SponsorLevels,
} from "./SponsorData";
import { makeStyles } from "@material-ui/core/styles";
import { GalaCalendarEvent, galaStartEnd } from "./GalaDates";
import { DEVELOPMENT_EMAIL } from "src/emails";

const Sponsor: React.FC<SponsorData> = (props) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    title={props.title}
  >
    <img
      src={props.logoUrl}
      width={props.width}
      height={props.height}
      alt={`${props.title} logo`}
    />
  </a>
);

function levelTitle(s: SponsorLevel): string {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
}

function pluralize<T>(n: number, singular: T, plural: T): T {
  return n === 1 ? singular : plural;
}

const useStyles = makeStyles((theme) => ({
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
  galaSponsors: {
    display: "grid",
    gridGap: theme.spacing(4),
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, 60px)",
    "& a": {
      margin: 0,
      alignSelf: "center",
      height: "100%",
    },
    "& img": {
      objectFit: "contain",
      height: "100%",
      width: "100%",
    },
  },
  sponsorHeading: {
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
  sponsorSection: {
    paddingBottom: theme.spacing(4),
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
}));

const Gala: React.FC<{}> = () => {
  const classes = useStyles();
  const { date, time } = galaStartEnd();
  return (
    <main id="main">
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
          San Francisco
        </Typography>
        <Typography>
          Mission Bit's Fourth Annual Gala is a celebration of seven years of
          growth, impact, and learning. Join us for this inspiring event, meet
          our students, hear their stories, and help us reach our 2021 goals!
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
        <GalaVideo />
      </Container>
      <Container component="section" className={classes.sponsorSection}>
        {SponsorLevels.map((level) => {
          const sponsors = Sponsors.filter((props) => props.level === level);
          return sponsors.length === 0 ? null : (
            <React.Fragment key={level}>
              <Typography
                variant="h3"
                align="center"
                className={classes.sponsorHeading}
              >
                2019 {levelTitle(level)}{" "}
                {pluralize(sponsors.length, "Sponsor", "Sponsors")}
              </Typography>
              <div className={classes.galaSponsors}>
                {sponsors.map((props) => (
                  <Sponsor key={props.href} {...props} />
                ))}
              </div>
            </React.Fragment>
          );
        })}
      </Container>
    </main>
  );
};

export default Gala;
