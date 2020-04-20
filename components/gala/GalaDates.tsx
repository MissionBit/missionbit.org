import { CalendarEvent } from "../../vendor/calendar-link";
import absoluteUrl from "../../src/absoluteUrl";
import { timeZone } from "../../src/dates";

export const GalaCalendarEvent: CalendarEvent = {
  title: "Mission Bit Gala 2020",
  start: "2020-11-12T18:00-08:00",
  end: "2020-11-12T22:00-08:00",
  location: "San Francisco, CA",
  url: absoluteUrl("/gala"),
};

export function galaStartEnd(): string {
  const startFormat = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
  });
  const endFormat = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
  });
  const start = Date.parse(GalaCalendarEvent.start);
  const end = Date.parse(GalaCalendarEvent.end);
  return `${startFormat.format(start)}-${endFormat.format(end)}`;
}

export default GalaCalendarEvent;
