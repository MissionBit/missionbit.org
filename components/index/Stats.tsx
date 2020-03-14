import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "../../src/colors";

const useStyles = makeStyles(theme => ({
  section: {
    width: "100%",
    textAlign: "center",
    position: "relative"
  },
  line: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px",
    margin: "3em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      margin: `${theme.spacing(4)}px ${theme.spacing(2)}px`
    }
  },
  value: {
    fontSize: "120%",
    fontWeight: "bold"
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
        Over <span className={clsx(classes.value, classes.color1)}>3,800</span>{" "}
        students have realized their potential
      </div>
      <div className={classes.line}>
        Over <span className={clsx(classes.value, classes.color2)}>2,500</span>{" "}
        volunteer hours dedicated
      </div>
      <div className={classes.line}>
        <span className={clsx(classes.value, classes.color3)}>54</span> student
        showcase events
      </div>
    </section>
  );
};

export default Stats;
