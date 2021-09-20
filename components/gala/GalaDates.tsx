import { CalendarEvent } from "vendor/calendar-link";
import absoluteUrl from "src/absoluteUrl";
import { hourStartEndParts } from "src/dates";

export const galaLocation = {
  "@type": "PostalAddress",
  name: "The Rotunda @ City Hall SF",
  streetAddress: "1 Dr Carlton B Goodlett Pl",
  addressLocality: "San Francisco",
  addressRegion: "CA",
  postalCode: "94102",
};

export const GalaCalendarEvent: CalendarEvent = {
  title: "Mission Bit Gala 2021",
  start: "2021-11-04T18:00-08:00",
  end: "2021-11-04T22:00-08:00",
  location: `${galaLocation.name}, ${galaLocation.streetAddress}, ${galaLocation.addressLocality}, ${galaLocation.addressRegion} ${galaLocation.postalCode}`,
  url: absoluteUrl("/gala"),
};

export function galaStartEnd(): ReturnType<typeof hourStartEndParts> {
  const start = Date.parse(GalaCalendarEvent.start);
  const end = Date.parse(GalaCalendarEvent.end!);
  return hourStartEndParts(start, end);
}

export default GalaCalendarEvent;
