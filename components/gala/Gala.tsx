import * as React from "react";
import AddToCalendar from "./AddToCalendar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import YouTubeVideo from "../YouTubeVideo";
import SPONSORS, { SponsorData } from "./SponsorData";

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

function titleCase(s: string): string {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
}

const Gala: React.FC<{}> = () => {
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
          <ul className="emoji-bullets">
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
          For any questions regarding
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
      <Container component="section" className="gala-sponsors-section">
        {["platinum", "gold", "silver", "bronze"].map((level) => (
          <React.Fragment key={level}>
            <h3>2019 {titleCase(level)} Sponsor</h3>
            <div className={`gala-sponsors ${level}-sponsors`}>
              {SPONSORS.map((props) =>
                props.level === level ? (
                  <Sponsor key={props.href} {...props} />
                ) : null
              )}
            </div>
          </React.Fragment>
        ))}
      </Container>
    </main>
  );
};

export default Gala;
