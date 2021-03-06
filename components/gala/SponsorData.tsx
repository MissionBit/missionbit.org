export interface SponsorData {
  readonly href: string | null;
  readonly title: string;
  readonly logo: SponsorLogo;
  readonly level: SponsorLevel;
}

export interface SponsorLogo {
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet?: string;
  readonly webpSrcSet?: string;
}

export const SponsorLevels = [
  "diamond",
  "platinum",
  "gold",
  "silver",
  "bronze",
] as const;
export type SponsorLevel = typeof SponsorLevels[number];

interface LogoInput {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

function svgLogo({ src, width, height }: LogoInput): SponsorLogo {
  return {
    src: require(/* webpackInclude: /\.svg$/ */ `public/images/gala/2020-sponsors/${src}.svg`),
    width,
    height,
  };
}

function pngLogo({ src, width, height }: LogoInput) {
  const original = require(/* webpackInclude: /\.png$/ */ `public/images/gala/2020-sponsors/${src}.png?resize`);
  const webp = require(/* webpackInclude: /\.png$/ */ `public/images/gala/2020-sponsors/${src}.png?resize&format=webp`);
  return {
    src: original.src,
    srcSet: original.srcSet,
    webpSrcSet: webp.srcSet,
    width,
    height,
  };
}

export const Sponsors: readonly SponsorData[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    logo: svgLogo({ src: "facebook", width: 800, height: 88 }),
    level: "platinum",
  },
  {
    href: "https://www.anthemcorporateresponsibility.com/cr/foundation",
    title: "Anthem Blue Cross and Blue Shield Foundation",
    logo: svgLogo({ src: "abc-foundation", width: 131, height: 46 }),
    level: "platinum",
  },
  {
    href: "https://unity3d.com/",
    title: "Unity Technologies",
    logo: svgLogo({
      src: "unity",
      width: 275,
      height: 100,
    }),
    level: "gold",
  },
  {
    href: "https://latinocf.org/",
    title: "Latino Community Foundation",
    logo: svgLogo({
      src: "latino-community-foundation",
      width: 848,
      height: 848,
    }),
    level: "silver",
  },
  {
    href: "https://jyve.com/",
    title: "Jyve",
    logo: svgLogo({
      src: "jyve",
      width: 133,
      height: 32,
    }),
    level: "silver",
  },
  {
    href: "https://www.thrivetalk.com/",
    title: "Thrive Talk",
    logo: svgLogo({
      src: "thrivetalk",
      width: 779,
      height: 163,
    }),
    level: "bronze",
  },
  {
    href: "https://www.getcruise.com/",
    title: "Cruise",
    logo: svgLogo({
      src: "cruise",
      width: 2000,
      height: 700,
    }),
    level: "bronze",
  },
  {
    href: "https://www.sfbfa.org/",
    title: "San Francisco Black Firefighters Association",
    logo: pngLogo({
      src: "sfbfa",
      width: 200,
      height: 200,
    }),
    level: "bronze",
  },
  {
    href: null,
    title: "Beth Andersen & Kevin Pereau",
    logo: svgLogo({
      src: "beth-andersen-kevin-pereau",
      width: 235,
      height: 75,
    }),
    level: "bronze",
  },
];

export default Sponsors;
