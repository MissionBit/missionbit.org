import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import { Sponsors, SponsorData } from "./SponsorData";
import { makeStyles } from "@material-ui/core/styles";
import AdobePdfLogo from "./brands/AdobePdfLogo";
import { galaStartEnd } from "./GalaDates";

const useStyles = makeStyles((theme) => ({
  sponsors: {
    display: "grid",
    gridGap: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, minmax(60px, 120px))",
    marginBottom: theme.spacing(2),
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
  copySection: {
    "& > p": {
      margin: theme.spacing(2, 0),
    },
    "& ul": theme.typography.body1,
    [theme.breakpoints.down("sm")]: {
      "& > $saveTheDate": {
        fontSize: "1.25rem",
      },
      "& > h3": {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
      },
      "& > h4": {
        fontSize: "1.25rem",
        fontWeight: theme.typography.h6.fontWeight,
      },
      "& ul": {
        paddingLeft: "1.25rem",
      },
    },
  },
  sponsorHeading: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
  saveTheDate: {},
  thankYouHeading: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
}));

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

const Sponsorship: React.FC<{}> = () => {
  const classes = useStyles();
  const { date, time } = galaStartEnd();
  return (
    <main id="main">
      <Container component="section" className={classes.copySection}>
        <Typography
          variant="h2"
          align="center"
          className={classes.sponsorHeading}
        >
          Sponsor the 2020 Mission Bit Gala
        </Typography>
        <Typography variant="h3" align="center" className={classes.saveTheDate}>
          {date}
          <br />
          {time}
          <br />
          San Francisco
        </Typography>
        <Typography>
          <a href="/gala">Mission Bit's Fourth Annual Gala</a> is a celebration
          of seven years of growth, impact, and learning. Join us for this
          inspiring event, meet our students, hear their stories, and help us
          reach our 2021 goals!
        </Typography>
        <Typography>
          Check out our{" "}
          <a href="/annual-reports/2018/mission-bit-annual-report-2018.pdf">
            <AdobePdfLogo fontSize="small" /> 2018 Annual Report
          </a>{" "}
          for more about our vision and current impact. If you have any
          questions, please contact us at{" "}
          <a
            href="mailto:development@missionbit.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            development@missionbit.org
          </a>
          .
        </Typography>
      </Container>
      <Container
        component="section"
        id="packages"
        className={classes.copySection}
      >
        <Typography variant="h3">Sponsorship Packages</Typography>
        <Typography>
          All sponsorship packages include a table for 10 attendees and logo
          presence on Mission Bit website for 2021
        </Typography>
        <Typography variant="h4">$50,000 Diamond Sponsor</Typography>
        <ul>
          <li>Exclusive to one sponsor</li>
          <li>Up to three minutes of speaking time on stage</li>
          <li>Front row seating at Gala with Keynote Speaker(s)</li>
          <li>Influencer status on rotating video for 15 seconds</li>
          <li>Public recognition in CEO Remarks</li>
          <li>Logo presence on event signage on all event materials</li>
        </ul>
        <Typography variant="h4">$25,000 Platinum Sponsor</Typography>
        <ul>
          <li>Exclusive to two sponsors</li>
          <li>Front row seating at Gala with Keynote Speaker(s)</li>
          <li>Influencer status on rotating video for 15 seconds</li>
          <li>Public recognition in CEO Remarks</li>
          <li>Logo presence on event signage on all event materials</li>
        </ul>
        <Typography variant="h4">$10,000 Gold Sponsor</Typography>
        <ul>
          <li>Exclusive to five sponsors</li>
          <li>Premiere seating at Gala with Mission Bit students</li>
          <li>Gold status on rotating video for 10 seconds</li>
          <li>Logo presence on event signage on all event materials</li>
        </ul>
        <Typography variant="h4">$5,000 Silver Sponsor</Typography>
        <ul>
          <li>Exclusive to ten sponsors</li>
          <li>Logo presence in event program material</li>
          <li>Listed as Silver Sponsor at 2020 Mission Bit student events</li>
        </ul>
      </Container>
      <Container component="section" className={classes.copySection}>
        <Typography>
          For any questions regarding Gala Sponsorship,
          {/*or to use a payment method other than credit card, */ " "}
          please contact us at{" "}
          <a
            href="mailto:development@missionbit.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            development@missionbit.org
          </a>
          . For more information about the Gala and individual tickets, visit{" "}
          <a href="/gala">Mission Bit's Fourth Annual Gala</a>.
        </Typography>
      </Container>
      <Container component="section">
        <GalaVideo />
      </Container>
      <Container component="section" className={classes.copySection}>
        <Typography>
          Mission Bit is a 501 (c)(3) public charity that strives to eliminate
          the tech divide for youth living in urban poverty and rural areas
          across the San Francisco Bay Area by building computer programming and
          professional opportunity pathways for public schools students. For
          more information, contact us at{" "}
          <a
            href="mailto:development@missionbit.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            development@missionbit.org
          </a>
          .
        </Typography>
      </Container>
      <Container component="section">
        <Typography
          variant="h3"
          align="center"
          className={classes.thankYouHeading}
        >
          Thank you to our 2019 Gala Sponsors
        </Typography>
        <div className={classes.sponsors}>
          {Sponsors.map((props) => (
            <Sponsor key={props.href} {...props} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Sponsorship;
