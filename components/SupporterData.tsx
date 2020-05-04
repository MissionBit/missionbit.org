export interface SupporterDataProps {
  logo: string;
  href: string;
  title: string;
}

function requireSvg(logo: string): string {
  return require(`../public/images/supporters/${logo}`);
}

function requireImg(logo: string): string {
  return require(`../public/images/supporters/${logo}?resize&size=300`).src;
}

const SupporterData: SupporterDataProps[] = [
  {
    logo: requireImg("sfbfa.png"),
    title: "San Francisco Black Firefighters Association",
    href: "https://www.sfbfa.org/",
  },
  {
    logo: requireImg("ccsf.png"),
    title: "City College of San Francisco",
    href: "https://www.ccsf.edu/",
  },
  {
    logo: requireSvg("facebook.svg"),
    title: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    logo: requireImg("gateway.png"),
    title: "Gateway High School",
    href: "https://www.gatewaypublicschools.org/ghs",
  },
  {
    logo: requireImg("hackreactor.png"),
    title: "Hack Reactor",
    href: "https://www.hackreactor.com/",
  },
  { logo: requireSvg("jyve.svg"), title: "Jyve", href: "https://jyve.com/" },
  {
    logo: requireSvg("kapor-center.svg"),
    title: "Kapor Center",
    href: "https://www.kaporcenter.org/",
  },
  {
    logo: requireImg("leadership.png"),
    title: "Leadership High School",
    href: "https://www.leadershiphigh.org/",
  },
  {
    logo: requireImg("ousd.png"),
    title: "Oakland Unified School District",
    href: "https://www.ousd.org/",
  },
  {
    logo: requireSvg("svb.svg"),
    title: "Silicon Valley Bank",
    href: "https://www.svb.com/",
  },
  {
    logo: requireImg("sfoewd.png"),
    title: "San Francisco Office of Economic and Workforce Development",
    href: "https://oewd.org/",
  },
  {
    logo: requireImg("sfusd.png"),
    title: "San Francisco Unified School District",
    href: "https://www.sfusd.edu/",
  },
  {
    logo: requireImg("uber.png"),
    title: "Uber",
    href: "https://www.uber.com/",
  },
  {
    logo: requireSvg("unity.svg"),
    title: "Unity",
    href: "https://unity3d.com/",
  },
  {
    logo: requireImg("sff.png"),
    title: "San Francisco Foundation",
    href: "https://sff.org/",
  },
  {
    logo: requireImg("gsw-foundation.png"),
    title: "Golden State Warriors Foundation",
    href: "https://www.nba.com/warriors/foundation",
  },
];

export default SupporterData;
