import { StaticImageImport } from "src/image";

export interface SponsorData {
  readonly href: string | null;
  readonly title: string;
  readonly logo: StaticImageImport;
  readonly level: SponsorLevel;
}

export const SponsorLevels = [
  "diamond",
  "platinum",
  "gold",
  "silver",
  "bronze",
] as const;
export type SponsorLevel = typeof SponsorLevels[number];

function svgLogo(src: string): StaticImageImport {
  return require(/* webpackInclude: /\.svg$/ */ `public/images/gala/2021-sponsors/${src}.svg`)
    .default;
}

function jpgLogo(src: string) {
  return require(/* webpackInclude: /\.png$/ */ `public/images/gala/2021-sponsors/${src}.jpg`)
    .default;
}

function pngLogo(src: string) {
  return require(/* webpackInclude: /\.png$/ */ `public/images/gala/2021-sponsors/${src}.png`)
    .default;
}

export const Sponsors: readonly SponsorData[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    logo: svgLogo("facebook"),
    level: "platinum",
  },
  {
    href: "https://www.verizon.com/",
    title: "Verizon",
    logo: svgLogo("verizon"),
    level: "gold",
  },
  {
    href: "https://www.bloomberg.com/",
    title: "Bloomberg",
    logo: jpgLogo("bloomberg"),
    level: "silver",
  },
  {
    href: "https://www.kaporcenter.org/",
    title: "Kapor Center",
    logo: pngLogo("kapor"),
    level: "silver",
  },
  {
    href: "https://www.valothegame.com/",
    title: "Sankari Studios",
    logo: pngLogo("sankari"),
    level: "silver",
  },
  {
    href: "https://www.tilia.io/",
    title: "Tilia",
    logo: svgLogo("tilia"),
    level: "silver",
  },
  {
    href: null,
    title: "Beth Anderson & Kevin Pereau",
    logo: pngLogo("anderson"),
    level: "bronze",
  },
  {
    href: "https://www.getcruise.com/",
    title: "Cruise",
    logo: svgLogo("cruise"),
    level: "bronze",
  },
];

export default Sponsors;
