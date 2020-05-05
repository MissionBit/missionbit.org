export const timeZone: string = "America/Los_Angeles";

export const LongDateTimeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone,
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
});

export const LongDateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone,
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const MediumDateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone,
  year: "numeric",
  month: "long",
  day: "numeric",
});

export const ShortDateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone,
  year: "2-digit",
  month: "numeric",
  day: "numeric",
});

function dropWhile<T>(collection: T[], predicate: (x: T) => boolean): T[] {
  for (let i = 0; i < collection.length; i++) {
    if (!predicate(collection[i])) {
      return collection.slice(i);
    }
  }
  return [];
}

function dropRightWhile<T>(collection: T[], predicate: (x: T) => boolean): T[] {
  for (let i = collection.length; i > 0; i--) {
    if (!predicate(collection[i - 1])) {
      return collection.slice(0, i);
    }
  }
  return [];
}

function span<T>(collection: T[], predicate: (x: T) => boolean): [T[], T[]] {
  const suffix = dropWhile(collection, predicate);
  return [collection.slice(0, collection.length - suffix.length), suffix];
}

export function hourStartEndParts(
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
  const endHour = dropWhile(LongDateTimeFormat.formatToParts(end), notHour);
  const dateParts: string[] = dropRightWhile(startDate, notYear).map(getValue);
  const timeParts: string[] = dropRightWhile(startHour, notDayPeriod).map(
    getValue
  );
  timeParts.push(" - ", ...endHour.map(getValue));
  return {
    date: dateParts.join(""),
    time: timeParts.join("").replace(/:00/g, ""),
  };
}
