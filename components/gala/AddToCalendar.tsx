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
} from "../../vendor/calendar-link";
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
        <GoogleLogo
          fontSize="small"
          style={{ verticalAlign: "top", marginRight: "0.25rem" }}
        />{" "}
        Google Calendar
      </>
    ),
    eventUrl: google,
  },
  {
    key: "apple",
    title: (
      <>
        <AppleLogo
          fontSize="small"
          style={{ verticalAlign: "top", marginRight: "0.25rem" }}
        />{" "}
        Apple Calendar
      </>
    ),
    eventUrl: ics,
  },
  {
    key: "outlook-desktop",
    title: (
      <>
        <WindowsLogo
          fontSize="small"
          style={{ verticalAlign: "top", marginRight: "0.25rem" }}
        />{" "}
        Outlook Desktop
      </>
    ),
    eventUrl: ics,
  },
  {
    key: "outlook",
    title: (
      <>
        {" "}
        <OutlookLogo
          fontSize="small"
          style={{ verticalAlign: "top", marginRight: "0.25rem" }}
        />{" "}
        Outlook.com
      </>
    ),
    eventUrl: outlook,
  },
  {
    key: "yahoo",
    title: (
      <>
        <YahooLogo
          fontSize="small"
          style={{ verticalAlign: "top", marginRight: "0.25rem" }}
        />
        Yahoo Calendar
      </>
    ),
    eventUrl: yahoo,
  },
];

const DEFAULT_EVENT: CalendarEvent = {
  title: "Mission Bit Gala 2020",
  start: "2020-11-12T18:00-08:00",
  end: "2020-11-12T22:00-08:00",
  location: "San Francisco, CA",
  url: "https://www.missionbit.org/gala/",
};

const useStyles = makeStyles({
  logo: {
    height: "1rem",
    width: "1rem",
    marginRight: "0.5rem",
  },
});

const AddToCalendar: React.FC<{ event?: CalendarEvent }> = ({
  event = DEFAULT_EVENT,
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
