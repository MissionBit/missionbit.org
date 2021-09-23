import { StaticImageImport } from "src/image";

export interface SponsorData {
  href: string;
  title: string;
  logo: StaticImageImport;
}

export const Sponsors: SponsorData[] = [
  {
    href: "https://www.ymcasf.org/programs/urban-services-san-francisco-youth-empowerment-fund",
    title: "YMCA San Francisco Youth Empowerment Fund",
    logo: require("public/images/bridge/sponsors/yef.svg").default,
  },
  {
    href: "https://www.missionbit.org/",
    title: "Mission Bit",
    logo: require("public/images/bridge/sponsors/mission-bit.svg").default,
  },
];

export const Employers: SponsorData[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    logo: require("public/images/bridge/employers/facebook.svg").default,
  },
  {
    href: "https://slack.com/",
    title: "Slack",
    logo: require("public/images/bridge/employers/slack.svg").default,
  },
  {
    href: "https://chanzuckerberg.com/",
    title: "Chan Zuckerberg Initiative",
    logo: require("public/images/bridge/employers/chan-zuckerberg-initiative.svg")
      .default,
  },
  {
    href: "https://www.getforefront.co/",
    title: "Forefront",
    logo: require("public/images/bridge/employers/forefront.png").default,
  },
  {
    href: "https://discord.com/",
    title: "Discord",
    logo: require("public/images/bridge/employers/discord.svg").default,
  },
  {
    href: "https://www.oculus.com/",
    title: "Oculus",
    logo: require("public/images/bridge/employers/oculus.svg").default,
  },
];

export default Sponsors;
