import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
  bindPopover,
  bindHover,
  PopupState,
} from "material-ui-popup-state/hooks";
import Popover from "material-ui-popup-state/HoverPopover";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";
import CloseIcon from "@material-ui/icons/Close";
import { Collapse } from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "./icons/ExpandMore";
import logoSrc from "public/images/missionbit-logo-horizontal.svg";
interface NavMenuChoice {
  readonly text: string;
  readonly href: string;
  readonly buttonProps?: ButtonProps;
}

interface MainNavMenuChoice extends NavMenuChoice {
  readonly subMenu?: readonly NavMenuChoice[];
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

const commonNav: readonly MainNavMenuChoice[] = [
  { text: "Home", href: "/" },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Programs",
    href: "/programs",
    subMenu: [
      {
        text: "Classes",
        href: "/programs/classes",
      },
      {
        text: "Workshops",
        href: "/programs/workshops",
      },
      {
        text: "Career Prep",
        href: "/programs/career-prep",
      },
      {
        text: "Code at Home",
        href: "/programs/code-at-home",
      },
    ],
  },
  { text: "Events", href: "/events" },
  { text: "Get involved", href: "/get-involved" },
  {
    text: "Donate",
    href: "/donate",
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
  expand: {
    marginLeft: "1em",
    fontSize: theme.typography.pxToRem(17),
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  subNavLink: {
    display: "flex",
    alignItems: "center",
  },
  subNav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  subNavMenuItem: {
    ...theme.typography.h3,
    fontSize: theme.typography.pxToRem(36),
    padding: theme.spacing(0.75, 2),
    display: "flex",
  },
  subNavUl: {
    padding: 0,
  },
  wrapper: {
    paddingTop: theme.spacing(1),
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
  subMenu: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
    alignItems: "center",
    padding: "0 1rem",
    marginTop: 0,
    "& .MuiButton-root": {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(15),
    },
    "& .MuiButton-text": {
      color: brand.navGray,
    },
  },
  menuPopover: {
    borderTop: "0",
  },
  logo: {
    position: "relative",
    maxHeight: "3rem",
    top: "1px",
  },
}));

const MobileSubNav: React.FC<
  MainNavMenuChoice & {
    readonly popupState: PopupState;
    readonly subMenu: readonly NavMenuChoice[];
  }
> = ({ text, href, subMenu, popupState }) => {
  const classes = useStylesMobile();
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (!popupState.isOpen) {
      setExpanded(false);
    }
  }, [popupState.isOpen]);
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setExpanded((expanded) => !expanded);
    },
    []
  );
  return (
    <MenuItem
      key={text}
      classes={{ root: clsx(classes.menuItem, classes.subNav) }}
    >
      <Link
        onClick={handleOnClick}
        href={href}
        color="textPrimary"
        underline="none"
        classes={{ root: clsx(classes.link, classes.subNavLink) }}
      >
        {text}
        <ExpandMoreIcon
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
        />
      </Link>
      <Collapse
        in={expanded}
        component="ul"
        className={classes.subNavUl}
        classes={{ wrapper: classes.wrapper }}
      >
        {subMenu.map((nav) => (
          <MenuItem key={nav.text} classes={{ root: classes.subNavMenuItem }}>
            <Link
              onClick={popupState.close}
              href={nav.href}
              color="textPrimary"
              underline="none"
              classes={{ root: classes.link }}
            >
              {nav.text}
            </Link>
          </MenuItem>
        ))}
      </Collapse>
    </MenuItem>
  );
};

const SubNavButton: React.FC<MainNavMenuChoice> = ({
  text,
  href,
  buttonProps,
  subMenu,
}) => {
  const classes = useStylesDesktop();
  const popupState = usePopupState({
    variant: "popover",
    popupId: `desktop-menu${href.replace("/", "-")}`,
  });
  return (
    <>
      <Button href={href} {...bindHover(popupState)} {...(buttonProps ?? {})}>
        {text}
      </Button>
      <Popover
        {...bindPopover(popupState)}
        PaperProps={{ square: true, variant: "outlined" }}
        classes={{ paper: classes.menuPopover }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        disableRestoreFocus
      >
        <ul className={classes.subMenu}>
          {(subMenu ?? []).map((nav) => (
            <li key={nav.href}>
              <Button href={nav.href} {...(nav.buttonProps ?? {})}>
                {nav.text}
              </Button>
            </li>
          ))}
        </ul>
      </Popover>
    </>
  );
};

const DesktopHeaderNav: React.FC<{ className: string }> = ({ className }) => {
  const classes = useStylesDesktop();
  return (
    <nav className={className}>
      <ul className={classes.ul}>
        <li>
          <LogoHome className={classes.logo} />
        </li>
        {commonNav.map((nav) => (
          <li key={nav.href}>
            {nav.subMenu !== undefined ? (
              <SubNavButton {...nav} />
            ) : (
              <Button href={nav.href} {...(nav.buttonProps ?? {})}>
                {nav.text}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const LogoHome: React.FC<{ className: string }> = ({ className }) => (
  <a href="/">
    <img src={logoSrc.src} alt="Mission Bit logo" className={className} />
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
          {commonNav.map(({ subMenu, ...nav }) =>
            subMenu !== undefined ? (
              <MobileSubNav
                key={nav.text}
                {...nav}
                subMenu={subMenu}
                popupState={popupState}
              />
            ) : (
              <MenuItem
                key={nav.text}
                onClick={popupState.close}
                classes={{ root: classes.menuItem }}
              >
                <Link
                  href={nav.href}
                  color="textPrimary"
                  underline="none"
                  classes={{ root: classes.link }}
                >
                  {nav.text}
                </Link>
              </MenuItem>
            )
          )}
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
