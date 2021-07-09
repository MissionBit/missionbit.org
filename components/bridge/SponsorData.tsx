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
    logoUrl: require("public/images/bridge/sponsors/assembled.png"),
  },
  {
    href: "https://discord.com/",
    title: "Discord",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/discord.svg"),
  },
  {
    href: "https://www.figma.com/",
    title: "Figma",
    width: 500,
    height: 150,
    logoUrl: require("public/images/bridge/sponsors/figma.svg"),
  },
  {
    href: "https://www.lyft.com/",
    title: "Lyft",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/lyft.png"),
  },
  {
    href: "https://www.notion.so/",
    title: "Notion",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/notion.svg"),
  },
  {
    href: "https://www.verizon.com/",
    title: "Verizon",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/verizon.png"),
  },
  {
    href:
      "https://www.ymcasf.org/programs/urban-services-san-francisco-youth-empowerment-fund",
    title: "YMCA San Francisco Youth Empowerment Fund",
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/yef.svg"),
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
    width: 1262,
    height: 258,
    logoUrl: require("public/images/bridge/sponsors/verizon-big.png"),
  },
];

export default Sponsors;
