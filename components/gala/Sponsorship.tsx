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
    gridTemplateTows: "repeat(auto-fit, minmax(60px, 120px))",
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
  return (
    <main id="main">
      <Container component="section" className={classes.copySection}>
        <Typography variant="h2" align="center">
          Sponsor the 2020 Mission Bit Gala
        </Typography>
        <Typography variant="h3" align="center">
          {galaStartEnd()}, San Francisco
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
          <a href="mailto:development@missionbit.org">
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
          <a href="mailto:development@missionbit.org">
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
          <a href="mailto:development@missionbit.org">
            development@missionbit.org
          </a>
          .
        </Typography>
      </Container>
      <Container component="section">
        <Typography variant="h3" align="center">
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
