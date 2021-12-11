import * as React from "react";
import { Course, Courses } from "components/programs/ClassInstanceData";
import { StaticImageImport } from "src/image";

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
  readonly image: StaticImageImport;
}

function image(postfix: string): Pick<StudentProps, "image"> {
  return {
    image:
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-fall-students/${postfix}.jpg`)
        .default,
  };
}

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    course: Courses.javascript_class,
    projects: [
      {
        title: "Climate Change",
        students: [
          { name: "Cindy Zhou", ...image("cindy") },
          { name: "Kathleen Zapata", ...image("kathleen") },
        ],
        description: (
          <>
            A website to help spread awareness about the increased cases of
            COVID-19 in San Francisco highschools.
          </>
        ),
        href: "https://covid-in-sf-highschools.kathleenzz.repl.co",
      },
    ],
  },
  {
    course: Courses.game_class,
    projects: [
      {
        title: '"Can" You Pick It Up?',
        students: [{ name: "Han Ngo", ...image("han") }],
        description: (
          <>
            Game about picking up as much trash as you can in 30 seconds + Fun
            Facts at the end
          </>
        ),
        href: "https://han-ngo16.github.io/Can-You-Pick-It-Up/",
      },
    ],
  },
  {
    course: Courses.web_bootcamp,
    projects: [
      {
        title: "SFBeats",
        students: [
          { name: "Diego Valdez", ...image("diego") },
          { name: "Jason Lau", ...image("jason") },
        ],
        description: (
          <>
            SFBeats is a website that caters to people interested in Hip Hop and
            Rap artists in the bay area.
          </>
        ),
        href: "https://mercury-ringed-citron.glitch.me/",
      },
    ],
  },
];

export default CourseShowcases;
