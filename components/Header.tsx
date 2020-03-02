import * as React from "react";
import styles from "./Header.module.css";
import HeaderMenuOption from "./HeaderMenuOption";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    "& > li > *": {
      margin: theme.spacing(1),
      textTransform: "inherit"
    }
  }
}));

const menuItems = (href: string, items: { text: string; anchor: string }[]) =>
  items.map(({ text, anchor }, idx) => (
    <MenuItem key={idx} component="a" href={`${href}${anchor}`}>
      {text}
    </MenuItem>
  ));

const Header: React.SFC<{ className?: string }> = ({ children, className }) => {
  const classes = useStyles();
  return (
    <header className={className}>
      <nav>
        <ul className={clsx(styles.ul, classes.root)}>
          <li>
            <a href="/">
              <img
                src="/images/missionbit-logo-horizontal.svg"
                className={styles.logo}
              />
            </a>
          </li>
          <li>
            <HeaderMenuOption
              title="about"
              popupId="popup-about"
              href="/about-us"
            >
              {() =>
                menuItems("/about-us", [
                  { text: "what we do", anchor: "" },
                  { text: "our values", anchor: "#values" },
                  { text: "our team", anchor: "#team" },
                  { text: "our supporters", anchor: "#supporters" }
                ])
              }
            </HeaderMenuOption>
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
            <Button
              variant="outlined"
              color="primary"
              href="https://donate.missionbit.org/"
            >
              donate
            </Button>
          </li>
          <li>
            <Button variant="outlined" color="secondary" href="/get-updates">
              get updates
            </Button>
          </li>
        </ul>
      </nav>
      {children}
    </header>
  );
};

export default Header;
