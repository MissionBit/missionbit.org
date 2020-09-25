import * as React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FaqItem from "components/FaqItem";
import { brand } from "src/colors";
import BaseLink from "@material-ui/core/Link";
import SectionHeading from "./SectionHeading";
import {
  EIN,
  STREET_ADDRESS,
  CITY_STATE_ZIP,
  PHONE_NUMBER,
  PHONE_HREF,
} from "src/orgInfo";
import { INFO_EMAIL, DEVELOPMENT_EMAIL } from "src/emails";

const accentColor = brand.indigo;

const Link = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
  },
}))(BaseLink);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
    },
    "& .MuiPaper-root": {
      backgroundColor: brand.indigo,
      color: theme.palette.common.white,
    },
    "& .MuiExpansionPanel-root::before": {
      backgroundColor: theme.palette.common.white,
    },
    "& .MuiExpansionPanelSummary-expandIcon": {
      color: theme.palette.common.white,
      "& .MuiSvgIcon-root": {
        fontSize: theme.typography.pxToRem(48),
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.typography.pxToRem(28),
        },
      },
    },
    "& .MuiPaper-elevation1": {
      boxShadow: `0px 2px 1px -1px ${accentColor}, 0px 1px 1px 0px ${accentColor}, 0px 1px 3px 0px ${accentColor}`,
    },
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  address: {
    marginTop: theme.spacing(2),
    fontStyle: "normal",
  },
  taxExempt: {
    fontStyle: "italic",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4),
    },
  },
}));

export const OtherWaysToGive: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <Container
      component="section"
      id="other-ways-to-give"
      className={clsx(classes.root, className)}
    >
      <SectionHeading className={classes.title}>
        Other ways to give
      </SectionHeading>
      <FaqItem question="Check">
        <Typography>
          Make checks payable to <strong>Mission Bit</strong>. To receive a
          receipt electronically, write your email address in the memo of your
          check.
        </Typography>
        <Typography component="address" className={classes.address}>
          Mission Bit
          <br />
          {STREET_ADDRESS}
          <br />
          {CITY_STATE_ZIP}
          <br />
          <br />
          EIN: {EIN}
          <br />
          Phone: {PHONE_NUMBER}
          <br />
          Contact: {INFO_EMAIL}
          <br />
          Mission Bit is a 501 (c)(3)
        </Typography>
      </FaqItem>
      <FaqItem question="Stock">
        <Typography>
          DTC number: 0226
          <br />
          Account name: Mission Bit
          <br />
          Account number: Z40224631
          <br />
          Brokerage: Fidelity
          <br />
          <br />
          In addition, please provide the following:
          <br />
          1. Name and mailing address.
          <br />
          2. Type of stock.
          <br />
          3. Number of shares.
          <br />
          <br />
          When you provide us this information, especially your name and
          address, we can personally thank you and send a tax receipt. For more
          information or assistance, please contact us by email at{" "}
          <Link
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            underline="always"
            rel="noopener noreferrer"
          >
            {DEVELOPMENT_EMAIL}
          </Link>{" "}
          <br />
          <br />
          Donate securely using the Overflow platform {" "}
          <Link
          href="https://app.overflow.co/missionbit"
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
          >
            here.
          </Link>
        </Typography>
      </FaqItem>
      <FaqItem question="Online">
        Online donations are the easiest way to give to Mission Bit. Please
        visit our secure online form above to make your donation today, and
        consider making your gift a monthly commitment to provide computer
        science education for free by choosing “Monthly”.
      </FaqItem>
      <FaqItem question="Matching Gift">
        You may be able to double or triple your gift through your employer’s
        matching gift program. Contact your HR department to find out if your
        company matches your charitable donations. If they do, let us know!
      </FaqItem>
      <FaqItem question="In-Kind Gift">
        We accept in-kind donations of laptops and other equipment.{" "}
        <Link
          href={`mailto:${INFO_EMAIL}`}
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
        >
          Contact Us
        </Link>{" "}
        if you have something to donate.
      </FaqItem>
      <FaqItem question="Other">
        For more information or assistance, please contact us by email at{" "}
        <Link
          href={`mailto:${DEVELOPMENT_EMAIL}`}
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
        >
          {DEVELOPMENT_EMAIL}
        </Link>{" "}
        or by phone at{" "}
        <Link
          href={PHONE_HREF}
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
        >
          {PHONE_NUMBER}
        </Link>
        .
      </FaqItem>
      <Typography variant="body2" className={classes.taxExempt}>
        Mission Bit is a 501(c)3 tax-exempt organization and your donation is
        tax-deductible within the guidelines of U.S. law. To claim a donation as
        a deduction on your U.S. taxes, please keep your email donation receipt
        as your official record. We'll send it to you upon successful completion
        of your donation.
      </Typography>
    </Container>
  );
};

export default OtherWaysToGive;
