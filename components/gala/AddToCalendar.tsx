import * as React from "react";
import EventableLogo from "./EventableLogo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useScript from "react-script-hook";

export interface EventableEvent {
  readonly key: string;
  readonly eventId: string;
}

const DEFAULT_EVENT: EventableEvent = {
  key: "5ce8c427fd34ba001ddfe50c",
  eventId: "5def5f83eed98e001c61f0c8",
};

const useStyles = makeStyles({
  logo: {
    height: "1rem",
    width: "1rem",
    marginRight: "0.5rem",
  },
});

const AddToCalendar: React.FC<{ event?: EventableEvent }> = ({ event }) => {
  const { key, eventId } = event ?? DEFAULT_EVENT;
  const classes = useStyles();
  useScript({ src: "https://plugins.eventable.com/eventable.js" });
  return (
    <Button
      href={`https://add.eventable.com/events/${key}/${eventId}/`}
      variant="contained"
      color="secondary"
      target="_blank"
      rel="noopener noreferrer"
      data-key={key}
      data-event={eventId}
      data-style="1"
    >
      <EventableLogo className={classes.logo} />
      <span>Add to Calendar</span>
    </Button>
  );
};

export default AddToCalendar;
