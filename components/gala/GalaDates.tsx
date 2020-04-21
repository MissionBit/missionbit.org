import { CalendarEvent } from "../../vendor/calendar-link";
import absoluteUrl from "../../src/absoluteUrl";
import { LongDateTimeFormat } from "../../src/dates";
import _ from "lodash";

export const GalaCalendarEvent: CalendarEvent = {
  title: "Mission Bit Gala 2020",
  start: "2020-11-12T18:00-08:00",
  end: "2020-11-12T22:00-08:00",
  location: "San Francisco, CA",
  url: absoluteUrl("/gala"),
};

function span<T>(collection: T[], predicate: (x: T) => boolean): [T[], T[]] {
  const suffix = _.dropWhile(collection, predicate);
  return [collection.slice(0, collection.length - suffix.length), suffix];
}

function hourStartEndParts(
  start: number,
  end: number
): { date: string; time: string } {
  const notHour = ({ type }: Intl.DateTimeFormatPart) => type !== "hour";
  const notYear = ({ type }: Intl.DateTimeFormatPart) => type !== "year";
  const notDayPeriod = ({ type }: Intl.DateTimeFormatPart) =>
    type !== "dayPeriod";
  const getValue = ({ value }: Intl.DateTimeFormatPart) => value;
  const [startDate, startHour] = span(
    LongDateTimeFormat.formatToParts(start),
    notHour
  );
  const endHour = _.dropWhile(LongDateTimeFormat.formatToParts(end), notHour);
  const dateParts: string[] = _.dropRightWhile(startDate, notYear).map(
    getValue
  );
  const timeParts: string[] = _.dropRightWhile(startHour, notDayPeriod).map(
    getValue
  );
  timeParts.push(" - ", ...endHour.map(getValue));
  return {
    date: dateParts.join(""),
    time: timeParts.join("").replace(/:00/g, ""),
  };
}

export function galaStartEnd() {
  const start = Date.parse(GalaCalendarEvent.start);
  const end = Date.parse(GalaCalendarEvent.end);
  return hourStartEndParts(start, end);
}

export default GalaCalendarEvent;
