import * as React from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import {
  CalendarEvent,
  google,
  outlook,
  yahoo,
  ics,
} from "vendor/calendar-link";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import Menu from "@material-ui/core/Menu";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import Link from "@material-ui/core/Link";
import GoogleLogo from "./brands/GoogleLogo";
import AppleLogo from "./brands/AppleLogo";
import WindowsLogo from "./brands/WindowsLogo";
import OutlookLogo from "./brands/OutlookLogo";
import YahooLogo from "./brands/YahooLogo";

interface CalendarOption {
  key: string;
  title: React.ReactNode;
  eventUrl: (event: CalendarEvent) => string;
}

const CalendarOptions: CalendarOption[] = [
  {
    key: "google",
    title: (
      <>
        <GoogleLogo fontSize="small" /> Google Calendar
      </>
    ),
    eventUrl: google,
  },
  {
    key: "apple",
    title: (
      <>
        <AppleLogo fontSize="small" /> Apple Calendar
      </>
    ),
    eventUrl: ics,
  },
  {
    key: "outlook-desktop",
    title: (
      <>
        <WindowsLogo fontSize="small" /> Outlook Desktop
      </>
    ),
    eventUrl: ics,
  },
  {
    key: "outlook",
    title: (
      <>
        {" "}
        <OutlookLogo fontSize="small" /> Outlook.com
      </>
    ),
    eventUrl: outlook,
  },
  {
    key: "yahoo",
    title: (
      <>
        <YahooLogo fontSize="small" />
        Yahoo Calendar
      </>
    ),
    eventUrl: yahoo,
  },
];

const useStyles = makeStyles({
  logo: {
    height: "1rem",
    width: "1rem",
    marginRight: "0.5rem",
  },
  link: {
    "& svg": {
      verticalAlign: "top",
      marginRight: "0.25rem",
    },
  },
});

const AddToCalendar: React.FC<{ event: CalendarEvent; className?: string }> = ({
  event,
  className,
}) => {
  const classes = useStyles();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "add-to-calendar",
  });
  const closePopup = () => popupState.close();
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={className}
        {...bindTrigger(popupState)}
      >
        <EventAvailableIcon className={classes.logo} />{" "}
        <span>Add to Calendar</span>
      </Button>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {CalendarOptions.map(({ key, eventUrl, title }) => (
          <MenuItem key={key} onClick={closePopup}>
            <Link
              href={eventUrl(event)}
              className={classes.link}
              color="textPrimary"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AddToCalendar;
