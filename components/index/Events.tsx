import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import YouTubeVideo from "../YouTubeVideo";

const useStyles = makeStyles(theme => ({
  copy: {
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px",
    lineHeight: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      marginBottom: "1em",
      padding: "0 1em"
    }
  },

  copyText: {
    fontWeight: "bold"
  },

  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    margin: "1em",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      margin: "1em 0"
    }
  }
}));

const Events: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.copy}>
        <div className={classes.copyText}>
          The Mission Bit Gala was a success! Thank you to everyone who
          participated!
        </div>
        <div>
          <Button size="medium" variant="contained" color="secondary" href="#">
            See More
          </Button>
        </div>
      </div>
      <YouTubeVideo id="oTSNS227No4" />
    </section>
  );
};

export default Events;
