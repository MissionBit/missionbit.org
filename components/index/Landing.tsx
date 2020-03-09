import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  section: {
    position: "relative",
    background: "linear-gradient(0deg, #2881D0, #1B98A2, #FFFFFF)",
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
    alignItems: "center",
    justifyItems: "center"
  },

  photoWrapper: {
    padding: "77px 57px",
    background: 'space url("/images/landing/circle.svg")'
  },

  arrowWrapper: {
    padding: "10px 40px",
    backgroundColor: theme.palette.common.white,
    borderRadius: "10%"
  },

  verticalBounce: {
    animationIterationCount: "infinite",
    animation: "$verticalBounce 3.6s ease infinite",
    transformOrigin: "50% 50%"
  },

  "@keyframes verticalBounce": {
    "0%": {
      transform: "translateY(0)"
    },
    "5.55556%": {
      transform: "translateY(0)"
    },
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
    },
    "100%": {
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
          <div>
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
      </div>
    </section>
  );
};

export default Landing;
