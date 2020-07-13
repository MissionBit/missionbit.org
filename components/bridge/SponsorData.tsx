export interface SponsorData {
  href: string;
  title: string;
  width: number;
  height: number;
  logoUrl: string;
}

export const Sponsors: SponsorData[] = [
  {
    href:
      "https://www.ymcasf.org/programs/urban-services-san-francisco-youth-empowerment-fund",
    title: "YMCA San Francisco Youth Empowerment Fund",
    width: 1262,
    height: 258,
    logoUrl: "/images/bridge/sponsors/yef.svg",
  },
  {
    href: "https://www.missionbit.org/",
    title: "Mission Bit",
    width: 512,
    height: 150,
    logoUrl: "/images/bridge/sponsors/mission-bit.svg",
  },
];

export default Sponsors;
