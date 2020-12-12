import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import OrangeButton from "components/OrangeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  buttonProjs: {
    fontSize: theme.typography.pxToRem(25),
    marginBottom: theme.spacing(4),
    width: "40rem",
    [theme.breakpoints.down("sm")]: {
      width: "10rem",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));

const PastProjectsButton: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <OrangeButton
        variant="contained"
        href="/demoday/summer20"
        size="large"
        className={classes.buttonProjs}
      >
        Check out Summer Demo Day projects here!
      </OrangeButton>
    </Box>
  );
};

export default PastProjectsButton;
