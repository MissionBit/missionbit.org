import * as React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import IndigoButton from "components/IndigoButton";
import AdobePdfLogo from "components/gala/brands/AdobePdfLogo";
import { ExtendButtonBase } from "@material-ui/core/ButtonBase";
import { ButtonTypeMap } from "@material-ui/core/Button";
import SectionHeading from "./SectionHeading";
import BodyText from "./BodyText";

const LearnMoreButton = withStyles((theme) => ({
  contained: {
    borderRadius: 0,
    padding: theme.spacing(3),
    ...theme.typography.h5,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(20),
    },
    "& svg": {
      marginRight: "0.25rem",
    },
  },
}))(IndigoButton) as ExtendButtonBase<ButtonTypeMap>;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
    "& > *:nth-child(n + 2)": {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(4),
      textAlign: "center",
    },
  },
}));

export const LearnMore: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <SectionHeading>Learn more</SectionHeading>
      <BodyText>
        Check out our Annual Reports to learn more about our work and impact.
      </BodyText>
      <LearnMoreButton
        variant="contained"
        href="/annual-reports/2020/2020MissionBitAnnualReport.pdf"
        target="_blank"
        size="large"
      >
        <AdobePdfLogo fontSize="small" /> 2020 Annual Report
      </LearnMoreButton>
      <LearnMoreButton
        variant="contained"
        href="/annual-reports/2019/mission-bit-annual-report-2019.pdf"
        target="_blank"
        size="large"
      >
        <AdobePdfLogo fontSize="small" /> 2019 Annual Report
      </LearnMoreButton>
      <LearnMoreButton
        variant="contained"
        href="/annual-reports/2018/mission-bit-annual-report-2018.pdf"
        target="_blank"
        size="large"
      >
        <AdobePdfLogo fontSize="small" /> 2018 Annual Report
      </LearnMoreButton>
    </Box>
  );
};

export default LearnMore;
