import * as React from "react";
import clsx from "clsx";
import Subscribe from "./Subscribe";
import styles from "./Footer.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > li > *": {
      margin: theme.spacing(1),
      fontWeight: "inherit"
    }
  }
}));

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  return (
    <footer className={clsx(styles.footer, className)}>
      <Subscribe />
      <nav>
        <ul className={clsx(styles.ul, classes.root)}>
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
        <span>
          2020 © Mission Bit. A 501(c)3 Non-Profit. ALL Rights Reserved.
          <br />
        </span>
        <address className={styles.address}>
          Mission Bit, 101 A Clay St #121, San Francisco, CA 94111
          <br />
          EIN: 46-0945785, Phone: <a href="tel:+14158795380">(415) 879-5380</a>
        </address>
      </section>
    </footer>
  );
};

export default Footer;
