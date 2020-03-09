import * as React from "react";
import HeaderMenuOption from "./HeaderMenuOption";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { PopupState } from "material-ui-popup-state/hooks";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    listStyleType: "none",
    alignItems: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    color: "#333",
    padding: "1rem",
    "& > li": {
      marginRight: "2em",
      "&:first-child": {
        flexGrow: 1,
        marginRight: 0
      },
      "&:last-child": {
        marginRight: 0
      },
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  },
  logo: {
    position: "relative",
    maxHeight: "3rem",
    top: "1px"
  }
}));

function focusGetUpdates(event: React.MouseEvent<HTMLAnchorElement>): void {
  const section = document.querySelector(event.currentTarget.hash);
  if (section instanceof HTMLElement) {
    const el = section.querySelector("input");
    if (el) {
      section.scrollIntoView({ behavior: "smooth" });
      el.focus({ preventScroll: true });
      event.preventDefault();
    }
  }
}

const menuItems = (
  href: string,
  popupState: PopupState,
  items: { text: string; anchor: string }[]
) => {
  const closePopup = () => {
    popupState.close();
  };
  return items.map(({ text, anchor }, idx) => (
    <MenuItem
      key={idx}
      component="a"
      href={`${href}${anchor}`}
      onClick={closePopup}
    >
      {text}
    </MenuItem>
  ));
};

const Header: React.FC<{ className?: string }> = ({ children, className }) => {
  const classes = useStyles();
  return (
    <header className={className}>
      <nav>
        <ul className={classes.root}>
          <li>
            <a href="/">
              <img
                src="/images/missionbit-logo-horizontal.svg"
                className={classes.logo}
              />
            </a>
          </li>
          <li>
            <HeaderMenuOption title="about" popupId="popup-about" href="/about">
              {popupState =>
                menuItems("/about", popupState, [
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
            <Button
              variant="outlined"
              color="secondary"
              href="#get-updates"
              onClick={focusGetUpdates}
            >
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
