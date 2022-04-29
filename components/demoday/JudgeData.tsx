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
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2022-spring-judges/${postfix}.jpeg`)
        .default,
  };
}

export const JudgeData: readonly JudgeProps[] = [
  {
    name: "Gabriela Contreras-Cisneros",
    title: "Software Engineer",
    company: "New York Times",
    ...image("gabriela"),
  },
  {
    name: "Gary Frederick",
    title: "Software Engineer",
    company: "HashiCorpgar",
    ...image("gary"),
  },
  {
    name: "Juan Areces",
    title: "Software Engineer",
    company: "Twilioju",
    ...image("juan"),
  },
  {
    name: "Kevin Lee",
    title: "Software Engineer",
    company: "Affirm",
    ...image("kevin"),
  },
  {
    name: "Mariama Jaiteh",
    title: "Software Engineer",
    company: "Cruise",
    ...image("mariama"),
  },
];

export default JudgeData;
