import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "../../src/colors";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  line: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: theme.typography.pxToRem(32),
    margin: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(24),
      margin: theme.spacing(2),
    },
  },
  value: {
    fontSize: "5rem",
    WebkitTextStrokeWidth: "4px",
    "@supports (-webkit-text-stroke-color: #000)": {
      color: "transparent !important",
      WebkitTextStrokeColor: "var(--value-color, black)",
      WebkitTextStrokeWidth: "3px",
    },
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
      "@supports (-webkit-text-stroke-color: #000)": {
        WebkitTextStrokeWidth: "2px",
      },
    },
  },
  copy: {
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
      "&::before": {
        content: `"\\00a0"`,
        display: "inline-block",
      },
    },
  },
  icon: {
    objectFit: "contain",
    height: "8rem",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "5rem",
      display: "block",
      margin: "0 auto",
    },
  },
  color1: {
    "--value-color": brand.violet,
    color: brand.violet,
  },
  color2: {
    "--value-color": brand.blue,
    color: brand.blue,
  },
  color3: {
    "--value-color": brand.orange,
    color: brand.orange,
  },
}));

const Stats: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.line}>
        <img
          src={require("../../public/images/stats/classes-taught.svg")}
          className={classes.icon}
          alt="Graduation cap on top of a text editor window"
        />
        <div className={clsx(classes.value, classes.color1)}>88</div>
        <div className={classes.copy}>classes taught</div>
      </div>
      <div className={classes.line}>
        <img
          src={require("../../public/images/stats/students.svg")}
          className={classes.icon}
          alt="Three students, two holding laptops with Mission Bit stickers"
        />
        <div className={clsx(classes.value, classes.color2)}>4,000+</div>
        <div className={classes.copy}>students served</div>
      </div>
      <div className={classes.line}>
        <img
          src={require("../../public/images/stats/mission-high-school.svg")}
          className={classes.icon}
          alt="Mission High School"
        />
        <div className={clsx(classes.value, classes.color3)}>14</div>
        <div className={classes.copy}>school sites</div>
      </div>
    </section>
  );
};

export default Stats;
