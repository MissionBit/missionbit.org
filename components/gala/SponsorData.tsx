export interface SponsorData {
  href: string;
  title: string;
  width: number;
  height: number;
  logoUrl: string;
  level: SponsorLevel;
}

type SponsorLevel = "platinum" | "gold" | "silver" | "bronze";

const SPONSORS: SponsorData[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    width: 1024,
    height: 360,
    logoUrl: "/images/gala/2019-sponsors/facebook.svg",
    level: "platinum",
  },
  {
    href: "https://www.svb.com/",
    title: "Silicon Valley Bank",
    width: 2500,
    height: 1478,
    logoUrl: "/images/gala/2019-sponsors/svb.svg",
    level: "gold",
  },
  {
    href: "https://unity3d.com/",
    title: "Unity Technologies",
    width: 275,
    height: 100,
    logoUrl: "/images/gala/2019-sponsors/unity.svg",
    level: "gold",
  },
  {
    href: "https://jyve.com/",
    title: "Jyve",
    width: 133,
    height: 32,
    logoUrl: "/images/gala/2019-sponsors/jyve.svg",
    level: "silver",
  },
  {
    href: "https://www.kaporcenter.org/",
    title: "Kapor Center",
    width: 410,
    height: 85,
    logoUrl: "/images/gala/2019-sponsors/kapor-center-wide.svg",
    level: "silver",
  },
  {
    href: "https://transcendit.health/",
    title: "TranscendIT Health",
    width: 931,
    height: 304,
    logoUrl: "/images/gala/2019-sponsors/transcendit-health.png",
    level: "silver",
  },
  {
    href: "https://getvim.com/",
    title: "Vim",
    width: 540,
    height: 148,
    logoUrl: "/images/gala/2019-sponsors/vim.png",
    level: "silver",
  },
  {
    href: "https://goldenstatewarriors.com/",
    title: "Golden State Warriors",
    width: 750,
    height: 750,
    logoUrl: "/images/gala/2019-sponsors/gsw.png",
    level: "bronze",
  },
  {
    href: "https://endlesswest.com/glyph/",
    title: "Glyph",
    width: 167,
    height: 23,
    logoUrl: "/images/gala/2019-sponsors/glyph.svg",
    level: "bronze",
  },
  {
    href: "https://www.halcyonft.com/",
    title: "Halcyon Financial Technology",
    width: 1015,
    height: 317,
    logoUrl: "/images/gala/2019-sponsors/halcyon-financial-technology.png",
    level: "bronze",
  },
  {
    href: "https://www.tng.com/",
    title: "TNG",
    width: 750,
    height: 750,
    logoUrl: "/images/gala/2019-sponsors/tng.png",
    level: "bronze",
  },
];

export default SPONSORS;
