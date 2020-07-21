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
    name: "Allison Doami",
    title: "Software Engineer",
    company: "Chan Zuckerberg Initiative",
    ...image("allison_doami"),
  },
  {
    name: "Vlad Cretu",
    title: "VP Engineering",
    company: "Sentry",
    ...image("allison_doami"),
  },
  {
    name: "Shinjini Nunna",
    title: "Software Engineer",
    company: "Google",
    ...image("shinjini_nunna"),
  },
  {
    name: "Alexandros Bantis",
    title: "Staff Platform Engineer",
    company: "Crunchbase",
    ...image("alexandros_bantis"),
  },
];

export default JudgeData;
