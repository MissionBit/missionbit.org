import * as React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { brand } from "src/colors";

function iconHeightRem(heightRem: number): { width: string; height: string } {
  return {
    width: `${heightRem * (8 / 5)}rem`,
    height: `${heightRem}rem`,
  };
}

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  line: {
    fontSize: theme.typography.pxToRem(32),
    margin: "3rem 1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(24),
      margin: theme.spacing(2),
    },
  },
  front: {},
  shadow: {
    position: "absolute",
    transform: `translate(${theme.typography.pxToRem(-2)}, 0)`,
    display: "none",
  },
  value: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    fontSize: theme.typography.pxToRem(90),
    "@supports (-webkit-text-stroke-color: #000)": {
      "& $front": {
        position: "relative",
        color: "#fff",
      },
      "& $shadow": {
        position: "absolute",
        display: "inline",
      },
      WebkitTextStrokeColor: "var(--value-color, black)",
      WebkitTextStrokeWidth: theme.typography.pxToRem(2),
    },
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      "& $shadow": {
        transform: `translate(${theme.typography.pxToRem(-1)}, 0)`,
      },
    },
  },
  copy: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: theme.typography.fontWeightLight,
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
    maxWidth: "100%",
    ...iconHeightRem(12),
    [theme.breakpoints.between("sm", "md")]: iconHeightRem(8),
    [theme.breakpoints.down("xs")]: {
      ...iconHeightRem(7),
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

const Line: React.FC<{
  color: "color1" | "color2" | "color3";
  img: { src: string; alt: string };
  value: string;
  copy: string;
}> = ({ color, img, value, copy }) => {
  const classes = useStyles();
  return (
    <div className={classes.line}>
      <img className={classes.icon} {...img} />
      <div className={clsx(classes.value, classes[color])}>
        <span aria-hidden="true" className={classes.shadow}>
          {value}
        </span>
        <span className={classes.front}>{value}</span>
      </div>
      <div className={classes.copy}>{copy}</div>
    </div>
  );
};

const Stats: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <Line
        img={{
          src: require("public/images/stats/classes-taught.svg"),
          alt: "Graduation cap on top of a text editor window",
        }}
        color="color1"
        value="88"
        copy="classes taught"
      />
      <Line
        img={{
          src: require("public/images/stats/students.svg"),
          alt: "Three students, two holding laptops with Mission Bit stickers",
        }}
        color="color2"
        value="4,000+"
        copy="students served"
      />
      <Line
        img={{
          src: require("public/images/stats/mission-high-school.svg"),
          alt: "Mission High School",
        }}
        color="color3"
        value="14"
        copy="school sites"
      />
    </section>
  );
};

export default Stats;
