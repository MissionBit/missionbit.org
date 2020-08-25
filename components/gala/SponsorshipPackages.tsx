import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { DEVELOPMENT_EMAIL } from "src/emails";
import IndigoButton from "components/IndigoButton";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  buttons: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  button: {
    fontSize: theme.typography.pxToRem(35),
  },
  link: {
    color: brand.violet,
  },
  packagesCopy: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(28),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  copySection: {
    "& > p": {
      margin: theme.spacing(2, 0),
    },
    "& ul": theme.typography.body1,
    [theme.breakpoints.down("sm")]: {
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
}));

const SponsorshipPackages: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        component="section"
        id="packages"
        className={classes.copySection}
      >
        <Box className={classes.buttons}>
          <IndigoButton
            variant="outlined"
            size="large"
            href="/gala"
            className={classes.button}
          >
            Fourth Annual Gala Details
          </IndigoButton>
        </Box>
        <Typography variant="h3" align="center">
          Gala Sponsorship Packages
        </Typography>
        <Typography className={classes.packagesCopy}>
          All sponsorship packages include a virtual table for at least 25
          attendees and logo presence on Mission Bit website for 2021.
          <br />
          Contact{" "}
          <Link
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {DEVELOPMENT_EMAIL}
          </Link>{" "}
          with any questions.
        </Typography>
        <Typography variant="h4">$50,000 Diamond Sponsor</Typography>
        <ul>
          <li>Exclusive to one sponsor</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>Up to three minutes of speaking time</li>
          <li>Public recognition in CEO Remarks</li>
          <li>
            Your logo featured as Diamond Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </ul>
        <Typography variant="h4">$25,000 Platinum Sponsor</Typography>
        <ul>
          <li>Exclusive to two sponsors</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>Public recognition in CEO Remarks</li>
          <li>
            Your logo featured as Platinum Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </ul>
        <Typography variant="h4">$10,000 Gold Sponsor</Typography>
        <ul>
          <li>Exclusive to five sponsors</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>
            Your logo featured as Gold Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </ul>
        <Typography variant="h4">$5,000 Silver Sponsor</Typography>
        <ul>
          <li>Exclusive to ten sponsors</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>
            Your logo featured as Silver Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </ul>
        <Typography variant="h4">$2,500 Bronze Sponsor</Typography>
        <ul>
          <li>25 “seats” for your employees</li>
          <li>Logo presence on event program</li>
          <li>
            Your logo featured as Bronze Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </ul>
      </Container>
      <Container component="section" className={classes.copySection}>
        <Typography>
          For any questions regarding Gala Sponsorship,
          {/*or to use a payment method other than credit card, */ " "}
          please contact us at{" "}
          <a
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPMENT_EMAIL}
          </a>
          . For more information about the Gala and individual tickets, visit{" "}
          <a href="/gala">Mission Bit's Fourth Annual Gala</a>.
        </Typography>
      </Container>
    </>
  );
};

export default SponsorshipPackages;
