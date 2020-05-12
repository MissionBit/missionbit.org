import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: brand.indigo,
    textAlign: "center",
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 0),
    },
  },
  copy: {
    marginLeft: "auto",
    marginRight: "auto",
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(71),
    padding: theme.spacing(0, 2),
    lineHeight: 1.5,
    maxWidth: 1200,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    marginBottom: theme.spacing(4),
  },
  button: {
    padding: theme.spacing(1, 6),
    fontSize: theme.typography.pxToRem(40),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.5, 3),
      fontSize: theme.typography.pxToRem(24),
    },
  },
}));

const CommunityWorkshops: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="community-workshops" className={classes.root}>
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

export default CommunityWorkshops;
