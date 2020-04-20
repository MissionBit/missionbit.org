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
