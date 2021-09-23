import { StaticImageImport } from "src/image";

export interface JudgeProps {
  readonly name: string;
  readonly title: string;
  readonly company: string;
  readonly image: StaticImageImport;
}

function image(postfix: string): Pick<JudgeProps, "image"> {
  return {
    image:
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-judges/${postfix}.jpg`)
        .default,
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
    name: "Janki Patel",
    title: "Senior Software Engineer",
    company: "Gladly",
    ...image("janki"),
  },
];

export default JudgeData;
