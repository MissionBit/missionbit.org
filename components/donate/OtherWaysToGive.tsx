import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    padding: theme.spacing(2),
  },
}));

export const OtherWaysToGive: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <Typography variant="h2">Other Ways to Give</Typography>
    </Box>
  );
};

export default OtherWaysToGive;
