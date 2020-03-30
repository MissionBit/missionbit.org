import * as React from "react";

export interface Course {
  title: React.ReactNode;
  description: React.ReactNode;
}

export enum City {
  SanFrancisco = "San Francisco",
  Oakland = "Oakland",
}

export interface Campus {
  name: React.ReactNode;
  mapUrl: string;
  city: City;
}

export interface ClassInstance {
  course: Course;
  campus: Campus;
  meets: React.ReactNode;
  startDate: string;
  endDate: string;
  signupUrl: string;
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
});

export const Campuses = campusRecord({
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
    course,
    campus,
    meets: "Monday - Friday 9am-2pm, Wednesday 9am-12pm",
    startDate: "June 15th",
    endDate: "June 25th",
    signupUrl: `https://www.tfaforms.com/4804494?tfa_2013=${formAssemblyId}`,
  };
}

export const SummerClassInstances: ClassInstance[] = [
  summerClass(Courses.web_bootcamp, Campuses.ccsf_mission, "tfa_2247"),
  summerClass(Courses.game_bootcamp, Campuses.ccsf_mission, "tfa_2248"),
  summerClass(Courses.app_bootcamp, Campuses.ccsf_mission, "tfa_2261"),
  summerClass(Courses.web_bootcamp, Campuses.college_track_oakland, "tfa_2245"),
];

export default SummerClassInstances;
