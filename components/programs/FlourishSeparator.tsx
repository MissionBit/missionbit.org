import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AsteriskIcon from "../index/AsteriskIcon";
import { brand } from "../../src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  icon: {
    color: brand.orangeFlourish,
    margin: theme.spacing(4, 1),
  },
}));

const FlourishSeparator: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AsteriskIcon className={classes.icon} />
      <AsteriskIcon className={classes.icon} />
      <AsteriskIcon className={classes.icon} />
    </Box>
  );
};

export default FlourishSeparator;
