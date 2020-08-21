import { CalendarEvent } from "vendor/calendar-link";
import absoluteUrl from "src/absoluteUrl";
import { hourStartEndParts } from "src/dates";

export const BridgeCalendarEvent: CalendarEvent = {
  title: "Bridging the Youth Tech Divide 2020",
  start: "2020-08-05T13:00-07:00",
  end: "2020-08-05T17:00-07:00",
  location: "Online",
  url: absoluteUrl("/bridge"),
};

export function bridgeStartEnd() {
  const start = Date.parse(BridgeCalendarEvent.start);
  const end = Date.parse(BridgeCalendarEvent.end!);
  return hourStartEndParts(start, end);
}

export default BridgeCalendarEvent;
