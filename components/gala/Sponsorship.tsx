import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import { Sponsors } from "./SponsorData";
import Sponsor from "./Sponsor";
import { makeStyles } from "@material-ui/core/styles";
import SponsorshipLanding from "./SponsorshipLanding";
import FlourishSeparator from "components/programs/FlourishSeparator";
import SponsorshipPackages from "./SponsorshipPackages";

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
  thankYouHeading: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
  videoSection: {
    marginBottom: theme.spacing(8),
  },
}));

const Sponsorship: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main">
      <SponsorshipLanding />
      <FlourishSeparator />
      <SponsorshipPackages />
      <FlourishSeparator />
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
      <FlourishSeparator />
      <Container component="section" className={classes.videoSection}>
        <GalaVideo />
      </Container>
    </main>
  );
};

export default Sponsorship;
