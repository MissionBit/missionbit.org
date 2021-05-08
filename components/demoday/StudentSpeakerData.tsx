import * as React from "react";
import { Course, Courses } from "components/programs/ClassInstanceData";

export interface CourseShowcaseProps {
  readonly course: Course;
  readonly projects: readonly ProjectProps[];
}

export interface ProjectProps {
  readonly title: React.ReactNode;
  readonly students: readonly StudentProps[];
  readonly href: string;
  readonly description: React.ReactNode;
}

export interface StudentProps {
  readonly name: string;
  readonly image: {
    readonly jpg: string;
    readonly webp: string;
    readonly srcSet: string;
  };
}

const PHOTO_SIZES = {
  "": { width: 600, height: 600 },
  "@0.5x": { width: 300, height: 300 },
} as const;

function image(postfix: string): Pick<StudentProps, "image"> {
  const SIZE_ORDER = ["@0.5x", ""] as const;
  return {
    image: {
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-spring-students/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-spring-students/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-spring-students/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    course: Courses.web_bootcamp,
    projects: [
      {
        title: "OneMindfulSelf",
        students: [
          { name: "Jalyn McFarland", ...image("jalyn") },
          { name: "Kellie Wong", ...image("kellie") },
          { name: "Darren Yee", ...image("darren") },
        ],
        description: (
          <>
            Our website name will be called onemindfulself (onemindfulself.com)
            and will be about self care. On the website, we will have various
            tips on how to take care of yourself mainly mentally and a little
            physically{" "}
          </>
        ),
        href: "https://kkellie.github.io/onemindfulself/",
      },
    ],
  },
  {
    course: Courses.python_class,
    projects: [
      {
        title: "The Turn Against History",
        students: [
          { name: "DeJohn Thompson", ...image("dejohn") },
          { name: "Griffin Guerrero Seiberling", ...image("griffin") },
          { name: "Rafael Perez", ...image("rafa") },
        ],
        description: (
          <>
            My team and I decided to base our project on Black civil rights
            activist. With this project each activist has a slide and part
            dedicated to them. As you flip through person to person, you will
            receive information on the person of your choosing. The information
            provides you with who they are and some memorable things they have
            done. Our point is to teach and educate about Black leaders who took
            huge risks to change making in impact on history.
          </>
        ),
        href: "",
      },
    ],
  },
  {
    course: Courses.javascript_class,
    projects: [
      {
        title: "Project Plastic Zero",
        students: [
          { name: "Caitlyn Wong", ...image("caitlyn") },
          { name: "Ethan Ellis", ...image("ethan") },
          { name: "Tyler Choi", ...image("tyler") },
        ],
        description: (
          <>
            "Project Plastic Zero" sets a goal for "Zero Plastic, Zero
            Pollution," striving to reduce plastic use and providing sustainable
            alternatives.
          </>
        ),
        href: "https://ethan-ellis13.github.io/rise-in-plastic-use",
      },
    ],
  },
];

export default CourseShowcases;
