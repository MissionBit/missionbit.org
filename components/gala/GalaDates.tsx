import { CalendarEvent } from "vendor/calendar-link";
import absoluteUrl from "src/absoluteUrl";
import { hourStartEndParts } from "src/dates";

export const GalaCalendarEvent: CalendarEvent = {
  title: "Mission Bit Gala 2020",
  start: "2020-11-12T18:30-08:00",
  end: "2020-11-12T19:30-08:00",
  location: "Online",
  url: absoluteUrl("/gala"),
};

export function galaStartEnd(): ReturnType<typeof hourStartEndParts> {
  const start = Date.parse(GalaCalendarEvent.start);
  const end = Date.parse(GalaCalendarEvent.end!);
  return hourStartEndParts(start, end);
}

export default GalaCalendarEvent;
