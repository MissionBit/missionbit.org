import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
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
    color: theme.palette.common.white,
    flex: "1 0 40%",
    justifySelf: "flex-end",
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(32),
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: "2.5rem",
    },
    lineHeight: "3rem",
  },

  bridgeLine: {
    display: "inline-block",
    margin: "0 0.29rem",
  },

  content: {
    display: "flex",
    position: "relative",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 0, 0, 0),
    },
    alignItems: "center",
    justifyItems: "center",
  },

  hillStudents: {
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    right: "40%",
    overflow: "hidden",
  },
  students: {
    position: "absolute",
    left: "40%",
    bottom: "20%",
    width: "70%",
    transform: "translate(-50%, 0)",
  },
  hill: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    transform: "translate(0, 36%)",
  },

  arrowContainer: {
    display: "flex",
    flex: "1 0 100%",
    flexDirection: "column",
    alignSelf: "flex-end",
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
      <div className={classes.content}>
        <div className={classes.hillStudents}>
          <img
            src={require("../../public/images/landing/hill.svg")}
            className={classes.hill}
          />
          <img
            src={require("../../public/images/landing/students.svg")}
            className={classes.students}
          />
        </div>
        <div className={classes.bridgeText}>
          <span className={classes.bridgeLine}>Bridging the Tech Divide.</span>
          <span className={classes.bridgeLine}>
            Empowering a New Generation
          </span>
          <span className={classes.bridgeLine}>of Innovators.</span>
        </div>
        <div className={classes.arrowContainer}>
          <a
            href="#main"
            className={classes.arrowWrapper}
            onClick={smoothScroll}
          >
            <img
              src={require("../../public/images/landing/down-arrow.svg")}
              className={classes.verticalBounce}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
