import * as React from "react";
import HeaderMenuOption from "./HeaderMenuOption";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import {
  usePopupState,
  PopupState,
  bindTrigger,
  bindMenu
} from "material-ui-popup-state/hooks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";

interface NavMenuChoice {
  text: string;
  href: string;
  buttonProps?: ButtonProps;
  subMenu?: { text: string; anchor: string }[];
}

function focusGetUpdates(event: React.MouseEvent<HTMLElement>): void {
  if (event.currentTarget instanceof HTMLAnchorElement) {
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
}

const commonNav: NavMenuChoice[] = [
  {
    text: "about",
    href: "/about",
    subMenu: [
      { text: "what we do", anchor: "" },
      { text: "our values", anchor: "#values" },
      { text: "our team", anchor: "#team" },
      { text: "our supporters", anchor: "#supporters" }
    ]
  },
  { text: "programs", href: "/programs" },
  { text: "events", href: "/events" },
  { text: "get involved", href: "/get-involved" },
  {
    text: "donate",
    href: "https://donate.missionbit.org/",
    buttonProps: {
      variant: "outlined",
      color: "primary"
    }
  },
  {
    text: "get updates",
    href: "#get-updates",
    buttonProps: {
      variant: "outlined",
      color: "secondary",
      onClick: focusGetUpdates
    }
  }
];

const useStyles = makeStyles(theme => ({
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

const useStylesMobile = makeStyles(() => ({
  logo: {
    position: "relative",
    maxHeight: "2.75rem",
    top: "1px"
  }
}));

const useStylesDesktop = makeStyles(() => ({
  ul: {
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
      }
    }
  },
  logo: {
    position: "relative",
    maxHeight: "3rem",
    top: "1px"
  }
}));

const menuItems = (
  href: string,
  popupState: PopupState,
  items: { text: string; anchor: string }[]
) => {
  const closePopup = () => {
    popupState.close();
  };
  return items.map(({ text, anchor }, idx) => (
    <MenuItem key={idx} onClick={closePopup}>
      <Link href={`${href}${anchor}`} color="textPrimary" underline="none">
        {text}
      </Link>
    </MenuItem>
  ));
};

const DesktopHeaderNav: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStylesDesktop();
  return (
    <nav className={className}>
      <ul className={classes.ul}>
        <li>
          <LogoHome className={classes.logo} />
        </li>
        {commonNav.map(({ text, href, subMenu, buttonProps }) => (
          <li key={href}>
            {subMenu === undefined ? (
              <Button href={href} {...(buttonProps ?? {})}>
                {text}
              </Button>
            ) : (
              <HeaderMenuOption
                title={text}
                popupId={`popup-${text}`}
                href={href}
              >
                {popupState => menuItems(href, popupState, subMenu)}
              </HeaderMenuOption>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const LogoHome: React.FC<{ className: string }> = ({ className }) => (
  <a href="/">
    <img src="/images/missionbit-logo-horizontal.svg" className={className} />
  </a>
);

const MobileHeaderNav: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStylesMobile();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "mobile-menu"
  });
  return (
    <AppBar
      position="static"
      color="transparent"
      component="nav"
      className={className}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          {...bindTrigger(popupState)}
        >
          <MenuIcon />
        </IconButton>
        <Menu {...bindMenu(popupState)}>
          {commonNav.map(({ text, href }) => (
            <MenuItem key={text} onClick={popupState.close}>
              <Link href={href} color="textPrimary" underline="none">
                {text}
              </Link>
            </MenuItem>
          ))}
        </Menu>
        <LogoHome className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

const HeaderNav: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DesktopHeaderNav className={classes.desktop} />
      <MobileHeaderNav className={classes.mobile} />
    </React.Fragment>
  );
};

export default HeaderNav;
