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
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2022-spring-students/${postfix}.jpg`)
        .default,
  };
}

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    course: Courses.python_class,
    projects: [
      {
        title: "Chatbot",
        students: [
          { name: "Treazure Vasquez", ...image("treazure") },
          { name: "Jaymel Santos", ...image("jaymel") },
        ],
        description: (
          <>
            The project goal is to inspire the user to be motivated. We've made
            use of OpenAI to facilitate the operations and other services such
            as Ngrok for assisting in hosting.
          </>
        ),
        href: "https://replit.com/@Merlon/ChatBot",
      },
    ],
  },
  {
    course: Courses.vr_class_intermediate,
    projects: [
      {
        title: "Death's Apprentice",
        students: [{ name: "Keke Ning", ...image("keke") }],
        description: (
          <>
            Every century, the Grim Reaper chooses an apprentice at random from
            the souls of those who have died. As an apprentice to Death, their
            first lesson is to experience death again.
          </>
        ),
        href: "",
      },
    ],
  },
  {
    course: Courses.web_bootcamp,
    projects: [
      {
        title: "Life In Beige",
        students: [
          { name: "Tania Castanon Perez", ...image("tania") },
          { name: "Joy Jin", ...image("joy") },
          { name: "Nicole Martinez", ...image("nicole") },
        ],
        description: (
          <>
            Our self-care website focuses on encouraging people to incorporate
            different things in their daily lives that will help them with any
            stress they are carrying or to have a healthy relationship with
            their mind and body.
          </>
        ),
        href: "http://what-is-self-care.glitch.me/",
      },
    ],
  },
  {
    course: Courses.web_bootcamp,
    projects: [
      {
        title: "Far Fetched Fruits and Veggies",
        students: [
          { name: "Aileen Medrano", ...image("aileen") },
          { name: "Sandra Montejo", ...image("sandra") },
        ],
        description: (
          <>
            Our project is a website for a market that sells exotic fruits and
            vegetables. We have information of these different fruits and
            vegetables along with recipes for them. The market also delivers
            these fresh fruits and vegetables to its customers.
          </>
        ),
        href: "https://sweet-simplistic-pine.glitch.me/",
      },
    ],
  },
];

export default CourseShowcases;
