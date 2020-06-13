import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { brand } from "src/colors";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: brand.lightOrange,
    width: "100%",
    padding: theme.spacing(6),
  },
  title: {
    fontSize: theme.typography.pxToRem(71),
  },
  subTitle: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export const Landing: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, className)}>
      <Typography variant="h1" className={classes.title}>
        Donate to Mission Bit
      </Typography>
      <Typography className={classes.subTitle} color="textSecondary">
        Help us educate and equip students to pursue opportunities in tech.
      </Typography>
    </Box>
  );
};

export default Landing;
