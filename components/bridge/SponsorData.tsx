import { StaticImageImport } from "src/image";

export interface SponsorData {
  href: string;
  title: string;
  logo: StaticImageImport;
}

export const Sponsors: SponsorData[] = [
  {
    href: "https://www.assembled.com/",
    title: "Assembled",
    logo: require("public/images/bridge/sponsors/assembled.svg").default,
  },
  {
    href: "https://discord.com/",
    title: "Discord",
    logo: require("public/images/bridge/sponsors/discord.svg").default,
  },
  {
    href: "https://www.figma.com/",
    title: "Figma",
    logo: require("public/images/bridge/sponsors/figma.svg").default,
  },
  {
    href: "https://www.lyft.com/lyftup/programs",
    title: "Lyft",
    logo: require("public/images/bridge/sponsors/lyft.svg").default,
  },
  {
    href: "https://about.twitter.com/en/who-we-are/twitter-for-good",
    title: "Twitter",
    logo: require("public/images/bridge/sponsors/twitter.svg").default,
  },
  {
    href: "https://www.socialimprints.com/",
    title: "Social Imprints",
    logo: require("public/images/bridge/sponsors/social_imprints.svg").default,
  },
  // {
  //   href: "https://www.verizon.com/",
  //   title: "Verizon",
  //   logo: require("public/images/bridge/sponsors/verizon.svg").default,
  // },
  // {
  //   href: "https://www.missionbit.org/",
  //   title: "Mission Bit",
  //   logo: require("public/images/bridge/sponsors/mission-bit.svg").default,
  // },
];

export const Employers: SponsorData[] = [
  {
    href: "https://www.verizon.com/",
    title: "Verizon",
    logo: require("public/images/bridge/sponsors/verizon.svg").default,
  },
];

export const Food: SponsorData[] = [
  {
    href: "https://doordashimpact.com/community/community-credits",
    title: "Doordash",
    logo: require("public/images/bridge/sponsors/doordash.svg").default,
  },
];

export default Sponsors;
