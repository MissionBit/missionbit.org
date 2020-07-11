import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TeamData from "./TeamData";
import VioletButton from "components/VioletButton";
import Person from "./Person";
import Sponsors from "./SponsorData";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: theme.spacing(4, 0),
  },
  team: {},
  button: {},
}));

const Bridge: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Container component="section" id="intro">
        <img
          src={require("public/images/bridge/btytd-logo.svg")}
          alt="Bridging the Youth Tech Divide Logo"
        />
        <Typography variant="h1">
          Bridging the Youth Tech Divide 2020
        </Typography>
        <Typography variant="h2">
          Gathering SF high school youth in unprecedented times to bridge the
          tech divide.
        </Typography>
        <Typography variant="h2">
          August 5th, 2020
          <br />1 PM - 5 PM PDT
        </Typography>
        <Typography>
          Bridging the Youth Tech Divide 2020 is a free conference led by SF
          youth for SF youth, seeking to inspire attendees to explore the
          potential and possibility of a tech career. We recognize the vast
          disparities that prevent many youth from seeking out a tech career;
          including, but not limited to, a lack of diversity, economic
          inequality, and systemic racism. Attendees will be from
          under-resourced and diverse backgrounds who demonstrate a compelling
          interest in tech. The conference will feature speakers from Facebook
          and Slack, relating their own stories and insights to youth interested
          in breaking into tech. Bridging the Youth Tech Divide will also
          feature a panel consisting of an array of professionals from all
          corners of the tech industry, as well as a college student studying
          Computer Science. Our goal is not that all attendees immediately set
          out to pursue a tech career, but that they will leave inspired, having
          a greater sense of what a tech career could mean for them. We hope to
          learn from each other, support each other, and advocate for one
          another to ensure a more equitable future in tech.
        </Typography>
      </Container>
      <Container component="section" id="register">
        <VioletButton
          href="https://www.tfaforms.com/4835468"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          className={classes.button}
        >
          Register
        </VioletButton>
      </Container>
      {TeamData.map(({ section, members }) => (
        <Container
          component="section"
          id={section.toLowerCase().replace(" ", "-")}
          key={section}
        >
          <Typography variant="h2">{section}</Typography>
          <Box className={classes.team}>
            {members.map((props, i) => (
              <Person key={i} {...props} />
            ))}
          </Box>
        </Container>
      ))}
      <Container component="section" id="sponsors">
        <Typography variant="h2">Sponsors</Typography>
        <Box>
          {Sponsors.map(({ href, title, logoUrl }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <img src={logoUrl} alt={title} />
            </a>
          ))}
        </Box>
      </Container>
    </main>
  );
};

export default Bridge;
