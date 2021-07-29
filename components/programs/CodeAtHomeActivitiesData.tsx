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
  "": { width: 500, height: 500 },
  "@0.5x": { width: 250, height: 250 },
} as const;

function image(postfix: string): Pick<TitleProps, "image"> {
  const SIZE_ORDER = ["@0.5x", ""] as const;
  return {
    image: {
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/program/code-at-home/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/program/code-at-home/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/program/code-at-home/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const CourseShowcases: readonly CourseShowcaseProps[] = [
  {
    projects: [
      {
        title: "Small Business' Website",
        pictures: [{ title: "Local Restaurant Website", ...image("business") }],
        description: (
          <>
            In this lesson, you will learn the basics of building a simple
            website for people to learn more about the local shops that are
            around you! Use this to show family and friends to let them know how
            they can support. In this example, we will be building a website to
            feature small businesses!
          </>
        ),
        href:
          "https://drive.google.com/file/d/1bt1KPjCCu3N4pQ6bhQQEXfUWBIkuEyKs/view?usp=sharing",
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
