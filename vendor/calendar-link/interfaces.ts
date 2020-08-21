import dayjs from "dayjs";

export interface CalendarEvent {
  title: string;
  start: string;
  end?: string;
  duration?: [number, dayjs.UnitType];
  allDay?: boolean;
  description?: string;
  location?: string;
  busy?: boolean;
  guests?: string[];
  url?: string;
}

export interface NormalizedCalendarEvent
  extends Omit<CalendarEvent, "start" | "end" | "duration"> {
  startUtc: dayjs.Dayjs;
  endUtc: dayjs.Dayjs;
}

export interface Google {
  action: string;
  text: string;
  dates: string;
  details?: string;
  location?: string;
  trp?: boolean;
  sprop?: string;
  add?: string;
  src?: string;
  recur?: string;
}

export interface Outlook {
  path: string;
  rru: string;
  startdt: string;
  enddt: string;
  subject: string;
  allday?: boolean;
  body?: string;
  location?: string;
}

export interface Yahoo {
  v: number;
  title: string;
  st: string;
  et: string;
  desc?: string;
  in_loc?: string;
}
