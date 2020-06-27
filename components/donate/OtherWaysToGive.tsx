import * as React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FaqItem from "components/FaqItem";
import { brand } from "src/colors";
import BaseLink from "@material-ui/core/Link";
import SectionHeading from "./SectionHeading";

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
          101 A Clay Street Ste. 121
          <br />
          San Francisco, CA 94111
          <br />
          <br />
          EIN: 46-0945785
          <br />
          Phone: (415) 879-5380
          <br />
          Contact: info@missionbit.org
          <br />
          Mission Bit is a 501 (c)(3)
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
          href="mailto:info@missionbit.org"
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
        >
          Contact Us
        </Link>{" "}
        if you have something to donate.
      </FaqItem>
      <FaqItem question="Anything else?">
        For more information or assistance, please contact us by email at{" "}
        <Link
          href="mailto:development@missionbit.org"
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
        >
          development@missionbit.org
        </Link>{" "}
        or by phone at{" "}
        <Link
          href="tel:+14158795380"
          target="_blank"
          underline="always"
          rel="noopener noreferrer"
        >
          (415) 879-5380
        </Link>
        .
      </FaqItem>
    </Container>
  );
};

export default OtherWaysToGive;
