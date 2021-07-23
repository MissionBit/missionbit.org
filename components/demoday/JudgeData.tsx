export interface JudgeProps {
  readonly name: string;
  readonly title: string;
  readonly company: string;
  readonly image: {
    readonly jpg: string;
    readonly webp: string;
    readonly srcSet: string;
  };
}

const PHOTO_SIZES = {
  "": { width: 600, height: 600 },
  // "@0.5x": { width: 300, height: 300 },
} as const;

function image(postfix: string): Pick<JudgeProps, "image"> {
  // const SIZE_ORDER = ["@0.5x", ""] as const;
  const SIZE_ORDER = [""] as const;
  return {
    image: {
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-judges/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-judges/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-judges/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const JudgeData: readonly JudgeProps[] = [
  {
    name: "Nico Magaña",
    title: "Software Engineer",
    company: "Lyft",
    ...image("nico"),
  },
  {
    name: "Ben Schmoker",
    title: "Threat Intelligence",
    company: "Salesforce",
    ...image("ben"),
  },
  {
    name: "Maira Garcia",
    title: "Web Development Teaching Assistant",
    company: "U2",
    ...image("maira"),
  },
  {
    name: "Matt Bautista",
    title: "Lead Electrical Engineer",
    company: "Apple",
    ...image("maira"),
  },
];

export default JudgeData;
