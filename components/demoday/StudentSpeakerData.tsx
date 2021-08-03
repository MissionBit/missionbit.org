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
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-students/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-students/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-students/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    course: Courses.javascript_class,
    projects: [
      {
        title: "Climate Change",
        students: [
          { name: "Bryan Jiang Li", ...image("bryan") },
          { name: "Sophia Johnson", ...image("sophia") },
        ],
        description: (
          <>
            Our project is to inform people of how human activities have
            impacted our planet and fueled the consequences of climate change.
          </>
        ),
        href: "https://demo-day-project.sophiamj.repl.co/",
      },
    ],
  },
  {
    course: Courses.game_class,
    projects: [
      {
        title: "Bub's World",
        students: [
          { name: "Victoria Vella", ...image("victoria") },
          { name: "Kira Allen", ...image("kira") },
          { name: "Carolina Hernandez", ...image("carolina") },
        ],
        description: (
          <>
            Bub's World is a first person shooter zombie game from the
            perspective of the zombie.
          </>
        ),
        href: "https://konekomiaow.github.io/BubsWorld/BubsWorldFinal/index.html",
      },
    ],
  },
  {
    course: Courses.web_class,
    projects: [
      {
        title: "SFA",
        students: [
          { name: "Fernando Hernandez", ...image("fernando") },
          { name: "Sasa Ramos", ...image("sasa") },
          { name: "Alishia Rubio Agular", ...image("alishia") },
        ],
        description: (
          <>
            We seek to help first-generation students access academic and
            professional support.
          </>
        ),
        href: "https://sasaramos.github.io/rising-stars/",
      },
    ],
  },
];

export default CourseShowcases;
