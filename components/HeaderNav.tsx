import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";
import CloseIcon from "@material-ui/icons/Close";

interface NavMenuChoice {
  text: string;
  href: string;
  buttonProps?: ButtonProps;
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
  { text: "Home", href: "/" },
  {
    text: "About",
    href: "/about",
  },
  { text: "Programs", href: "/programs" },
  { text: "Events", href: "/events" },
  { text: "Get involved", href: "/get-involved" },
  {
    text: "Donate",
    href: "https://donate.missionbit.org/",
    buttonProps: {
      variant: "outlined",
      color: "primary",
    },
  },
  {
    text: "Get updates",
    href: "#get-updates",
    buttonProps: {
      variant: "outlined",
      color: "secondary",
      onClick: focusGetUpdates,
    },
  },
];

const useStyles = makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const useStylesMobile = makeStyles((theme) => ({
  logo: {
    position: "relative",
    maxHeight: "2.75rem",
    top: "1px",
  },
  toolbar: {
    justifyContent: "space-between",
    padding: theme.spacing(1.5, 2.5),
  },
  button: {
    marginLeft: 0,
    marginRight: theme.spacing(-1.5),
  },
  popoverPaper: {
    backgroundColor: brand.indigo,
    borderRadius: 0,
    boxShadow: "none",
    maxWidth: "100%",
    maxHeight: "100%",
    minWidth: "100%",
    minHeight: "100%",
  },
  menuItem: {
    ...theme.typography.h3,
    fontSize: theme.typography.pxToRem(36),
    padding: theme.spacing(0.75, 4),
  },
  closeMenuItem: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  closeMenuButton: {
    color: theme.palette.common.white,
  },
  link: {
    color: theme.palette.common.white,
  },
}));

const useStylesDesktop = makeStyles((theme) => ({
  ul: {
    display: "flex",
    listStyleType: "none",
    alignItems: "center",
    padding: "1rem",
    "& .MuiButton-root": {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(15),
    },
    "& .MuiButton-text": {
      color: brand.navGray,
    },
    "& > li": {
      marginRight: "2em",
      "&:first-child": {
        flexGrow: 1,
        marginRight: 0,
      },
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  logo: {
    position: "relative",
    maxHeight: "3rem",
    top: "1px",
  },
}));

const DesktopHeaderNav: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStylesDesktop();
  return (
    <nav className={className}>
      <ul className={classes.ul}>
        <li>
          <LogoHome className={classes.logo} />
        </li>
        {commonNav.map(({ text, href, buttonProps }) => (
          <li key={href}>
            <Button href={href} {...(buttonProps ?? {})}>
              {text}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const LogoHome: React.FC<{ className: string }> = ({ className }) => (
  <a href="/">
    <img
      src={require("public/images/missionbit-logo-horizontal.svg")}
      alt="Mission Bit logo"
      className={className}
    />
  </a>
);

const MobileHeaderNav: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStylesMobile();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "mobile-menu",
  });
  return (
    <AppBar
      position="static"
      color="transparent"
      component="nav"
      className={className}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <LogoHome className={classes.logo} />
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.button}
          {...bindTrigger(popupState)}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          {...bindMenu(popupState)}
          anchorReference="anchorPosition"
          anchorPosition={{ left: 0, top: 0 }}
          marginThreshold={0}
          classes={{ paper: classes.popoverPaper }}
        >
          <div className={classes.closeMenuItem}>
            <IconButton
              size="medium"
              aria-label="Close"
              title="Close"
              className={classes.closeMenuButton}
              onClick={popupState.close}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
          {commonNav.map(({ text, href }) => (
            <MenuItem
              key={text}
              onClick={popupState.close}
              classes={{ root: classes.menuItem }}
            >
              <Link
                href={href}
                color="textPrimary"
                underline="none"
                classes={{ root: classes.link }}
              >
                {text}
              </Link>
            </MenuItem>
          ))}
        </Menu>
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
