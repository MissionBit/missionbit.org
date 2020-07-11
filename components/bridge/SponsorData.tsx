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
    width: 512,
    height: 512,
    logoUrl: "/images/bridge/sponsors/yef.jpg",
  },
  {
    href: "https://www.missionbit.org/",
    title: "Mission Bit",
    width: 360,
    height: 250,
    logoUrl: "/images/bridge/sponsors/mission-bit.svg",
  },
];

export default Sponsors;
