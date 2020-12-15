import * as React from "react";
import { hourStartEndParts, CourseDateTimeFormat } from "src/dates";
import Box from "@material-ui/core/Box";

export const CourseSkills = [
  "Unity",
  "C#",
  "3D Game Design",
  "Virtual Reality",
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
  "JavaScript",
  "Networking",
  "Cover Letter Writing",
  "Tech Sales",
  "Logos",
  "Color Schemes",
  "Social Media",
  "Web Design",
  "Wix",
] as const;
export type CourseSkill = typeof CourseSkills[number];

export const RegistrationActions = [
  "Student Application",
  "Apply",
  "Register",
] as const;
export type RegistrationAction = typeof RegistrationActions[number];

const webImage = {
  src: require("public/images/program/web.svg"),
  alt: "Image of a terminal window",
};

const web2Image = {
  src: require("public/images/program/web2.svg"),
  alt: "Image of a web window",
};

const web3Image = {
  src: require("public/images/program/web-teamwork.svg"),
  alt: "Image of a web window with hands helping assmeble it",
};

const controllerImage = {
  src: require("public/images/program/controller.svg"),
  alt: "Image of a game controller",
};

const unity2Image = {
  src: require("public/images/program/unity2.svg"),
  alt: "Image of a game controller with pac man eating a heart",
};

// const unityGala = {
//   src: require("public/images/program/unity-gala.svg"),
//   alt:
//     "Image of a game controller with pac man eating a heart and a banner at the top saying this class was sponsored by Unity",
// };

// const pythonImage = {
//   src: require("public/images/program/python.svg"),
//   alt: "Image of the python logo",
// };

const python2Image = {
  src: require("public/images/program/python2.svg"),
  alt: "Image of the python logo",
};

const jsImage = {
  src: require("public/images/program/js.svg"),
  alt: "Image of a screen that says javascript on it",
};

const vrImage = {
  src: require("public/images/program/vr-girl.svg"),
  alt: "Image of a girl with a VR headset on",
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

const sdrImage = {
  src: require("public/images/program/sdr.svg"),
  alt:
    "Image of a girl wearing over ear headphones with sales books around her",
};

const designBusinessImage = {
  src: require("public/images/program/design-business.svg"),
  alt: "Image of moutains and a sun behind them",
};

const wixImage = {
  src: require("public/images/program/wix.jpg"),
  alt: "Image of hands on a keyboard with a green background",
};

const magic8BallImage = {
  src: require("public/images/program/magic-8ball.jpg"),
  alt: "Image of hands on a keyboard with a green background",
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
  buttonText: RegistrationAction;
}

export interface ClassInstance extends MeetInstance {
  type: "class";
  startDate: string;
  endDate: string;
  classDates: Pick<ClassDates, "registrationDeadline">;
}

export interface WorkshopInstance extends MeetInstance {
  type: "workshop";
  who: React.ReactNode;
  date: number;
  minutes: number;
}

export type ClassOrWorkshopInstance = ClassInstance | WorkshopInstance;

// Naming is hard, it might make more sense to call this one ClassDates
// and have another one for the classes with demo days, e.g. ProgrammingClassDates,
// but that would require more changes to other places
export interface BaseClassDates {
  registrationDeadline: number;
  interview: number;
}

export interface ClassDates extends BaseClassDates {
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
    title: "Intro to Web Design",
    skills: ["Web Design", "HTML", "CSS", "UI Design", "UX Design"],
    image: web2Image,
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
  web_class: {
    title: "Intro to Web Design",
    skills: ["Web Design", "HTML", "CSS", "UI Design", "UX Design"],
    image: web3Image,
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
    skills: ["Unity", "C#", "3D Game Design"],
    image: unity2Image,
    description: (
      <>
        This project-based class combines 3D art and technology to create your
        own unique games using the Unity platform. We’ll learn the Unity
        framework and develop a game that you and your friends can play by the
        end of the semester. Our goal is to empower students to become creators
        rather than just consumers. Beginners welcome!
      </>
    ),
  },
  game_bootcamp: {
    title: "Intro to Unity Game Design",
    skills: ["Unity", "C#"],
    image: unity2Image,
    description: (
      <>
        This project-based class combines 3D art and technology to create your
        own unique games using the Unity platform. We’ll learn the Unity
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
    image: python2Image,
    description: (
      <>
        Come and learn Python in our new class this spring! We’ll start with
        fundamental concepts of programming that can be applied to the study of
        any programming language. Together, we’ll create chat bots, learn
        automation, and work on our final projects at the end of the semester.
        Beginners welcome!
      </>
    ),
  },
  javascript_class: {
    title: "Intro to JavaScript",
    skills: ["JavaScript", "Programming"],
    image: jsImage,
    description: (
      <>
        This course is interactive and the concepts covered will lay the
        foundation for using JavaScript in any environment. We’ll start off with
        an introduction to Javascript, move on to learning about data
        visualization and creating projects based on your personal interests,
        and finish off the semester with a final project. Beginners welcome!
      </>
    ),
  },
  vr_class: {
    title: "Intermediate VR Game Design with Unity and Oculus",
    skills: ["Unity", "C#", "3D Game Design", "Virtual Reality"],
    image: vrImage,
    description: (
      <>
        For the first time ever, you’ll be able to take a step into your very
        own game. Welcome to our Game Design Academy! This class is for students
        who have completed the Intro to Unity Game Design course in Summer or
        Fall 2020. Create an out of this world project that you can see, hear,
        and lose yourself in. In this class you will further develop your Unity
        skills, strengthen your C# skills, and think in 3D to create virtual
        reality experiences. Note: This class is part of our new Game Design
        Academy and will require that you make a commitment to further your
        skills this summer in our 6-week VR Capstone.
      </>
    ),
  },
  sdr_class: {
    title: "12-Week Tech Sales Bootcamp",
    skills: ["Career Preparation", "Tech Sales"],
    image: sdrImage,
    description: (
      <>
        Join us this fall for the launch of our new program. Break into the tech
        industry in an entry level Sales Development Representative position
        earning $60,000 in just 3 months! Learn the skills you need to succeed.
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
        necessary!
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
  scratch_pong_workshop: {
    title: "Code a Pong Game with Scratch",
    skills: ["Scratch", "Block Coding"],
    image: scratchCatImage,
    description: (
      <>
        In this hands-on workshop, we'll combine technology and game design to
        code our own interactive pong game with Scratch. We'll begin with a
        quick intro to creative coding and Scratch, plan our ideas together,
        then spend time creating our projects and experimenting with code. We'll
        end by sharing ideas and questions and resources to continue learning
        more. Beginner coders welcome!
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
        networking skills. Illustration adapted from{" "}
        <a href="https://blush.design/"> Blush. </a>
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
  python_workshop: {
    title: "Totally Tubular Turtles With Python",
    skills: ["Python"],
    image: python2Image,
    description: (
      <>
        In this hands on workshop, we’ll take a look at Python— one of the
        worlds most popular programming languages and create our own interactive
        turtle game. We’ll begin this workshop with an intro to Python and some
        of its core concepts before you are guided through a series of mini
        lessons and challenges. All to end with an awesome interactive project
        to show your friends and family! Beginners welcome!
      </>
    ),
  },
  design_business_workshop: {
    title: "Design Your Own Business in 90 Minutes",
    skills: ["Logos", "Color Schemes", "Social Media", "Web Design"],
    image: designBusinessImage,
    description: (
      <>
        This project-based class combines design tips and tricks with free
        platforms to design your own business. We'll discover the creative
        secrets to use for any business, free tools that all designers use, and
        we will bring our designs to life in a final interactive website.
        Beginners welcome!
      </>
    ),
  },
  web_creation_wix: {
    title: "Web Creation with Wix",
    skills: ["Web Design", "Wix"],
    image: wixImage,
    description: (
      <>
        Join the Wix Education team to celebrate Hour of Code, a worldwide
        celebration of computer science. In this workshop, you'll hear from a
        guest speaker from Wix (with time for Q&A), and explore different
        pathways for creating dynamic websites with the Wix editor. If you're
        interested in web design or web creation, this workshop is for you!
        Participants will leave with their own Wix site, also receive fun swag
        from Wix to help spark extra creativity! Fun fact: Hour of Code is part
        of Computer Science Education Week, an annual week that celebrates the
        birthday of computing pioneer Grace Hopper!
      </>
    ),
  },
  intro_javascript: {
    title: "JavaScript for Beginners",
    skills: ["JavaScript"],
    image: magic8BallImage,
    description: (
      <>
        In this hands-on workshop, we’ll combine technology and logic to create
        and code our own interactive Magic 8 Balls. We’ll begin with a quick
        intro to JavaScript, plan our ideas together, then spend time creating
        our projects and experimenting with code. We’ll end by sharing ideas and
        questions and resources to continue learning. Photo credit to{" "}
        <a href="https://dribbble.com/shots/6129149--ALL-SIGNS-POINT-TO-YES?utm_source=pinterest&utm_campaign=pinterest_shot&utm_content=*%7E%20ALL%20SIGNS%20POINT%20TO%20YES%20%7E*&utm_medium=Social_Share">
          {" "}
          Hamburger.
        </a>
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

export const CourseDates: ClassDates = {
  registrationDeadline: Date.parse("2021-01-22T20:00:00-07:00"),
  interview: Date.parse("2021-01-26T12:00:00-07:00"),
  demoDay: Date.parse("2021-05-08T13:00:00-07:00"),
};

export const FallDates: ClassDates = {
  registrationDeadline: Date.parse("2021-01-22T20:00:00-07:00"),
  interview: Date.parse("2021-01-26T12:00:00-07:00"),
  demoDay: Date.parse("2020-12-12T13:00:00-07:00"),
};

// export const FallDatesExtended: ClassDates = {
//   ...FallDates,
//   registrationDeadline: Date.parse("2020-08-30T20:00:00-07:00"),
// };

export const SDRDates: BaseClassDates = {
  registrationDeadline: Date.parse("2021-01-17T20:00:00-07:00"),
  interview: Date.parse("2020-09-082T13:00:00-07:00"),
};

const SPRING_CLASS_SCHEDULE = {
  MW: {
    meets: (
      <>
        Monday, Wednesday{" "}
        <Box component="span" display="inline-block">
          4:00pm - 6:30pm PST
        </Box>
      </>
    ),
    startDate: "February 8th",
    endDate: "May 8th",
  },
  TH: {
    meets: (
      <>
        Tuesday, Thursday{" "}
        <Box component="span" display="inline-block">
          4:00pm - 6:30pm PST
        </Box>
      </>
    ),
    startDate: "February 9th",
    endDate: "May 8th",
  },
} as const;

function springClass(
  course: Course,
  campus: Campus,
  schedule: "MW" | "TH",
  formAssemblyId: string,
  classDates: ClassDates = CourseDates
): ClassInstance {
  return {
    type: "class",
    course,
    campus,
    classDates,
    ...SPRING_CLASS_SCHEDULE[schedule],
    buttonText: "Student Application",
    signupUrl: `https://www.tfaforms.com/4872902?tfa_2013=${formAssemblyId}`,
  };
}

function SDRClass(
  course: Course,
  campus: Campus,
  formAssemblyId: string
): ClassInstance {
  return {
    type: "class",
    course,
    campus,
    classDates: SDRDates,
    meets: (
      <>
        Tuesday, Wednesday, Thursday{" "}
        <Box component="span" display="inline-block">
          6:00pm - 9:00pm PST
        </Box>
      </>
    ),
    startDate: "February 8th",
    endDate: "May (Date TBD)",
    buttonText: "Apply",
    signupUrl: `https://www.tfaforms.com/4870903?tfa_2013=${formAssemblyId}`,
  };
}

export const ClassInstances: ClassOrWorkshopInstance[] = [
  // fallClass(
  //   Courses.web_class,
  //   Campuses.online,
  //   "MW",
  //   "tfa_2245",
  //   FallDatesExtended
  // ),
  springClass(Courses.vr_class, Campuses.online, "MW", "tfa_2013"),
  springClass(Courses.python_class, Campuses.online, "TH", "tfa_2013"),
  springClass(Courses.game_class, Campuses.online, "TH", "tfa_2013"),
  springClass(Courses.web_class, Campuses.online, "TH", "tfa_2013"),
  springClass(Courses.javascript_class, Campuses.online, "MW", "tfa_2013"),
];

export const SDRClassInstances: ClassOrWorkshopInstance[] = [
  SDRClass(Courses.sdr_class, Campuses.online, "tfa_2236"),
];

function workshop({
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
    buttonText: "Register",
    signupUrl,
    date,
    minutes,
  };
}

export const WorkshopInstances: ClassOrWorkshopInstance[] = [
  workshop({
    course: Courses.networking_workshop,
    dateString: "2020-11-30T15:00:00-08:00",
    minutes: 120,
    signupUrl: "https://www.tfaforms.com/4863341",
    who: "16 - 24 year olds",
  }),

  // workshop({
  //   course: Courses.careerprep_resume_workshop,
  //   dateString: "2020-05-21T15:30:00-07:00",
  //   minutes: 120,
  //   signupUrl: "https://www.tfaforms.com/4824976",
  //   who: "16 - 24 year olds",
  //   buttonExtra: <>Only 10 spots available!</>,
  // }),
  // workshop({
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

export const WeekOfCodeClassInstances: ClassOrWorkshopInstance[] = [
  workshop({
    course: Courses.p5js_workshop,
    dateString: "2020-12-14T15:00:00-08:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4867358",
    who: "7th - 12th graders",
  }),
  workshop({
    course: Courses.web_creation_wix,
    dateString: "2020-12-15T15:00:00-08:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4867358",
    who: "7th - 12th graders",
    buttonExtra: <>New workshop!</>,
  }),
  workshop({
    course: Courses.python_workshop,
    dateString: "2020-12-16T15:00:00-08:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4867358",
    who: "7th - 12th graders",
  }),
  workshop({
    course: Courses.intro_javascript,
    dateString: "2020-12-17T15:00:00-08:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4867358",
    who: "7th - 12th graders",
    buttonExtra: <>New workshop!</>,
  }),
  workshop({
    course: Courses.beginner_web_workshop,
    dateString: "2020-12-18T15:00:00-08:00",
    minutes: 90,
    signupUrl: "https://www.tfaforms.com/4867358",
    who: "7th - 12th graders",
  }),
];

export const Sections = {
  workshops: WorkshopInstances,
  "week-of-code": WeekOfCodeClassInstances,
  courses: ClassInstances,
  "career-prep": SDRClassInstances,
} as const;

export const SectionIds = [
  "workshops",
  "week-of-code",
  "courses",
  "career-prep",
] as const;
export type SectionId = typeof SectionIds[number];
