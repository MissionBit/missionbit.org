import * as React from "react";

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
}

export interface ClassInstance extends MeetInstance {
  type: "class";
  startDate: string;
  endDate: string;
}

export interface WorkshopInstance extends MeetInstance {
  type: "workshop";
}

export type ClassOrWorkshopInstance = ClassInstance | WorkshopInstance;

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
});

export const Campuses = campusRecord({
  online: {
    name: "Online",
    city: City.Online,
  },
  online_sf: {
    name: "Online (For San Francisco Students)",
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

function summerClass(
  course: Course,
  campus: Campus,
  formAssemblyId: string
): ClassInstance {
  return {
    type: "class",
    course,
    campus,
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
export const SummerRegistrationDeadline: React.FC<{}> = () => (
  <>Sunday, May 24, 2020 at 8pm</>
);
export const SummerInterviewDate: React.FC<{}> = () => (
  <>Wednesday, May 27th, 2020</>
);
export const SummerDemoDayDate: React.FC<{}> = () => (
  <>Saturday, July 25th, 2020</>
);

export const SpringClassInstances: ClassOrWorkshopInstance[] = [
  {
    type: "workshop",
    course: Courses.beginner_unity_workshop,
    campus: Campuses.online,
    meets: "Thursday April 23rd, 3:30pm - 5pm PDT",
    signupUrl: "https://www.tfaforms.com/4816324",
  },
];
