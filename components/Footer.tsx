import * as React from "react";
import clsx from "clsx";
import Subscribe from "./Subscribe";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import {
  PHONE_HREF,
  PHONE_NUMBER,
  STREET_ADDRESS,
  CITY_STATE_ZIP,
  EIN,
} from "src/orgInfo";
import { INFO_EMAIL } from "src/emails";

const useStyles = makeStyles((theme) => ({
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
      fontWeight: "inherit",
    },
  },
  footer: {
    width: "100%",
    textAlign: "center",
    "@media print": {
      display: "none",
    },
  },
  copyright: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(3, 2),
    // Manually control where wrapping can happen
    "& span": {
      whiteSpace: "nowrap",
    },
  },
  address: {
    fontStyle: "normal",
  },
}));

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  const [year] = useState(() => new Date().getFullYear());
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
            <Button href="/donate">donate</Button>
          </li>
          <li>
            <Button
              href={`mailto:${INFO_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              contact
            </Button>
          </li>
        </ul>
      </nav>
      <section className={classes.copyright}>
        <Typography variant="body2">
          <span>{year} © Mission Bit.</span> <span>A 501(c)3 Non-Profit.</span>{" "}
          <span>ALL Rights Reserved.</span>
        </Typography>
        <Typography
          variant="body2"
          component="address"
          className={classes.address}
        >
          <span>Mission Bit,</span> <span>{STREET_ADDRESS},</span>{" "}
          <span>{CITY_STATE_ZIP}</span>
          <br />
          <span>EIN: {EIN}</span>,{" "}
          <span>
            Phone:{" "}
            <Link color="secondary" href={PHONE_HREF}>
              {PHONE_NUMBER}
            </Link>
          </span>
        </Typography>
      </section>
    </footer>
  );
};

export default Footer;
