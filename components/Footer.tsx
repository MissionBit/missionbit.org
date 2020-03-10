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
    textAlign: "center",
    paddingBottom: theme.spacing(3)
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
      <section>
        <Typography variant="body2">
          2020 © Mission Bit. A 501(c)3 Non-Profit. ALL Rights Reserved.
        </Typography>
        <Typography
          variant="body2"
          component="address"
          className={classes.address}
        >
          Mission Bit, 101 A Clay St #121, San Francisco, CA 94111
          <br />
          EIN: 46-0945785, Phone:{" "}
          <Link color="secondary" href="tel:+14158795380">
            (415) 879-5380
          </Link>
        </Typography>
      </section>
    </footer>
  );
};

export default Footer;
