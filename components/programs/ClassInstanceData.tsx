import * as React from "react";
import { hourStartEndParts } from "../../src/dates";

export interface Course {
  title: React.ReactNode;
  description: React.ReactNode;
}

export enum City {
  SanFrancisco = "San Francisco",
  Oakland = "Oakland",
  Online = "Online",
}

export interface LocalCampus {
  name: React.ReactNode;
  mapUrl: string;
  city: Exclude<City, typeof City.Online>;
}

type Campus = { name: React.ReactNode; city: typeof City.Online } | LocalCampus;

export interface MeetInstance {
  course: Course;
  campus: Campus;
  meets: React.ReactNode;
  signupUrl: string;
  extra?: React.ReactNode;
}

export interface ClassInstance extends MeetInstance {
  type: "class";
  startDate: string;
  endDate: string;
  classDates: ClassDates;
}

export interface WorkshopInstance extends MeetInstance {
  type: "workshop";
  who: React.ReactNode;
  date: number;
  minutes: number;
}

export type ClassOrWorkshopInstance = ClassInstance | WorkshopInstance;

export interface ClassDates {
  registrationDeadline: number;
  interview: number;
  demoDay: number;
}

function courseRecord<T extends Record<string, Course>>(x: T): T {
  return x;
}

function campusRecord<T extends Record<string, Campus>>(x: T): T {
  return x;
}

export const Courses = courseRecord({
  web_bootcamp: {
    title: "Web Design Bootcamp",
    description: (
      <>
        This course is specifically designed for students with little to no
        coding experience. Students will learn HTML, CSS, and JavaScript, as
        well as some core programming concepts through project based
        instruction. Throughout the semester, students will build 3 websites: an
        adventure game, a portfolio, and a final project of their choice.
      </>
    ),
  },
  game_bootcamp: {
    title: "Unity Game Design Bootcamp",
    description: (
      <>
        In this class, students will learn the fundamentals of game design. They
        will learn how to create a 3D game in Unity and script in C#. No
        previous experience required.
      </>
    ),
  },
  app_bootcamp: {
    title: "Android App Design Bootcamp",
    description: (
      <>
        In this class, students will learn the Android App Design. They will
        learn how to program in Java and make their own app on Android phones.
        Some prior experience in coding is necessary.
      </>
    ),
  },
  beginner_unity_workshop: {
    title: "Beginner Unity Game Design Workshop",
    description: (
      <>
        This is an introductory workshop facilitated by Mission Bit Student
        Ambassadors. No game design or coding experience necessary.
      </>
    ),
  },
  beginner_web_workshop: {
    title: "Beginner Web Design Workshop",
    description: (
      <>
        This is an introductory workshop where students will be able to build a
        portfolio. No web design or coding experience necessary.
      </>
    ),
  },
});

export const Campuses = campusRecord({
  online: {
    name: "Online",
    city: City.Online,
  },
  online_sf: {
    name: "Online (For SF Students)",
    city: City.Online,
  },
  online_oakland: {
    name: "Online (For Oakland Students)",
    city: City.Online,
  },
  ccsf_mission: {
    name: "CCSF Mission Campus",
    city: City.SanFrancisco,
    mapUrl: "https://goo.gl/maps/SkcKNk4FpfcTLwxy8",
  },
  college_track_oakland: {
    name: "College Track Oakland",
    city: City.Oakland,
    mapUrl: "https://goo.gl/maps/sqaDkSqmYtfnkQ4u6",
  },
});

export const SummerDates: ClassDates = {
  registrationDeadline: Date.parse("2020-05-24T20:00:00-07:00"),
  interview: Date.parse("2020-05-27T12:00:00-07:00"),
  demoDay: Date.parse("2020-07-25T13:00:00-07:00"),
};

function summerClass(
  course: Course,
  campus: Campus,
  formAssemblyId: string
): ClassInstance {
  return {
    type: "class",
    course,
    campus,
    classDates: SummerDates,
    meets: "Monday, Wednesday, Friday 10:30am - 2:30pm",
    startDate: "June 15th",
    endDate: "June 25th",
    signupUrl: `https://www.tfaforms.com/4804494?tfa_2013=${formAssemblyId}`,
  };
}

export const SummerClassInstances: ClassOrWorkshopInstance[] = [
  summerClass(Courses.web_bootcamp, Campuses.online_sf, "tfa_2247"),
  summerClass(Courses.game_bootcamp, Campuses.online, "tfa_2248"),
  summerClass(Courses.web_bootcamp, Campuses.online_oakland, "tfa_2245"),
];

function summerWorkshop({
  course,
  dateString,
  minutes,
  signupUrl,
  extra,
}: {
  course: Course;
  dateString: string;
  minutes: number;
  signupUrl: string;
  extra?: React.ReactNode;
}): WorkshopInstance {
  const date = Date.parse(dateString);
  const parts = hourStartEndParts(date, date + minutes * 60 * 1000);
  return {
    type: "workshop",
    course,
    campus: Campuses.online,
    meets: `${parts.date} ${parts.time}`,
    who: "Grades 7th - 12th",
    extra,
    signupUrl,
    date,
    minutes: 90,
  };
}

export const SpringClassInstances: ClassOrWorkshopInstance[] = [
  summerWorkshop({
    course: Courses.beginner_unity_workshop,
    dateString: "2020-05-06T15:30:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4821878",
    extra: (
      <>
        Join us early from <strong>3pm - 3:30pm</strong> for a prepping session
        (includes help with downloading Unity and the game kit).
      </>
    ),
  }),
  summerWorkshop({
    course: Courses.beginner_web_workshop,
    dateString: "2020-05-07T15:30:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4821550",
  }),
];
