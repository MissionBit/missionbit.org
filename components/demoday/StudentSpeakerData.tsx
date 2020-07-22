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

const PLACEHOLDER_PROJECTS: readonly ProjectProps[] = [
  {
    title: "Project A",
    students: [
      { name: "Student 1", ...image("tara_tiong") },
      { name: "Student 2", ...image("derick_du") },
      { name: "Student 3", ...image("johnny_lin") },
    ],
    description: (
      <>Project description. 1-2 sentences. This is placeholder content.</>
    ),
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
  },
  {
    title: "Project B",
    students: [
      { name: "Student 1", ...image("alexander_peng") },
      { name: "Student 2", ...image("johnny_lin") },
      { name: "Student 3", ...image("tara_tiong") },
    ],
    description: (
      <>Project description. 1-2 sentences. This is placeholder content.</>
    ),
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
  },
];

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    course: Courses.web_bootcamp,
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    course: Courses.game_bootcamp,
    projects: PLACEHOLDER_PROJECTS,
  },
];

export default CourseShowcases;