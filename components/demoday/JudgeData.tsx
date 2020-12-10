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
      jpg: require(`public/images/demoday/2020-summer-judges/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-summer-judges/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-summer-judges/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const JudgeData: readonly JudgeProps[] = [
  {
    name: "Eddie Tapia",
    title: "Software Engineer",
    company: "Redfin",
    ...image("dulce_palacios"),
  },
  {
    name: "Jackie Liu",
    title: "VP Engineering",
    company: "Sentry",
    ...image("vlad_cretu"),
  },
  {
    name: "Isaiah Johnson",
    title: "Founder and CEO",
    company: "Project Beanstalk",
    ...image("melissa_olson"),
  },
  {
    name: "Shinjini Nunna",
    title: "Software Engineer",
    company: "Google",
    ...image("shinjini_nunna"),
  },
  {
    name: "Gloria Marissa Trevino",
    title: "Software Engineer",
    company: "Dell",
    ...image("alexandros_bantis"),
  },
  {
    name: "Brian Clark",
    title: "Engineering Manager",
    company: "Cruise",
    ...image("melissa_olson"),
  },
];

export default JudgeData;
