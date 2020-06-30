import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";
import VioletButton from "components/VioletButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    borderTop: `1px solid ${brand.victoria}`,
  },
  heading: {
    color: brand.blue,
    fontSize: theme.typography.pxToRem(60),
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  buttons: {
    textAlign: "center",
    padding: theme.spacing(4, 0, 2, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 0, 1, 0),
    },
  },
  button: {
    margin: theme.spacing(0, 2),
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
    },
  },
}));

const SupportOurYouth: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Box component="section" id="support" className={classes.root}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        className={classes.heading}
      >
        Support Our Youth
      </Typography>
      <Box className={classes.buttons}>
        <VioletButton
          href="/donate"
          variant="outlined"
          size="large"
          className={classes.button}
        >
          Donate
        </VioletButton>
        <VioletButton
          href="/get-involved"
          variant="outlined"
          size="large"
          className={classes.button}
        >
          Volunteer
        </VioletButton>
      </Box>
    </Box>
  );
};

export default SupportOurYouth;
