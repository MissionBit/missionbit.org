import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "../../src/colors";
import PeopleIcon from "@material-ui/icons/People";
import LaptopIcon from "@material-ui/icons/Laptop";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles(theme => ({
  section: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  },
  line: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px",
    margin: "3em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      margin: theme.spacing(2)
    }
  },
  value: {
    fontSize: "120%",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block"
    }
  },
  copy: {
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
      "&::before": {
        content: `"\\00a0"`,
        display: "inline-block"
      }
    }
  },
  icon: {
    fontSize: "500%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "400%",
      display: "block",
      margin: "0 auto"
    }
  },
  color1: {
    color: brand.violet
  },
  color2: {
    color: brand.blue
  },
  color3: {
    color: brand.orange
  }
}));

const Stats: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.line}>
        <div className={clsx(classes.value, classes.color1)}>85</div>
        <div className={classes.copy}>classes taught</div>
        <LaptopIcon className={clsx(classes.icon, classes.color1)} />
      </div>
      <div className={classes.line}>
        <div className={clsx(classes.value, classes.color2)}>4,000+</div>
        <div className={classes.copy}>students served</div>
        <PeopleIcon className={clsx(classes.icon, classes.color2)} />
      </div>
      <div className={classes.line}>
        <div className={clsx(classes.value, classes.color3)}>14</div>
        <div className={classes.copy}>school sites</div>
        <SchoolIcon className={clsx(classes.icon, classes.color3)} />
      </div>
    </section>
  );
};

export default Stats;
