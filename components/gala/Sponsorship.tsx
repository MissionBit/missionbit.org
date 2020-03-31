import * as React from "react";
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

const Sponsorship: React.FC<{}> = () => {
  return (
    <main id="main">
      <Container component="section">
        <h2 className="gala-save-the-date-heading">
          Sponsor the 2020 Mission Bit Gala
        </h2>
        <h2 className="gala-save-the-date">
          November 12, 2019, 6pm-10pm, San Francisco
        </h2>
        <p>
          <a href="/gala/">Mission Bit's Fourth Annual Gala</a>
          is a celebration of seven years of growth, impact, and learning. Join
          us for this inspiring event, meet our students, hear their stories,
          and help us reach our 2021 goals!
        </p>
        <p>
          Check out our
          <a href="/annual-reports/2018/mission-bit-annual-report-2018.pdf">
            <i className="fa fa-file-pdf-o"></i> 2018 Annual Report
          </a>
          for more about our vision and current impact. If you have any
          questions, please contact us at{" "}
          <a href="mailto:development@missionbit.org">
            development@missionbit.org
          </a>
          .
        </p>
      </Container>
      <Container component="section" id="packages">
        <h2>Sponsorship Packages</h2>
        <p>
          All sponsorship packages include a table for 10 attendees and logo
          presence on Mission Bit website for 2021
        </p>
        <h3>$50,000 Diamond Sponsor</h3>
        <ul>
          <li>Exclusive to one sponsor</li>
          <li>Up to three minutes of speaking time on stage</li>
          <li>Front row seating at Gala with Keynote Speaker(s)</li>
          <li>Influencer status on rotating video for 15 seconds</li>
          <li>Public recognition in CEO Remarks</li>
          <li>Logo presence on event signage on all event materials</li>
        </ul>
        <h3>$25,000 Platinum Sponsor</h3>
        <ul>
          <li>Exclusive to two sponsors</li>
          <li>Front row seating at Gala with Keynote Speaker(s)</li>
          <li>Influencer status on rotating video for 15 seconds</li>
          <li>Public recognition in CEO Remarks</li>
          <li>Logo presence on event signage on all event materials</li>
        </ul>
        <h3>$10,000 Gold Sponsor</h3>
        <ul>
          <li>Exclusive to five sponsors</li>
          <li>Premiere seating at Gala with Mission Bit students</li>
          <li>Gold status on rotating video for 10 seconds</li>
          <li>Logo presence on event signage on all event materials</li>
        </ul>
        <h3>$5,000 Silver Sponsor</h3>
        <ul>
          <li>Exclusive to ten sponsors</li>
          <li>Logo presence in event program material</li>
          <li>Listed as Silver Sponsor at 2020 Mission Bit student events</li>
        </ul>
      </Container>
      <Container component="section">
        <p>
          For any questions regarding Gala Sponsorship,
          {/*or to use a payment method other than credit card, */ " "}
          please contact us at
          <a href="mailto:development@missionbit.org">
            development@missionbit.org
          </a>
          . For more information about the Gala and individual tickets, visit
          <a href="/gala/">Mission Bit's Fourth Annual Gala</a>.
        </p>
      </Container>
      <Container component="section">
        <YouTubeVideo id="oTSNS227No4" />
      </Container>
      <Container component="section">
        Mission Bit is a 501 (c)(3) public charity that strives to eliminate the
        tech divide for youth living in urban poverty and rural areas across the
        San Francisco Bay Area by building computer programming and professional
        opportunity pathways for public schools students. For more information,
        contact us at
        <a href="mailto:development@missionbit.org">
          development@missionbit.org
        </a>
        .
      </Container>
      <Container component="section" className="gala-sponsors-section">
        <h3>Thank you to our 2019 Gala Sponsors</h3>
        <div className="gala-sponsors">
          {Sponsors.map((props) => (
            <Sponsor key={props.href} {...props} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Sponsorship;
