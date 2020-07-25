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
      jpg: require(`public/images/demoday/2020-summer-students/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-summer-students/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-summer-students/${postfix}${k}.jpg?webp`);
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
        title: "protests.com",
        students: [{ name: "Victoria Oguta", ...image("victoria_oguta") }],
        description: (
          <>
            Create and locate local protests to be a part of something greater.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
      },
      {
        title: "protests.com",
        students: [{ name: "Victoria Oguta", ...image("victoria_oguta") }],
        description: (
          <>
            Create and locate local protests to be a part of something greater.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
      },
      {
        title: "protests.com",
        students: [{ name: "Victoria Oguta", ...image("victoria_oguta") }],
        description: (
          <>
            Create and locate local protests to be a part of something greater.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
      },
    ],
  },
  {
    course: Courses.game_bootcamp,
    projects: [
      {
        title: "Hungry",
        students: [{ name: "William Tran", ...image("william") }],
        description: (
          <>
            You have to get food in the city, but healthy food is hard to come
            by because you live in a food desert.
          </>
        ),
        href: "https://crazythepotato.github.io/HungryMan/",
      },
    ],
  },
];

export default CourseShowcases;
