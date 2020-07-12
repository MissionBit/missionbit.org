import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TeamData from "./TeamData";
import VioletButton from "components/VioletButton";
import Person from "./Person";
import Sponsors from "./SponsorData";
import Intro from "./Intro";

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
      <Intro />
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
