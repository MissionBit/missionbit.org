import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Sponsors, SponsorLevels } from "./SponsorData";
import Sponsor from "./Sponsor";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";
import { capitalizeFirst } from "src/stripeHelpers";

const useStyles = makeStyles((theme) => ({
  sponsors: {
    display: "grid",
    gridGap: theme.spacing(2, 8),
    maxWidth: "100%",
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
  levelContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: theme.spacing(4, 0),
  },
  level: {
    flexShrink: 0,
    textAlign: "center",
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      padding: theme.spacing(0, 0, 2, 0),
      borderBottom: `6px solid ${brand.indigo}`,
    },
  },
  divider: {
    flex: 1,
    alignSelf: "center",
    height: 4,
    backgroundColor: brand.indigo,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  thankYouHeading: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
}));

const SponsorSection: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section">
      <Typography
        variant="h3"
        align="center"
        className={classes.thankYouHeading}
      >
        Thank you to our 2019 Gala Sponsors
      </Typography>
      {SponsorLevels.map((level) => {
        const sponsors = Sponsors.filter((props) => props.level === level);
        if (sponsors.length === 0) {
          return null;
        }
        return (
          <Box key={level}>
            <Box className={classes.levelContainer}>
              <div className={classes.divider} />
              <Typography className={classes.level} variant="h4">
                {capitalizeFirst(level)}{" "}
                {sponsors.length === 1 ? "Sponsor" : "Sponsors"}
              </Typography>
              <div className={classes.divider} />
            </Box>
            <Box className={classes.sponsors}>
              {sponsors.map((props) => (
                <Sponsor key={props.href} {...props} />
              ))}
            </Box>
          </Box>
        );
      })}
    </Container>
  );
};

export default SponsorSection;
