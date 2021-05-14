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
    src: require(/* webpackInclude: /\.svg$/ */ `public/images/gala/2021-sponsors/${src}.svg`),
    width,
    height,
  };
}

// function pngLogo({ src, width, height }: LogoInput) {
//   const original = require(/* webpackInclude: /\.png$/ */ `public/images/gala/2021-sponsors/${src}.png?resize`);
//   const webp = require(/* webpackInclude: /\.png$/ */ `public/images/gala/2021-sponsors/${src}.png?resize&format=webp`);
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
    href: "https://latinocf.org/",
    title: "Verizon",
    logo: svgLogo({
      src: "verizon",
      width: 600,
      height: 600,
    }),
    level: "gold",
  },
];

export default Sponsors;
