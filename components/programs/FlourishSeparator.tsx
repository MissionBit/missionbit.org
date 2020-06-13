import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import AsteriskIcon from "components/icons/Asterisk";
import { brand } from "src/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  icon: {
    color: brand.orangeFlourish,
    margin: theme.spacing(4, 1),
  },
}));

const FlourishSeparator: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(className, classes.root)}>
      <AsteriskIcon className={classes.icon} />
      <AsteriskIcon className={classes.icon} />
      <AsteriskIcon className={classes.icon} />
    </Box>
  );
};

export default FlourishSeparator;
