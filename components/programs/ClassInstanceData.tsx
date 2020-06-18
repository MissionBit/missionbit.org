import * as React from "react";
import { hourStartEndParts, CourseDateTimeFormat } from "src/dates";
import Box from "@material-ui/core/Box";

export const CourseSkills = [
  "Unity",
  "C#",
  "Web Design",
  "HTML",
  "CSS",
  "Resume Building",
  "Career Preparation",
  "Scratch",
  "Block Coding",
  "Interviewing",
  "p5.js",
  "Javascript",
] as const;
export type CourseSkill = typeof CourseSkills[number];

const webImage = {
  src: require("public/images/program/web.svg"),
  alt: "Image of a terminal window",
};

const controllerImage = {
  src: require("public/images/program/controller.svg"),
  alt: "Image of a game controller",
};

const resumeImage = {
  src: require("public/images/program/resume.svg"),
  alt: "Image of a resume",
};

const hackWindowImage = {
  src: require("public/images/program/hack-window.jpg"),
  alt: "Image of an open window",
};

const scratchCatImage = {
  src: require("public/images/program/scratch-cat.svg"),
  alt: "Image of a cat",
};

const videoSensingImage = {
  src: require("public/images/program/video-sensing.jpg"),
  alt: "Image of a couch with eyes",
};

const interviewingImage = {
  src: require("public/images/program/interviewing.svg"),
  alt: "Two people at a table",
};

const p5jsImage = {
  src: require("public/images/program/p5js.svg"),
  alt: "p5.js logo",
};

export interface Course {
  title: React.ReactNode;
  description: React.ReactNode;
  skills: CourseSkill[];
  image: { src: string; alt: string };
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
  buttonExtra?: React.ReactNode;
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
    skills: ["Web Design", "HTML", "CSS"],
    image: webImage,
    description: (
      <>
        This course allows students to explore website design techniques using
        HTML, CSS, and design thinking. Students will learn about user
        experience and user interfaces to make creative and thoughtful websites.
        This class is suitable for beginners.
      </>
    ),
  },
  game_bootcamp: {
    title: "Unity Game Design Bootcamp",
    skills: ["Unity", "C#"],
    image: controllerImage,
    description: (
      <>
        This course opens up the world of gaming and places it at our students’
        fingertips. Students will learn about the Unity platform, how to write
        scripts in C#, and make awesome games in 3D. This class is suitable for
        beginners.
      </>
    ),
  },
  beginner_unity_workshop: {
    title: "Beginner Unity Game Design Workshop",
    skills: ["Unity"],
    image: controllerImage,
    description: (
      <>
        This is an introductory workshop facilitated by Mission Bit Student
        Ambassadors. No game design or coding experience necessary.
      </>
    ),
  },
  beginner_web_workshop: {
    title: "Beginner Web Design Workshop",
    skills: ["Web Design", "HTML", "CSS"],
    image: webImage,
    description: (
      <>
        This is an introductory workshop where students will be able to build a
        portfolio. No web design or coding experience necessary.
      </>
    ),
  },
  careerprep_resume_workshop: {
    title: "Resume Building Workshop",
    skills: ["Resume Building", "Career Preparation"],
    image: resumeImage,
    description: (
      <>
        Come to this workshop empty handed and leave with a full resume! Learn
        the do’s and don’ts of resume writing and turn your professional
        experiences into strengths that will allow you to shine.
      </>
    ),
  },
  scratch_window_workshop: {
    title: "Hack Your Window with Scratch",
    skills: ["Scratch", "Block Coding"],
    image: hackWindowImage,
    description: (
      <>
        In this hands-on workshop, we’ll combine art and technology to create
        and code our own interactive stories with Scratch. We’ll be exploring
        the “Hack Your Window” challenge to build projects that let you
        creatively reimagine your surroundings through the lens of Mission Bit’s
        values. We’ll begin with a quick intro to creative coding and Scratch,
        plan our ideas together, then spend time creating our projects and
        experimenting with code. We’ll end by sharing ideas and questions and
        resources to continue learning more. Beginner coders welcome! (Hack Your
        Window idea and photo credit to{" "}
        <a href="https://hackart.eduard.cat/"> HackArt</a>.)
      </>
    ),
  },
  scratch_animation_workshop: {
    title: "Scratch Animation Workshop",
    skills: ["Scratch", "Block Coding"],
    image: scratchCatImage,
    description: (
      <>
        Come to this workshop and learn how to make your own cartoon in Scratch
        with the power of coding. Personalize your skit with your own recorded
        voice and hand drawn character, whilst learning about the vast world of
        animation.
      </>
    ),
  },
  video_sensing_workshop: {
    title: "Video Sensing with Scratch",
    skills: ["Scratch", "Block Coding"],
    image: videoSensingImage,
    description: (
      <>
        In this hands-on workshop, you'll combine the physical and digital
        worlds with Scratch Video sensing to create dynamic projects that
        respond to the world around you. We'll begin with a quick intro to
        creative coding and Scratch, plan our ideas together, then spend time
        creating our projects and experimenting with video-sensing code. We'll
        end by sharing ideas and questions and resources to continue learning
        more. Beginner coders welcome!
        <br></br>
        <br></br>
        Please note that this workshop requires a computer with a webcam.
      </>
    ),
  },
  interviewing_workshop: {
    title: "Interviewing 101",
    skills: ["Interviewing", "Career Preparation"],
    image: interviewingImage,
    description: (
      <>
        In this hands-on workshop, you'll combine the physical and digital
        worlds with Scratch Video sensing to create dynamic projects that
        respond to the world around you. We'll begin with a quick intro to
        creative coding and Scratch, plan our ideas together, then spend time
        creating our projects and experimenting with video-sensing code. We'll
        end by sharing ideas and questions and resources to continue learning
        more. Beginner coders welcome!
        <br></br>
        <br></br>
        Please note that this workshop requires a computer with a webcam.
      </>
    ),
  },
  p5js_workshop: {
    title: "Coding with p5.js",
    skills: ["p5.js", "Javascript"],
    image: p5jsImage,
    description: (
      <>
        Join our workshop to learn about p5.js, a fun Javascript library made
        accessible to everyone, especially beginners! In this workshop, we’ll
        explore the basics of text-based coding and specific elements of p5.js
        while getting creative with individual projects.
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
    name: "Online (SF Students)",
    city: City.Online,
  },
  online_oakland: {
    name: "Online (Oakland Students)",
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
  registrationDeadline: Date.parse("2020-05-14T20:00:00-07:00"),
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
    meets: (
      <>
        Monday, Wednesday, Friday{" "}
        <Box component="span" display="inline-block">
          10:30am - 2:30pm
        </Box>
      </>
    ),
    startDate: "June 15th",
    endDate: "July 25th",
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
  buttonExtra,
  who = "Grades 7th - 12th",
}: {
  course: Course;
  dateString: string;
  minutes: number;
  signupUrl: string;
  buttonExtra?: React.ReactNode;
  extra?: React.ReactNode;
  who?: React.ReactNode;
}): WorkshopInstance {
  const date = Date.parse(dateString);
  const parts = hourStartEndParts(date, date + minutes * 60 * 1000, {
    format: CourseDateTimeFormat,
    ordinalDay: true,
  });
  return {
    type: "workshop",
    course,
    campus: Campuses.online,
    meets: (
      <>
        {parts.date}{" "}
        <Box component="span" display="inline-block">
          {parts.time}
        </Box>
      </>
    ),
    who,
    extra,
    buttonExtra,
    signupUrl,
    date,
    minutes,
  };
}

export const SpringClassInstances: ClassOrWorkshopInstance[] = [
  summerWorkshop({
    course: Courses.video_sensing_workshop,
    dateString: "2020-06-24T16:00:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4833176",
    who: "7th - 12th graders",
  }),
  summerWorkshop({
    course: Courses.p5js_workshop,
    dateString: "2020-06-29T16:00:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4833176",
    who: "7th - 12th graders",
  }),
  summerWorkshop({
    course: Courses.interviewing_workshop,
    dateString: "2020-07-01T15:30:00-07:00",
    minutes: 120,
    signupUrl: "https://www.tfaforms.com/4833569",
    who: "16 - 24 year olds",
    buttonExtra: <>Only 10 spots available!</>,
  }),
  // summerWorkshop({
  //   course: Courses.careerprep_resume_workshop,
  //   dateString: "2020-05-21T15:30:00-07:00",
  //   minutes: 120,
  //   signupUrl: "https://www.tfaforms.com/4824976",
  //   who: "16 - 24 year olds",
  //   buttonExtra: <>Only 10 spots available!</>,
  // }),
  // summerWorkshop({
  //   course: Courses.scratch_animation_workshop,
  //   dateString: "2020-05-28T15:30:00-07:00",
  //   minutes: 90,
  //   signupUrl: "https://www.tfaforms.com/4827761",
  //   who: "7th - 12th graders",
  // }),
  // summerWorkshop({
  //   course: Courses.scratch_window_workshop,
  //   dateString: "2020-06-10T16:00:00-07:00",
  //   minutes: 90,
  //   signupUrl: "https://www.tfaforms.com/4827910",
  //   who: "7th - 12th graders",
  // }),
  // summerWorkshop({
  //   course: Courses.beginner_unity_workshop,
  //   dateString: "2020-05-06T15:30:00-07:00",
  //   minutes: 90,
  //   signupUrl: "https://www.tfaforms.com/4821878",
  //   extra: (
  //     <>
  //       Join us early from <strong>3pm - 3:30pm</strong> for a prepping session
  //       (includes help with downloading Unity and the game kit).
  //     </>
  //   ),
  // }),
  // summerWorkshop({
  //   course: Courses.beginner_web_workshop,
  //   dateString: "2020-05-07T15:30:00-07:00",
  //   minutes: 90,
  //   signupUrl: "https://www.tfaforms.com/4821550",
  // }),
];
