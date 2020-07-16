import * as React from "react";

export const TEAM_TYPES = ["Team", "Keynote Speaker", "Panelist"] as const;
export type TeamType = typeof TEAM_TYPES[number];

export interface TeamMemberProps {
  name: string;
  title: string;
  type: TeamType;
  image: { jpg: string; webp: string; srcSet: string };
  bio: React.ReactNode;
}

const PHOTO_SIZES = {
  "": { width: 600, height: 600 },
  "@0.5x": { width: 300, height: 300 },
} as const;

function image(postfix: string): Pick<TeamMemberProps, "image"> {
  const SIZE_ORDER = ["@0.5x", ""] as const;
  return {
    image: {
      jpg: require(`public/images/bridge/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/bridge/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/bridge/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

const TEAM: TeamMemberProps[] = [
  {
    name: "Johnny Lin",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/johnny_lin"),
    bio: (
      <>
        Hello! My name is Johnny and I am one of the youth organizers for the
        Bridging the Youth Tech Divide conference. It’s been exciting planning
        this event and I can’t wait to meet everyone! If you have any questions
        or concerns for me please don’t hesitate to reach out through email at{" "}
        <a
          href="mailto:johnny@missionbit.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          johnny@missionbit.org
        </a>
        !
      </>
    ),
  },
  {
    name: "Alexander Peng",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/alexander_peng"),
    bio: (
      <>
        Hey! I’m Alex and I’ll be one of your organizers for the conference. I’m
        super excited to meet everyone and show you what we’ve been working on
        the last few months. Feel free to reach out at{" "}
        <a
          href="mailto:alexanderpeng@stanford.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          alexanderpeng@stanford.edu
        </a>
        !
      </>
    ),
  },
  {
    name: "Derick Du",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/derick_du"),
    bio: (
      <>
        Hi, my name is Derick and I am part of the Mission Bit SAB and will be
        one of your organizers for this conference. I hope you’re as excited as
        I am to be part of this, we've worked really hard and make sure to have
        fun! Feel free to contact me at{" "}
        <a
          href="mailto:derickdu127@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          derickdu127@gmail.com
        </a>
        !
      </>
    ),
  },
  {
    name: "Tara Tiong",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/tara_tiong"),
    bio: (
      <>
        Hi! I’m Tara, my team and I organized this conference. I am looking
        forward to meeting new people and hosting the conference. Our team has
        put some dirt and sweat into this big project, it is our wish for you to
        enjoy it! If you have any questions, contact me at{" "}
        <a
          href="mailto:tarationg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          tarationg@gmail.com
        </a>
        !
      </>
    ),
  },
];

const KEYNOTE_SPEAKERS: TeamMemberProps[] = [
  {
    name: "Caitlin Kalinowski",
    type: "Keynote Speaker",
    title: "Director of VR Hardware, Facebook",
    ...image("keynote-speakers/caitlin_kalinowski"),
    bio: (
      <>
        Caitlin Kalinowski heads up the VR Hardware team for Facebook’s AR/VR
        division, the team responsible for the product design, electrical and
        mechanical engineering of the Oculus Quest, Oculus Go, Oculus Rift S and
        Touch controllers. Before working at Oculus, Caitlin was a technical
        lead at Apple on the Mac Pro and MacBook Air products and was part of
        the original unibody Macbook Pro team. Caitlin received her BS in
        Mechanical Engineering from Stanford University in 2007.
        <br />
        <br />
        Caitlin is passionate about increasing the number of women and other
        underrepresented minorities in the fields of technology and design. She
        believes the next generation of products must be designed and engineered
        by people with different backgrounds and experiences in order to output
        the best possible product. Caitlin is on the Board of Axon, and the
        strategic board of Lesbians Who Tech, largest women’s tech conference in
        California and the largest LGBTQ professional network in the world.
      </>
    ),
  },
  {
    name: "Frances Coronel",
    type: "Keynote Speaker",
    title:
      "Software engineer at Slack and the Executive Director of Techqueria",
    ...image("keynote-speakers/frances_coronel"),
    bio: (
      <>
        Frances Coronel is a software engineer specializing in UI development on
        the Customer Acquisition Team at Slack where her mission is to make your
        working life simpler, more pleasant and more productive. She has been
        working professionally as a developer since 2015 and holds a Bachelors
        in Computer Science from Hampton University and a Masters in Computer
        Science from Cornell Tech.
        <br />
        <br />
        Outside of Slack, Frances is an Executive Director of Techqueria, a
        501c3 nonprofit that serves the largest community of Latinx in Tech in
        the US. She also supports Code Nation as a member of their Bay Area
        Leadership Council and the Latino Community Foundation as a member of
        their Latinos in Tech Giving Circle.
      </>
    ),
  },
];

const PANELISTS: TeamMemberProps[] = [
  {
    name: "Allison Doami",
    type: "Panelist",
    title: "Data Infrastructure Engineer, Chan Zuckerberg Initiative",
    ...image("panelists/allison_doami"),
    bio: (
      <>
        Allison Doami is currently a Data Infrastructure Engineer at the Chan
        Zuckerberg Initiative, which is Mark Zuckerberg and his wife Priscilla
        Chan's philanthropy aimed to improve learning experiences for children
        by focusing on the whole child using learning science to empower
        teachers to support each of their student's unique needs, prevent,
        manage, or cure all diseases by the end of the century by creating
        collaborative tools for scientists, researchers, and patients, and
        reform the criminal justice system by creating a future for everyone
        that is more just, inclusive, and full of opportunity. She earned a BS
        in Electrical Engineering from UCLA in 2019.
      </>
    ),
  },
  {
    name: "Yulkendy Valdez",
    type: "Panelist",
    title: "Co-Founder & CEO, Forefront",
    ...image("panelists/yulkendy_valdez"),
    bio: (
      <>
        Yulkendy is a Forbes 30 Under 30 social entrepreneur, storyteller, and
        TEDx speaker. As the Co-Founder and CEO of Forefront, she helps
        employers, schools, and nonprofits create low-barrier, culturally
        relevant virtual experiences for youth (ages 16-24) to facilitate their
        transition from education to career.
        <br />
        <br />
        Yulkendy brings a diverse set of both corporate and nonprofit experience
        to the table. She’s worked with Bank of America, EY, Puma, and Innosight
        Consulting as well as the International Institute of St. Louis and Betty
        Jean Kerr People’s Centers. Yulkendy has received numerous fellowships,
        including the Resolution Project, Young People For, Opportunity Nation
        Leaders Program, Future Founders Fellowship, Net Impact Racial Equity
        Fellowship, Harvard Kennedy School Public Policy Leadership Conference,
        One Young World, StartingBloc, and PPIA Indiana University. She is a
        proud alumna of Babson College, #1 school for entrepreneurship. More
        recently, she was named one of the Latino 30 Under 30 honorees by El
        Mundo Boston and a top millennial in Boston by Get Konnected. With roots
        in her hometown of St. Louis, Missouri, Yulkendy has traveled to over
        30+ countries for work and fun.
      </>
    ),
  },
  {
    name: "Simran Kumar",
    type: "Panelist",
    title: "Co-Founder, Simmi’s Boutique",
    ...image("panelists/simran_kumar"),
    bio: (
      <>
        Hi! I’m Simran, a 2014 Mission Bit alum and Mission native with big love
        for the city. I graduated from Lowell High School, and studied Economics
        in college while gaining experience in Entrepreneurship and Product
        Management for power supplies in the Medical, Industrial and LED
        industries.
        <br />
        <br />
        I’m currently working on relaunching my Indian handcrafts boutique
        focused on creating a digital presence rather than a brick &amp; mortar
        this time around. This new quarantine project is tied to building up a
        portfolio in efforts to make myself standout as candidate while I pursue
        Product Management roles within SF Tech companies.
        <br />
        <br />
        Other than my desire to work in tech, I’m very involved and passionate
        about social justice work. I believe it’s our job to empower others
        especially our awesome youth in the Bay Area where inequalities grow and
        effects move rapidly.
      </>
    ),
  },
  {
    name: "Bemnet Yemesgen",
    type: "Panelist",
    title: "Creative Director, Discord",
    ...image("panelists/bem_yemesgen"),
    bio: (
      <>
        Bemnet (Bem) Yemesgen is an Ethiopian American graphic designer,
        creative director, photographer, and award winning filmmaker… a polymath
        creative. Bemnet is also the cofounder and Creative Director of
        SmartPhilm Fest, a festival that features films shot exclusively on
        smartphones and tablets. Bemnet’s background spans 16 years in the
        creative industry working for brands like Adidas, Nike Foundation, USA
        Today and Discord. Bemnet currently serves as the Creative Director at
        Discord in San Francisco, CA.
      </>
    ),
  },
];

const TeamData = [
  { section: "Keynote Speakers", members: KEYNOTE_SPEAKERS },
  { section: "Panelists", members: PANELISTS },
  { section: "Team", members: TEAM },
];

export default TeamData;
