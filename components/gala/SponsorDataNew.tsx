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

export const Sponsors: readonly SponsorData[] = [
  {
    href: "https://latinocf.org/",
    title: "Verizon",
    logo: svgLogo("verizon"),
    level: "gold",
  },
];

export default Sponsors;
