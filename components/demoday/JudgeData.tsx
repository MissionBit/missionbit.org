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
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-fall-judges/${postfix}.jpeg`)
        .default,
  };
}

export const JudgeData: readonly JudgeProps[] = [
  {
    name: "Farid Vij",
    title: "Co-Founder/COO",
    company: "Ciitizen",
    ...image("farid"),
  },
  {
    name: "Joseph Leybovich",
    title: "Senior Unity Engineer",
    company: "Left Field Labs",
    ...image("joe"),
  },
  {
    name: "Matt Bautista",
    title: "Engineer",
    company: "Apple",
    ...image("mattb"),
  },
  {
    name: "Shiva Jahangiri",
    title: "PhD Candidate in Computer Science (Big Data, Databases)",
    company: "UC Irvine",
    ...image("shiva"),
  },
];

export default JudgeData;
