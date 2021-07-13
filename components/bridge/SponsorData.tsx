export interface SponsorData {
  href: string;
  title: string;
  width: number;
  height: number;
  logoUrl: string;
}

export const Sponsors: SponsorData[] = [
  {
    href: "https://www.assembled.com/",
    title: "Assembled",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/Assembled.svg"),
  },
  {
    href: "https://discord.com/",
    title: "Discord",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/Discord.svg"),
  },
  {
    href: "https://www.figma.com/",
    title: "Figma",
    width: 500,
    height: 150,
    logoUrl: require("public/images/bridge/sponsors/Figma.svg"),
  },
  {
    href: "https://www.lyft.com/",
    title: "Lyft",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/Lyft.svg"),
  },
  {
    href: "https://www.notion.so/",
    title: "Notion",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/Notion.svg"),
  },
  {
    href: "https://www.verizon.com/",
    title: "Verizon",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/Verizon.svg"),
  },
  {
    href: "https://www.missionbit.org/",
    title: "Mission Bit",
    width: 512,
    height: 150,
    logoUrl: require("public/images/bridge/sponsors/mission-bit.svg"),
  },
];

export const Employers: SponsorData[] = [
  {
    href: "https://www.verizon.com/",
    title: "Verizon",
    width: 1000,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/Verizon.svg"),
  },
];

export default Sponsors;
