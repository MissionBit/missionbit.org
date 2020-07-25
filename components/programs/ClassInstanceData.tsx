import * as React from "react";
import { hourStartEndParts, CourseDateTimeFormat } from "src/dates";
import Box from "@material-ui/core/Box";

export const CourseSkills = [
  "Unity",
  "C#",
  "3D Game Design",
  "Web Design",
  "HTML",
  "CSS",
  "UI Design",
  "UX Design",
  "Python",
  "Programming",
  "Javascript",
  "Resume Building",
  "Career Preparation",
  "Scratch",
  "Block Coding",
  "Interviewing",
  "p5.js",
  "Javascript",
  "Networking",
  "Cover Letter Writing",
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

const networkingImage = {
  src: require("public/images/program/networking.svg"),
  alt: "Three people standing around talking",
};

const coverLetterImage = {
  src: require("public/images/program/cover-letter.svg"),
  alt: "Image of a cover letter",
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
  web_class: {
    title: "Intro to Web Design",
    skills: ["Web Design", "HTML", "CSS", "UI Design", "UX Design"],
    image: webImage,
    description: (
      <>
        This project-based class combines design and technology to create and
        code our own modern, creative, and thoughtful websites. We’ll discover
        what great user experience is, exercise creative project planning,
        create beautiful visual designs, and bring our designs to life in a
        final interactive website. Beginners welcome!
      </>
    ),
  },
  game_class: {
    title: "Intro to Unity Game Design",
    skills: ["Unity", "C#"],
    image: controllerImage,
    description: (
      <>
        This project-based class combines 3D art and technology to create your
        own unique games sing the Unity platform. We’ll learn the Unity
        framework and develop a game that you and your friends can play by the
        end of the semester. Our goal is to empower students to become creators
        rather than just consumers. We’re excited to see what you create with us
        this fall, beginners welcome!
      </>
    ),
  },
  python_class: {
    title: "Intro to Python",
    skills: ["Python", "Programming"],
    image: controllerImage,
    description: (
      <>
        Come and learn Python in our new class this fall! We’ll start with
        fundamental concepts of programming that can be applied to the study of
        any programming language. Together, we’ll create chat bots, learn
        automation, and work on our final projects at the end of the semester.
        Beginners welcome!
      </>
    ),
  },
  javascript_class: {
    title: "Intro to Javascript",
    skills: ["Javascript", "Programming"],
    image: controllerImage,
    description: (
      <>
        Join us this fall in our latest class! This course is interactive and
        the concepts covered will lay the foundation for using JavaScript in any
        environment. We’ll start off with an introduction to Javascript, move on
        to working on projects based on your personal interests and creativity,
        and finish off the semester with a final project. Beginners welcome!
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
        This is a beginner workshop where students will be able to build a
        portfolio with HTML and CSS. No web design or coding experience
        necessary.
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
        <br></br>
        Taught by Mission Bit Student Ambassadors.
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
        This workshop is for youth looking to develop their skills in
        interviewing. Learn how to tell your story in a professional setting and
        practice your new skills with peers. We're here to help you prepare for
        the next phase of your career- let's nail that interview!
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
        <br></br>
        <br></br>
        Taught by Mission Bit Student Ambassadors.
      </>
    ),
  },
  networking_workshop: {
    title: "Networking 101",
    skills: ["Networking", "Career Preparation"],
    image: networkingImage,
    description: (
      <>
        This workshop is for youth looking to develop their skills in
        networking. Learn how to create a personal brand that represents your
        best self when meeting and communicating with potential colleagues and
        mentors. Come prepared to meet with peers and practice your new
        networking skills.
      </>
    ),
  },
  cover_letter_workshop: {
    title: "Cover Letter Writing Workshop",
    skills: ["Cover Letter Writing", "Career Preparation"],
    image: coverLetterImage,
    description: (
      <>
        Join this workshop to learn the ins and outs of writing cover letters.
        Learn how to make yourself stand out! This workshop works best if you
        take the Resume workshop right before.
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

export const FallDates: ClassDates = {
  registrationDeadline: Date.parse("2020-08-23T20:00:00-07:00"),
  interview: Date.parse("2020-09-02T12:00:00-07:00"),
  demoDay: Date.parse("2020-12-12T13:00:00-07:00"),
};

// function summerClass(
//   course: Course,
//   campus: Campus,
//   formAssemblyId: string
// ): ClassInstance {
//   return {
//     type: "class",
//     course,
//     campus,
//     classDates: SummerDates,
//     meets: (
//       <>
//         Monday, Wednesday, Friday{" "}
//         <Box component="span" display="inline-block">
//           10:30am - 2:30pm
//         </Box>
//       </>
//     ),
//     startDate: "June 15th",
//     endDate: "July 25th",
//     signupUrl: `https://www.tfaforms.com/4804494?tfa_2013=${formAssemblyId}`,
//   };
// }

function fallClassMW(course: Course, campus: Campus): ClassInstance {
  return {
    type: "class",
    course,
    campus,
    classDates: FallDates,
    meets: (
      <>
        Monday, Wednesday{" "}
        <Box component="span" display="inline-block">
          4:00pm - 6:30pm
        </Box>
      </>
    ),
    startDate: "September 14th",
    endDate: "December 12th",
    signupUrl: `https://www.tfaforms.com/4840819`,
  };
}

function fallClassTH(course: Course, campus: Campus): ClassInstance {
  return {
    type: "class",
    course,
    campus,
    classDates: FallDates,
    meets: (
      <>
        Tuesday, Thursday{" "}
        <Box component="span" display="inline-block">
          4:00pm - 6:30pm
        </Box>
      </>
    ),
    startDate: "September 14th",
    endDate: "December 12th",
    signupUrl: `https://www.tfaforms.com/4840819`,
  };
}

// export const SummerClassInstances: ClassOrWorkshopInstance[] = [
//   summerClass(Courses.web_bootcamp, Campuses.online_sf, "tfa_2247"),
//   summerClass(Courses.game_bootcamp, Campuses.online, "tfa_2248"),
//   summerClass(Courses.web_bootcamp, Campuses.online_oakland, "tfa_2245"),
// ];

export const FallClassInstances: ClassOrWorkshopInstance[] = [
  fallClassMW(Courses.web_class, Campuses.online_sf, ""),
  fallClassMW(Courses.game_class, Campuses.online, ""),
  fallClassMW(Courses.python_class, Campuses.online, ""),
  fallClassTH(Courses.web_class, Campuses.online, ""),
  fallClassTH(Courses.game_class, Campuses.online, ""),
  fallClassTH(Courses.javascript_class, Campuses.online, ""),
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
    course: Courses.p5js_workshop,
    dateString: "2020-07-20T16:00:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4837613",
    who: "7th - 12th graders",
  }),
  summerWorkshop({
    course: Courses.beginner_web_workshop,
    dateString: "2020-07-22T15:30:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4836338",
    who: "7th - 12th graders",
  }),
  summerWorkshop({
    course: Courses.careerprep_resume_workshop,
    dateString: "2020-08-04T15:30:00-07:00",
    minutes: 120,
    signupUrl: "https://www.tfaforms.com/4839551",
    who: "16 - 24 year olds",
  }),
  summerWorkshop({
    course: Courses.cover_letter_workshop,
    dateString: "2020-08-06T15:30:00-07:00",
    minutes: 120,
    signupUrl: "https://www.tfaforms.com/4839556",
    who: "16 - 24 year olds",
  }),
  summerWorkshop({
    course: Courses.scratch_window_workshop,
    dateString: "2020-08-12T16:00:00-07:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4838017",
    who: "7th - 12th graders",
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
];
