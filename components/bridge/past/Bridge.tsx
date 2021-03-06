import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TeamData from "./TeamData";
import Person from "./Person";
import Sponsors, { Employers } from "./SponsorData";
import Intro from "./Intro";
import Metadata from "../Metadata";
import RegisterButton from "./RegisterButton";

const useStyles = makeStyles((theme) => ({
  root: {},
  section: {
    margin: theme.spacing(4, 0),
  },
  team: {},
  button: {
    fontSize: theme.typography.h4.fontSize,
  },
  register: {
    textAlign: "center",
    padding: theme.spacing(2, 0),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  sponsors: {
    display: "grid",
    gridGap: theme.spacing(4),
    padding: theme.spacing(4, 0),
    gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, 200px)",
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
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridGap: theme.spacing(4, 0),
      gridTemplateRows: "auto",
    },
  },
  employers: {
    display: "grid",
    gridGap: theme.spacing(4),
    padding: theme.spacing(4, 0),
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, 200px)",
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
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr 1fr",
      gridGap: theme.spacing(2, 0),
      gridTemplateRows: "auto",
    },
  },
}));

const Bridge: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Metadata />
      <Intro />
      <Container component="section" id="register" className={classes.register}>
        <RegisterButton className={classes.button}>Register</RegisterButton>
      </Container>
      {TeamData.map(({ section, members }) => (
        <Container
          component="section"
          id={section.toLowerCase().replace(" ", "-")}
          key={section}
        >
          <Typography variant="h2" align="center">
            {section}
          </Typography>
          <Box className={classes.team}>
            {members.map((props, i) => (
              <Person key={i} {...props} />
            ))}
          </Box>
        </Container>
      ))}
      <Container component="section" id="sponsors">
        <Typography variant="h2" align="center">
          Sponsors
        </Typography>
        <Box className={classes.sponsors}>
          {Sponsors.map(({ href, title, logoUrl }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <img src={logoUrl} alt={title} />
            </a>
          ))}
        </Box>
      </Container>
      <Container component="section" id="employers">
        <Typography variant="h2" align="center">
          Our Speakers Work At
        </Typography>
        <Box className={classes.employers}>
          {Employers.map(({ href, title, logoUrl }) => (
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
