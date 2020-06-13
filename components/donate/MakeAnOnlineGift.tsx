import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import DonateCard from "./DonateCard";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  title: {},
  donateCard: {
    marginTop: theme.spacing(4),
  },
}));

export const MakeAnOnlineGift: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <Typography variant="h2" className={classes.title}>
        Make an Online Gift
      </Typography>
      <DonateCard className={classes.donateCard} />
    </Box>
  );
};

export default MakeAnOnlineGift;
