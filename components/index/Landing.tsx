import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  section: {
    position: "relative",
    background:
      "linear-gradient(0deg, #0058A6 0%, #5869C9 48%, #A4AEE2 72%, #FFFFFF 100%)",
    height: "100%"
  },

  bridge: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background:
      'no-repeat right bottom / contain url("/images/landing/bridge.svg")'
  },

  bridgeText: {
    color: theme.palette.common.white,
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    fontSize: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "2.5rem"
    },
    lineHeight: "3rem"
  },

  bridgeLine: {
    display: "inline-block",
    margin: "0 0.29rem"
  },

  content: {
    position: "relative",
    display: "grid",
    height: "100%",
    gridTemplateColumns: "1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      padding: `${theme.spacing(3)}px 0`
    },
    alignItems: "center",
    justifyItems: "center"
  },

  photoWrapper: {
    padding: "77px 57px",
    background: 'space url("/images/landing/circle.svg")',
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(3)}px ${theme.spacing(5)}px`,
      "& > img": {
        maxWidth: "50vw",
        height: "auto",
        objectFit: "contain"
      }
    }
  },

  arrowContainer: {
    gridColumn: "1 / -1",
    gridRow: 2,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-end"
    }
  },

  arrowWrapper: {
    padding: "10px 40px",
    color: "white"
  },

  verticalBounce: {
    animationIterationCount: "infinite",
    animation: "$verticalBounce 3.6s ease infinite",
    transformOrigin: "50% 50%"
  },

  "@keyframes verticalBounce": {
    "11.11111%": {
      transform: "translateY(0)"
    },
    "22.22222%": {
      transform: "translateY(-15px)"
    },
    "27.77778%": {
      transform: "translateY(0)"
    },
    "33.33333%": {
      transform: "translateY(-15px)"
    },
    "44.44444%": {
      transform: "translateY(0)"
    }
  }
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
        <div>
          <div className={classes.photoWrapper}>
            <img
              src="/images/landing/landing-photo.jpg"
              width="485"
              height="498"
              alt="Two students at a laptop"
            />
          </div>
        </div>
        <div className={classes.bridgeText}>
          <span className={classes.bridgeLine}>Bridging the Tech Divide.</span>
          <span className={classes.bridgeLine}>
            Empowering a New Generation of
          </span>
          <span className={classes.bridgeLine}>Innovators.</span>
        </div>
        <div className={classes.arrowContainer}>
          <a
            href="#main"
            className={classes.arrowWrapper}
            onClick={smoothScroll}
          >
            <img
              src="/images/landing/down-arrow.svg"
              className={classes.verticalBounce}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
