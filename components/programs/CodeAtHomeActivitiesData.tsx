import * as React from "react";

export interface CourseShowcaseProps {
  readonly projects: readonly ProjectProps[];
}

export interface ProjectProps {
  readonly title: React.ReactNode;
  readonly pictures: readonly TitleProps[];
  readonly href: string;
  readonly description: React.ReactNode;
}

export interface TitleProps {
  readonly title: string;
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

function image(postfix: string): Pick<TitleProps, "image"> {
  const SIZE_ORDER = ["@0.5x", ""] as const;
  return {
    image: {
      jpg: require(`public/images/program/code-at-home/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/program/code-at-home/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/program/code-at-home/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    projects: [
      {
        title: "Building a Social Cause Support Website",
        pictures: [
          { title: "Building a Social Cause Support Website", ...image("mlk") },
        ],
        description: (
          <>
            In this lesson, you will learn the basics of building a simple
            website for people to learn more about a social good cause you're
            passionate about! Use this to show family and friends how they can
            support. In this example, we will be building a website to show off
            small businesses that we should be supporting!
          </>
        ),
        href:
          "https://drive.google.com/file/d/17cDxUu_D7dKPTGRRcpYdnObBQDw56pPe/view?usp=sharing",
      },
    ],
  },
  {
    projects: [
      {
        title: "MLK Quote Generator",
        pictures: [{ title: "MLK Quote Generator", ...image("mlk") }],
        description: (
          <>
            In this activity, we will learn how to create a Random Quote
            Generator app with HTML, CSS, and JavaScript. In honor of Black
            History Month which is during the month of February (& every month!)
            we will use Martin Luther King Jr.'s most notable quotes as we work
            on this project. If you wish to use different characters or themes,
            feel free to add in your own images and backgrounds and personalize
            it!
          </>
        ),
        href:
          "https://drive.google.com/file/d/1TRl1-wBUg_v2PqdQZwJ-HGmuT_voMOTB/view?usp=sharing",
      },
    ],
  },
];

export default CourseShowcases;
