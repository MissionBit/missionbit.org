import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    background:
      "linear-gradient(0deg, #5869C9 0%, #707ED1 33%, #BEC5EA 82%, #FFFFFF 100%)",
    height: "100%",
    width: "100%",
  },

  bridge: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: `no-repeat right bottom / contain url(${require("../../public/images/landing/bridge.svg")})`,
  },

  bridgeText: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    padding: theme.spacing(2),
    flex: "0 0 55%",
    textShadow: "-1px 2px rgba(0,0,0,0.8)",
    [theme.breakpoints.down("xs")]: {
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: "2.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.pxToRem(32),
      lineHeight: "3rem",
    },
  },

  bridgeLine: {
    display: "inline-block",
    margin: "0 0.29rem",
  },

  hillStudents: {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: "20%",
    right: "40%",
    overflow: "hidden",
    backgroundImage: `url(${require("../../public/images/landing/hill-students.svg")})`,
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },

  arrowContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  arrowWrapper: {
    padding: "10px 40px",
    color: "white",
  },

  verticalBounce: {
    animationIterationCount: "infinite",
    animation: "$verticalBounce 3.6s ease infinite",
    transformOrigin: "50% 50%",
  },

  "@keyframes verticalBounce": {
    "11.11111%": {
      transform: "translateY(0)",
    },
    "22.22222%": {
      transform: "translateY(-15px)",
    },
    "27.77778%": {
      transform: "translateY(0)",
    },
    "33.33333%": {
      transform: "translateY(-15px)",
    },
    "44.44444%": {
      transform: "translateY(0)",
    },
  },
}));

function smoothScroll(event: React.MouseEvent<HTMLAnchorElement>): void {
  const el = document.querySelector(event.currentTarget.hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
  }
}

const Landing: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.bridge} />
      <div className={classes.hillStudents} />
      <div className={classes.bridgeText}>
        <span className={classes.bridgeLine}>Bridging the Tech Divide.</span>
        <span className={classes.bridgeLine}>Empowering a New Generation</span>
        <span className={classes.bridgeLine}>of Innovators.</span>
      </div>
      <div className={classes.arrowContainer}>
        <a href="#main" className={classes.arrowWrapper} onClick={smoothScroll}>
          <img
            src={require("../../public/images/landing/down-arrow.svg")}
            className={classes.verticalBounce}
          />
        </a>
      </div>
    </section>
  );
};

export default Landing;
