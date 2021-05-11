import * as React from "react";
import Container from "@material-ui/core/Container";
import GalaVideo from "./GalaVideo";
import { makeStyles } from "@material-ui/core/styles";
import SponsorshipLanding from "./SponsorshipLanding";
import FlourishSeparator from "components/programs/FlourishSeparator";
import SponsorshipPackages from "./SponsorshipPackages";
import SponsorSection from "./SponsorSection";
import SponsorSectionNew from "./SponsorSectionNew";

const useStyles = makeStyles((theme) => ({
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
      <SponsorSectionNew />
      <FlourishSeparator />
      <SponsorSection />
      <FlourishSeparator />
      <Container component="section" className={classes.videoSection}>
        <GalaVideo />
      </Container>
    </main>
  );
};

export default Sponsorship;
