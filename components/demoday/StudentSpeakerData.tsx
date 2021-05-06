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
      jpg: require(`public/images/demoday/2021-spring-students/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2021-spring-students/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2021-spring-students/${postfix}${k}.jpg?webp`);
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
          { name: "Jalyn McFarland", ...image("caitlyn") },
          { name: "Kellie Wong", ...image("caitlyn") },
          { name: "Darren Yee", ...image("caitlyn") },
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
          { name: "Dejohn Thompson", ...image("caitlyn") },
          { name: "Griffin Guerrero Seiberling", ...image("caitlyn") },
          { name: "Rafael Perez", ...image("caitlyn") },
        ],
        description: (
          <>
            Our project is gonna talk about Black heroes that the user then can
            select to choose so far we have created and little thing were you
            can select what Black hero you want to learn our promblem write now
            is uploading information to each hero
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
        href: "https://rise-in-plastic.tylerchoi1.repl.co/",
      },
    ],
  },
];

export default CourseShowcases;
