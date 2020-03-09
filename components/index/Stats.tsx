import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  section: {
    width: "100%",
    textAlign: "center",
    position: "relative"
  },
  line: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px",
    margin: "3em"
  },
  value: {
    fontSize: "120%",
    fontWeight: "bold"
  },
  color1: {
    color: "#C21981"
  },
  color2: {
    color: "#0058A6"
  },
  color3: {
    color: "#F67510"
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
