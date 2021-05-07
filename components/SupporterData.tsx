export interface SupporterDataProps {
  logo: { src: string; srcSet?: string; webpSrcSet?: string };
  href: string;
  title: string;
}

function svg(logo: string): { src: string } {
  return {
    src: require(/* webpackInclude: /\.svg$/ */ `public/images/supporters/${logo}.svg`),
  };
}

function png(
  logo: string
): { src: string; srcSet: string; webpSrcSet?: string } {
  const [
    src,
    src2x,
  ] = require(/* webpackInclude: /\.png$/ */ `public/images/supporters/${logo}.png?resize&sizes[]=150&sizes[]=300`).images.map(
    (image: { path: string; height: number; width: number }) => image.path
  );
  const webpSrcSet = require(/* webpackInclude: /\.png$/ */ `public/images/supporters/${logo}.png?resize&sizes[]=150&sizes[]=300&format=webp`)
    .srcSet;
  return { src, srcSet: `${src}, ${src2x} 2x`, webpSrcSet };
}

const SupporterData: SupporterDataProps[] = [
  {
    logo: png("sfbfa"),
    title: "San Francisco Black Firefighters Association",
    href: "https://www.sfbfa.org/",
  },
  {
    logo: png("ccsf"),
    title: "City College of San Francisco",
    href: "https://www.ccsf.edu/",
  },
  {
    logo: svg("facebook"),
    title: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    logo: png("gateway"),
    title: "Gateway High School",
    href: "https://www.gatewaypublicschools.org/ghs",
  },
  {
    logo: png("hackreactor"),
    title: "Hack Reactor",
    href: "https://www.hackreactor.com/",
  },
  { logo: svg("jyve"), title: "Jyve", href: "https://jyve.com/" },
  {
    logo: svg("kapor-center"),
    title: "Kapor Center",
    href: "https://www.kaporcenter.org/",
  },
  {
    logo: png("leadership"),
    title: "Leadership High School",
    href: "https://www.leadershiphigh.org/",
  },
  {
    logo: png("ousd"),
    title: "Oakland Unified School District",
    href: "https://www.ousd.org/",
  },
  {
    logo: svg("svb"),
    title: "Silicon Valley Bank",
    href: "https://www.svb.com/",
  },
  {
    logo: png("sfoewd"),
    title: "San Francisco Office of Economic and Workforce Development",
    href: "https://oewd.org/",
  },
  {
    logo: png("sfusd"),
    title: "San Francisco Unified School District",
    href: "https://www.sfusd.edu/",
  },
  {
    logo: png("uber"),
    title: "Uber",
    href: "https://www.uber.com/",
  },
  {
    logo: svg("unity"),
    title: "Unity",
    href: "https://unity3d.com/",
  },
  {
    logo: png("sff"),
    title: "San Francisco Foundation",
    href: "https://sff.org/",
  },
  {
    logo: png("gsw-foundation"),
    title: "Golden State Warriors Foundation",
    href: "https://www.nba.com/warriors/foundation",
  },
  {
    logo: svg("kandji"),
    title: "Kandji",
    href: "https://www.kandji.io/",
  },
  {
    logo: png("related"),
    title: "Related Affordable Foundation",
    href: "https://www.related.com/residential/affordable-housing",
  },
  {
    logo: png("gratitude"),
    title: "The Gratitude Network",
    href: "http://gratitude-network.org/",
  },
];

export default SupporterData;
