import * as React from "react";
import AddToCalendar from "./AddToCalendar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import YouTubeVideo from "../YouTubeVideo";
import {
  Sponsors,
  SponsorData,
  SponsorLevel,
  SponsorLevels,
} from "./SponsorData";
import { makeStyles } from "@material-ui/core/styles";

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
    fontSize: "16px",
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
    gridGap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, minmax(60px, 120px))",
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
  },
  sponsorSection: {
    paddingBottom: theme.spacing(4),
  },
}));

const Gala: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main">
      <Container component="section">
        <Typography variant="h2" className="gala-save-the-date-heading">
          Save the Date
          <AddToCalendar />
        </Typography>
        <Typography variant="h2" className="gala-save-the-date">
          November 12, 2020, 6pm-10pm, San Francisco
        </Typography>
        <Typography>
          Mission Bit's Fourth Annual Gala is a celebration of seven years of
          growth, impact, and learning. Join us for this inspiring event, meet
          our students, hear their stories, and help us reach our 2021 goals!
        </Typography>
        <Typography>
          For more information on sponsorships, see our{" "}
          <a href="/gala/sponsorship/">Gala Sponsorship Packages</a>
          or contact us at{" "}
          <a href="mailto:development@missionbit.org">
            development@missionbit.org
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
          <a href="/gala/sponsorship/">Gala Sponsorship Packages</a>,
          {/* or to use a payment method other than credit card, */ " "}
          please contact us at
          <a href="mailto:development@missionbit.org">
            development@missionbit.org
          </a>
          .
        </Typography>
        <YouTubeVideo id="oTSNS227No4" />
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
