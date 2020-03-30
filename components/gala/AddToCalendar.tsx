import * as React from "react";

export interface EventableEvent {
  readonly key: string;
  readonly eventId: string;
}

const DEFAULT_EVENT: EventableEvent = {
  key: "5ce8c427fd34ba001ddfe50c",
  eventId: "5def5f83eed98e001c61f0c8",
};

const AddToCalendar: React.FC<{ event?: EventableEvent }> = ({ event }) => {
  const { key, eventId } = event ?? DEFAULT_EVENT;
  return (
    <a
      href={`https://add.eventable.com/events/${key}/${eventId}/`}
      className="eventable-link"
      target="_blank"
      rel="noopener noreferrer"
      data-key={key}
      data-event={eventId}
      data-style="1"
    >
      <img
        className="eventable-img"
        src="https://plugins.eventable.com/assets/eventable-logo.svg"
      />
      <span>Add to Calendar</span>
    </a>
  );
};

export default AddToCalendar;
