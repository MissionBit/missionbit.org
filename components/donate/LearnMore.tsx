import * as React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import IndigoButton from "components/IndigoButton";
import AdobePdfLogo from "components/gala/brands/AdobePdfLogo";
import { ExtendButtonBase } from "@material-ui/core/ButtonBase";
import { ButtonTypeMap } from "@material-ui/core/Button";

const LearnMoreButton = withStyles((theme) => ({
  contained: {
    borderRadius: 0,
    padding: theme.spacing(3),
    ...theme.typography.h5,
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
  },
}));

export const LearnMore: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <Typography variant="h2">Learn More</Typography>
      <Typography variant="body1">
        Check out our Annual Reports to learn more about our work and impact
      </Typography>
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
