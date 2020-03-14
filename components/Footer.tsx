import * as React from "react";
import clsx from "clsx";
import Subscribe from "./Subscribe";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "grid",
    gridGap: theme.spacing(1),
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
    listStyleType: "none",
    justifyItems: "center",
    alignItems: "center",
    color: "#333",
    padding: theme.spacing(1),
    "& > li > *": {
      fontWeight: "inherit"
    }
  },
  footer: {
    width: "100%",
    textAlign: "center"
  },
  copyright: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
    // Manually control where wrapping can happen
    "& span": {
      whiteSpace: "nowrap"
    }
  },
  address: {
    fontStyle: "normal"
  }
}));

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  return (
    <footer className={clsx(classes.footer, className)}>
      <Subscribe />
      <nav>
        <ul className={classes.root}>
          <li>
            <Button href="/about">about</Button>
          </li>
          <li>
            <Button href="/programs">programs</Button>
          </li>
          <li>
            <Button href="/events">events</Button>
          </li>
          <li>
            <Button href="/get-involved">get involved</Button>
          </li>
          <li>
            <Button href="/about#jobs">jobs</Button>
          </li>
          <li>
            <Button href="https://donate.missionbit.org/">donate</Button>
          </li>
          <li>
            <Button href="/contact">contact</Button>
          </li>
        </ul>
      </nav>
      <section className={classes.copyright}>
        <Typography variant="body2">
          <span>2020 © Mission Bit.</span> <span>A 501(c)3 Non-Profit.</span>{" "}
          <span>ALL Rights Reserved.</span>
        </Typography>
        <Typography
          variant="body2"
          component="address"
          className={classes.address}
        >
          <span>Mission Bit,</span> <span>101 A Clay St #121,</span>{" "}
          <span>San Francisco, CA 94111</span>
          <br />
          <span>EIN: 46-0945785</span>,{" "}
          <span>
            Phone:{" "}
            <Link color="secondary" href="tel:+14158795380">
              (415) 879-5380
            </Link>
          </span>
        </Typography>
      </section>
    </footer>
  );
};

export default Footer;
