import { CalendarEvent } from "vendor/calendar-link";
import absoluteUrl from "src/absoluteUrl";
import { hourStartEndParts } from "src/dates";

export const BridgeCalendarEvent: CalendarEvent = {
  title: "Bridging the Youth Tech Divide 2021",
  start: "2021-08-11T13:00-07:00",
  end: "2021-08-11T16:00-07:00",
  location: "Online",
  url: absoluteUrl("/bridge"),
};

export function bridgeStartEnd(): ReturnType<typeof hourStartEndParts> {
  const start = Date.parse(BridgeCalendarEvent.start);
  const end = Date.parse(BridgeCalendarEvent.end!);
  return hourStartEndParts(start, end);
}

export default BridgeCalendarEvent;
