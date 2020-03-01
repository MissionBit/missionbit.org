import * as React from "react";
import styles from "./Header.module.css";
import HeaderMenuOption from "./HeaderMenuOption";
import MenuItem from "@material-ui/core/MenuItem";
import { PopupState } from "material-ui-popup-state/hooks";
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

const menuItems = (items: string[]) => (popupState: PopupState) =>
  items.map((item, idx) => (
    <MenuItem key={idx} onClick={popupState.close}>
      {item}
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
            <HeaderMenuOption title="about" popupId="popup-about">
              {menuItems([
                "what we do",
                "our values",
                "our team",
                "our supporters"
              ])}
            </HeaderMenuOption>
          </li>
          <li>
            <Button href="#programs">programs</Button>
          </li>
          <li>
            <Button href="#events">events</Button>
          </li>
          <li>
            <Button href="#get-involved">get involved</Button>
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
            <Button variant="outlined" color="secondary" href="#get-updates">
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
