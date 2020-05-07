import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "../../src/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: brand.indigo,
    textAlign: "center",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  copy: {
    marginLeft: "auto",
    marginRight: "auto",
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "5rem",
    lineHeight: "7.5rem",
    maxWidth: 1200,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    marginBottom: theme.spacing(4),
  },
  button: {
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1, 6),
    fontSize: theme.typography.pxToRem(40),
  },
}));

const Workshops: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="mission" className={classes.root}>
      <Typography variant="h1" component="h2" className={classes.copy}>
        Want to bring Mission Bit workshops to your community?
      </Typography>
      <Button
        href="mailto:cora@missionbit.org"
        size="large"
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Reach Out
      </Button>
    </Box>
  );
};

export default Workshops;
