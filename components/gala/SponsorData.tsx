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

function svgLogo(src: string): SponsorLogo {
  return require(/* webpackInclude: /\.svg$/ */ `public/images/gala/2020-sponsors/${src}.svg`)
    .default;
}

function pngLogo(src: string) {
  return require(/* webpackInclude: /\.png$/ */ `public/images/gala/2020-sponsors/${src}.png`)
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
    href: "https://www.anthemcorporateresponsibility.com/cr/foundation",
    title: "Anthem Blue Cross and Blue Shield Foundation",
    logo: svgLogo("abc-foundation"),
    level: "platinum",
  },
  {
    href: "https://unity3d.com/",
    title: "Unity Technologies",
    logo: svgLogo("unity"),
    level: "gold",
  },
  {
    href: "https://latinocf.org/",
    title: "Latino Community Foundation",
    logo: svgLogo("latino-community-foundation"),
    level: "silver",
  },
  {
    href: "https://jyve.com/",
    title: "Jyve",
    logo: svgLogo("jyve"),
    level: "silver",
  },
  {
    href: "https://www.thrivetalk.com/",
    title: "Thrive Talk",
    logo: svgLogo("thrivetalk"),
    level: "bronze",
  },
  {
    href: "https://www.getcruise.com/",
    title: "Cruise",
    logo: svgLogo("cruise"),
    level: "bronze",
  },
  {
    href: "https://www.sfbfa.org/",
    title: "San Francisco Black Firefighters Association",
    logo: pngLogo("sfbfa"),
    level: "bronze",
  },
  {
    href: null,
    title: "Beth Andersen & Kevin Pereau",
    logo: svgLogo("beth-andersen-kevin-pereau"),
    level: "bronze",
  },
];

export default Sponsors;
