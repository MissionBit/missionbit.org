import assert from "assert";

export interface SponsorData {
  readonly href: string;
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

interface LogoInput {
  readonly src: string;
  readonly width: number;
  readonly height: number;
}

function svgLogo({ src, width, height }: LogoInput): SponsorLogo {
  assert(src.match(/\.svg$/), "svgLogo src must end with .svg");
  return {
    src: require(`public/images/gala/2019-sponsors/${src}`),
    width,
    height,
  };
}

function rasterLogo({ src, width, height }: LogoInput) {
  assert(
    src.match(/\.(jpg|png)$/),
    "logo must be a .png or .jpg, use svgLogo for .svg"
  );
  const original = require(`public/images/gala/2019-sponsors/${src}?resize`);
  const webp = require(`public/images/gala/2019-sponsors/${src}?resize&format=webp`);
  return {
    src: original.src,
    srcSet: original.srcSet,
    webpSrcSet: webp.srcSet,
    width,
    height,
  };
}

export const Sponsors: readonly SponsorData[] = [
  {
    href: "https://www.facebook.com/",
    title: "Facebook",
    logo: svgLogo({ src: "facebook.svg", width: 1024, height: 360 }),
    level: "platinum",
  },
  {
    href: "https://www.svb.com/",
    title: "Silicon Valley Bank",
    logo: svgLogo({ src: "svb.svg", width: 2500, height: 1478 }),
    level: "gold",
  },
  {
    href: "https://unity3d.com/",
    title: "Unity Technologies",
    logo: svgLogo({
      src: "unity.svg",
      width: 275,
      height: 100,
    }),
    level: "gold",
  },
  {
    href: "https://jyve.com/",
    title: "Jyve",
    logo: svgLogo({
      src: "jyve.svg",
      width: 133,
      height: 32,
    }),
    level: "silver",
  },
  {
    href: "https://www.kaporcenter.org/",
    title: "Kapor Center",
    logo: svgLogo({
      src: "kapor-center-wide.svg",
      width: 410,
      height: 85,
    }),
    level: "silver",
  },
  {
    href: "https://transcendit.health/",
    title: "TranscendIT Health",
    logo: rasterLogo({
      src: "transcendit-health.png",
      width: 931,
      height: 304,
    }),
    level: "silver",
  },
  {
    href: "https://getvim.com/",
    title: "Vim",
    logo: rasterLogo({
      src: "vim.png",
      width: 540,
      height: 148,
    }),
    level: "silver",
  },
  {
    href: "https://goldenstatewarriors.com/",
    title: "Golden State Warriors",
    logo: rasterLogo({
      src: "gsw.png",
      width: 750,
      height: 750,
    }),
    level: "bronze",
  },
  {
    href: "https://endlesswest.com/glyph/",
    title: "Glyph",
    logo: svgLogo({
      src: "glyph.svg",
      width: 167,
      height: 23,
    }),
    level: "bronze",
  },
  {
    href: "https://www.halcyonft.com/",
    title: "Halcyon Financial Technology",
    logo: rasterLogo({
      src: "halcyon-financial-technology.png",
      width: 1015,
      height: 317,
    }),
    level: "bronze",
  },
  {
    href: "https://www.tng.com/",
    title: "TNG",
    logo: rasterLogo({
      src: "tng.png",
      width: 750,
      height: 750,
    }),
    level: "bronze",
  },
];

export default Sponsors;
