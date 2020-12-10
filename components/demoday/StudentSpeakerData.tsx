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
      jpg: require(`public/images/demoday/2020-fall-students/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-fall-students/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-fall-students/${postfix}${k}.jpg?webp`);
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
        title: "Therapy Area",
        students: [
          { name: "Favour Odenyi", ...image("favour") },
          { name: "Breanna Durant", ...image("breanna") },
        ],
        description: (
          <>A website that matches users to different therapy options.</>
        ),
        href: "https://faodenyi.github.io/",
      },
      // {
      //   title: "LiTong's Bubble",
      //   students: [{ name: "LiTong Liu", ...image("litong") }],
      //   description: (
      //     <>
      //       {" "}
      //       LiTong’s Bubble is a blog and portfolio website. I write
      //       anime/kdrama/cdrama reviews and just random things that I want to
      //       share on my blog.
      //     </>
      //   ),
      //   href: "https://litxng.github.io/LiTongBubble/",
      // },
      // {
      //   title: "Paulina's Store",
      //   students: [{ name: "Klester Hernandez", ...image("klester") }],
      //   description: <>We sell purses online for the best prices.</>,
      //   href: "https://klester2003.github.io/Final_Project/",
      // },
    ],
  },
  {
    course: Courses.python_class,
    projects: [
      // {
      //   title: "Hungry",
      //   students: [{ name: "William Tran", ...image("william") }],
      //   description: (
      //     <>
      //       You have to get food in the city, but healthy food is hard to come
      //       by because you live in a food desert.
      //     </>
      //   ),
      //   href: "https://crazythepotato.github.io/HungryMan/",
      // },
    ],
  },
  {
    course: Courses.game_bootcamp,
    projects: [
      // {
      //   title: "Hungry",
      //   students: [{ name: "William Tran", ...image("william") }],
      //   description: (
      //     <>
      //       You have to get food in the city, but healthy food is hard to come
      //       by because you live in a food desert.
      //     </>
      //   ),
      //   href: "https://crazythepotato.github.io/HungryMan/",
      // },
    ],
  },
];

export default CourseShowcases;
