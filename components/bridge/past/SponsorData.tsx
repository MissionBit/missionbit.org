export interface SponsorData {
  href: string;
  title: string;
  width: number;
  height: number;
  logoUrl: string;
}

export const Sponsors: SponsorData[] = [
  {
    href: "https://www.ymcasf.org/programs/urban-services-san-francisco-youth-empowerment-fund",
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
    href: "https://www.facebook.com/",
    title: "Facebook",
    width: 1600,
    height: 900,
    logoUrl: require("public/images/bridge/employers/facebook.svg"),
  },
  {
    href: "https://slack.com/",
    title: "Slack",
    width: 622.3,
    height: 254.4,
    logoUrl: require("public/images/bridge/employers/slack.svg"),
  },
  {
    href: "https://chanzuckerberg.com/",
    title: "Chan Zuckerberg Initiative",
    width: 112,
    height: 62,
    logoUrl: require("public/images/bridge/employers/chan-zuckerberg-initiative.svg"),
  },
  {
    href: "https://www.getforefront.co/",
    title: "Forefront",
    width: 236,
    height: 150,
    logoUrl: require("public/images/bridge/employers/forefront.png"),
  },
  {
    href: "https://discord.com/",
    title: "Discord",
    width: 800,
    height: 272.1,
    logoUrl: require("public/images/bridge/employers/discord.svg"),
  },
  {
    href: "https://www.oculus.com/",
    title: "Oculus",
    width: 800,
    height: 400,
    logoUrl: require("public/images/bridge/employers/oculus.svg"),
  },
];

export default Sponsors;
