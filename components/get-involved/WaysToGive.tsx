import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FaqItem from "../FaqItem";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  heading: {
    margin: theme.spacing(2, 0),
    textAlign: "center",
  },
}));

const Address: React.FC<{}> = () => (
  <address>
    Mission Bit
    <br />
    101A Clay St., #121 <br />
    San Francisco, CA 94111
    <br />
  </address>
);

const DevelopmentEmail: React.FC<{}> = () => (
  <Link href="mailto:development@missionbit.org">
    development@missionbit.org
  </Link>
);

const WaysToGive: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="give" className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
        Ways to Give
      </Typography>
      <FaqItem question="Online">
        Online donations are the easiest way to give to Mission Bit. Please
        visit our secure online form at{" "}
        <Link href="https://donate.missionbit.org/" rel="noopener noreferrer">
          donate.missionbit.org
        </Link>{" "}
        to make your donation today, and consider making your gift a monthly
        commitment to provide computer science education for free by choosing
        "Monthly".
      </FaqItem>
      <FaqItem question="By Mail">
        Please fill out our Donation Form and address all incoming mail to:
        <br />
        <br />
        <Address />
      </FaqItem>
      <FaqItem question="Wire Transfer">
        Please view our Wire Transfer Form for more information
      </FaqItem>
      <FaqItem question="In Honor">
        Honor someone special by making a donation in their name. Simply select
        “Dedicate my donation in honor or memory of someone” on the online
        donation form. Or, indicate a tribute via mail to:
        <br />
        <br />
        <Address />
      </FaqItem>
      <FaqItem question="Planned Giving">
        Planned giving allows you to make a significant impact in changing the
        culture around diversity in tech. Consider making a gift through planned
        giving, or a charitable gift that is arranged in the present to be
        allocated at a future date such as a will or trust. Contact your
        financial advisor if you would like to learn more about your planned
        giving options or contact us at <DevelopmentEmail />.
      </FaqItem>
      <FaqItem question="Workplace Giving">
        Donate to Mission Bit with each paycheck to help us introduce students
        to the tech field. Ask your human resources department if you can donate
        to Mission Bit during future pay periods, and check to see if your
        company offers a matching gifts program to double the impact of your
        donation.
      </FaqItem>
      <FaqItem question="Contact">
        Questions? We are here to help and welcome your ideas about partnering
        with Mission Bit. Please contact our Development team at{" "}
        <DevelopmentEmail /> and we'll get back to you as soon as we can.
      </FaqItem>
    </Container>
  );
};

export default WaysToGive;
