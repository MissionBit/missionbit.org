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
      jpg: require(`public/images/demoday/2021-spring-judges/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2021-spring-judges/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2021-spring-judges/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const JudgeData: readonly JudgeProps[] = [
  {
    name: "Kim Tran",
    title: "SW Dev/Project Manager",
    company: "Apple",
    ...image("michael_walker"),
  },
  {
    name: "Michael Walker",
    title: "Principal Consultant",
    company: "BrandGeneering, Inc",
    ...image("michael_walker"),
  },
  {
    name: "Isaiah Johnson",
    title: "Founder and CEO",
    company: "Project Beanstalk",
    ...image("michael_walker"),
  },
];

export default JudgeData;
