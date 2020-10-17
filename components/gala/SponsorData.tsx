export interface SponsorData {
  readonly href: string;
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
    src: require(`public/images/gala/2020-sponsors/${src}.svg`),
    width,
    height,
  };
}

// function pngLogo({ src, width, height }: LogoInput) {
//   const original = require(`public/images/gala/2019-sponsors/${src}.png?resize`);
//   const webp = require(`public/images/gala/2019-sponsors/${src}.png?resize&format=webp`);
//   return {
//     src: original.src,
//     srcSet: original.srcSet,
//     webpSrcSet: webp.srcSet,
//     width,
//     height,
//   };
// }

export const Sponsors: readonly SponsorData[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    logo: svgLogo({ src: "facebook", width: 800, height: 88 }),
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
];

export default Sponsors;
