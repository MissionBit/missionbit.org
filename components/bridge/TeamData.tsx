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
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/bridge/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/bridge/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/bridge/${postfix}${k}.jpg?webp`);
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
        My name is Johnny, and this is my second year helping to organize the
        Bridging the Youth Tech Divide conference. It’s a fun process planning
        out this event. My primary role is to make sure that we’re meeting
        deadlines for the conference, and I also help out wherever help is
        needed. If you have any questions or concerns directly for me, you can
        reach me at{" "}
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
    name: "Karina Anders",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/karina"),
    bio: (
      <>
        I’m Karina, and this is my first year helping to organize the Bridging
        the Youth Tech Divide conference. I attended the conference last summer,
        and I’m so excited to have the opportunity to help organize this year’s
        conference. My primary role is to help with outreach and recruiting
        attendees. You can reach me at{" "}
        <a
          href="mailto:karina@missionbit.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          karina@missionbit.org
        </a>
        !
      </>
    ),
  },
  {
    name: "Tara Tiong",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/tara"),
    bio: (
      <>
        I’m Tara, and this is my second year organizing the Bridging the Youth
        Tech Divide. My role is to make sure everyone has an orderly system of
        planning. I’m excited to see new faces interested in the tech industry
        this year! Contact me at{" "}
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
  {
    name: "Natalie Huang",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/natalie"),
    bio: (
      <>
        Hi! My name is Natalie, and this is my first time helping to organize
        the Bridging the Youth Tech Divide Conference. I’m super excited to meet
        everyone and show you what our team has worked on over the last few
        months. Feel free to reach out to me anytime at{" "}
        <a
          href="mailto:yingyan.huangg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          yingyan.huangg@gmail.com
        </a>
        !
      </>
    ),
  },
  {
    name: "Alyssa Wu",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/alyssa"),
    bio: (
      <>
        My name is Alyssa, and this year is my first year contributing to the
        Bridging the Youth Tech Divide Conference. It was super cool taking part
        in organizing this event, and I look forward to meeting everyone! If you
        have any questions or concerns regarding the conference, you may contact
        our team or reach me at{" "}
        <a
          href="mailto:alyssa@missionbit.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          alyssa@missionbit.org
        </a>
        !
      </>
    ),
  },
  {
    name: "Oswen Martinez",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/oswen"),
    bio: (
      <>
        My name is Oswen, and this is my first year helping organize the
        Bridging the Youth Tech Divide Conference. It has been a fun learning
        experience working on this event with others. I am extremely excited to
        facilitate and meet everyone. Feel free to contact me or others about
        any further questions you may have, you can reach me at{" "}
        <a
          href="mailto:oswen.martinez21@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          oswen.martinez21@gmail.com
        </a>
        !
      </>
    ),
  },
  {
    name: "Angelo Ubas",
    type: "Team",
    title: "Student Ambassador, Mission Bit",
    ...image("team/angelo"),
    bio: (
      <>
        Hello! My name is Angelo, and this is my first year attending and
        organizing the Bridging Youth Tech Divide Conference for 2021. It has
        been a super fun experience organizing this event with the student
        advisory board. I’m very excited to meet everyone! If you have any
        questions regarding the conference, please don’t hesitate to reach out
        to me at{" "}
        <a
          href="mailto:angeloubas31@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          angeloubas31@gmail.com
        </a>
        !
      </>
    ),
  },
];

const KEYNOTE_SPEAKERS: TeamMemberProps[] = [
  {
    name: "Tetoya Gibson Preston",
    type: "Keynote Speaker",
    title: "Verizon Response Manager - Mid Atlantic",
    ...image("keynote-speakers/tetoya"),
    bio: (
      <>
        Prepared to deploy Verizon response supported mission essential
        communication and tech solutions to assist with emergency relief efforts
        nationwide. Current response manager for Virginia, West Virginia,
        Kentucky and Ohio. Tetoya has 20+ years of public safety experience
        assisting military and private sector businesses with Emergency
        Operation Centers, Government operations. As a veteran of the United
        States Air Force she has developed extensive knowledge in emergency
        preparedness and project management. Tetoya has served Eastern North
        Carolina as both a Disaster Response and Service to the Armed Services
        Emergency Communications volunteer deploying to multiple disaster
        response operations across the nation. Tetoya is an active member of the
        American Red Cross. Tetoya resides in Moseley, Virginia
      </>
    ),
  },
  // {
  //   name: "Caitlin Kalinowski",
  //   type: "Keynote Speaker",
  //   title: "Director of VR Hardware, Facebook",
  //   ...image("keynote-speakers/caitlin_kalinowski"),
  //   bio: (
  //     <>
  //       Caitlin Kalinowski heads up the VR Hardware team for Facebook’s AR/VR
  //       division, the team responsible for the product design, electrical and
  //       mechanical engineering of the Oculus Quest, Oculus Go, Oculus Rift S and
  //       Touch controllers. Before working at Oculus, Caitlin was a technical
  //       lead at Apple on the Mac Pro and MacBook Air products and was part of
  //       the original unibody Macbook Pro team. Caitlin received her BS in
  //       Mechanical Engineering from Stanford University in 2007.
  //       <br />
  //       <br />
  //       Caitlin is passionate about increasing the number of women and other
  //       underrepresented minorities in the fields of technology and design. She
  //       believes the next generation of products must be designed and engineered
  //       by people with different backgrounds and experiences in order to output
  //       the best possible product. Caitlin is on the Board of Axon, and the
  //       strategic board of Lesbians Who Tech, largest women’s tech conference in
  //       California and the largest LGBTQ professional network in the world.
  //     </>
  //   ),
  // },
  // {
  //   name: "Frances Coronel",
  //   type: "Keynote Speaker",
  //   title:
  //     "Software engineer at Slack and the Executive Director of Techqueria",
  //   ...image("keynote-speakers/frances_coronel"),
  //   bio: (
  //     <>
  //       Frances Coronel is a software engineer specializing in UI development on
  //       the Customer Acquisition Team at Slack where her mission is to make your
  //       working life simpler, more pleasant and more productive. She has been
  //       working professionally as a developer since 2015 and holds a Bachelors
  //       in Computer Science from Hampton University and a Masters in Computer
  //       Science from Cornell Tech.
  //       <br />
  //       <br />
  //       Outside of Slack, Frances is an Executive Director of Techqueria, a
  //       501c3 nonprofit that serves the largest community of Latinx in Tech in
  //       the US. She also supports Code Nation as a member of their Bay Area
  //       Leadership Council and the Latino Community Foundation as a member of
  //       their Latinos in Tech Giving Circle.
  //     </>
  //   ),
  // },
];

const PANELISTS: TeamMemberProps[] = [
  {
    name: "Venkatesh",
    type: "Panelist",
    title: "",
    ...image("panelists/venky"),
    bio: (
      <>
        An engineer with experience in working at the intersection of technology
        and strategy in IoT, with an emphasis on applications in industrial and
        smart city deployments. Currently, part of the innovation team at
        Verizon that is involved in shaping the go-to-market and product
        strategy of 5G by working closely with various external partners and
        internal stakeholders.
      </>
    ),
  },
  // {
  //   name: "Allison Doami",
  //   type: "Panelist",
  //   title: "Data Infrastructure Engineer, Chan Zuckerberg Initiative",
  //   ...image("panelists/allison_doami"),
  //   bio: (
  //     <>
  //       Allison Doami is currently a Data Infrastructure Engineer at the Chan
  //       Zuckerberg Initiative, which is Mark Zuckerberg and his wife Priscilla
  //       Chan's philanthropy aimed to improve learning experiences for children
  //       by focusing on the whole child using learning science to empower
  //       teachers to support each of their student's unique needs, prevent,
  //       manage, or cure all diseases by the end of the century by creating
  //       collaborative tools for scientists, researchers, and patients, and
  //       reform the criminal justice system by creating a future for everyone
  //       that is more just, inclusive, and full of opportunity. She earned a BS
  //       in Electrical Engineering from UCLA in 2019.
  //     </>
  //   ),
  // },
  // {
  //   name: "Yulkendy Valdez",
  //   type: "Panelist",
  //   title: "Co-Founder & CEO, Forefront",
  //   ...image("panelists/yulkendy_valdez"),
  //   bio: (
  //     <>
  //       Yulkendy is a Forbes 30 Under 30 social entrepreneur, storyteller, and
  //       TEDx speaker. As the Co-Founder and CEO of Forefront, she helps
  //       employers, schools, and nonprofits create low-barrier, culturally
  //       relevant virtual experiences for youth (ages 16-24) to facilitate their
  //       transition from education to career.
  //       <br />
  //       <br />
  //       Yulkendy brings a diverse set of both corporate and nonprofit experience
  //       to the table. She’s worked with Bank of America, EY, Puma, and Innosight
  //       Consulting as well as the International Institute of St. Louis and Betty
  //       Jean Kerr People’s Centers. Yulkendy has received numerous fellowships,
  //       including the Resolution Project, Young People For, Opportunity Nation
  //       Leaders Program, Future Founders Fellowship, Net Impact Racial Equity
  //       Fellowship, Harvard Kennedy School Public Policy Leadership Conference,
  //       One Young World, StartingBloc, and PPIA Indiana University. She is a
  //       proud alumna of Babson College, #1 school for entrepreneurship. More
  //       recently, she was named one of the Latino 30 Under 30 honorees by El
  //       Mundo Boston and a top millennial in Boston by Get Konnected. With roots
  //       in her hometown of St. Louis, Missouri, Yulkendy has traveled to over
  //       30+ countries for work and fun.
  //     </>
  //   ),
  // },
  // {
  //   name: "Simran Kumar",
  //   type: "Panelist",
  //   title: "Co-Founder, Simmi’s Boutique",
  //   ...image("panelists/simran_kumar"),
  //   bio: (
  //     <>
  //       Hi! I’m Simran, a 2014 Mission Bit alum and Mission native with big love
  //       for the city. I graduated from Lowell High School, and studied Economics
  //       in college while gaining experience in Entrepreneurship and Product
  //       Management for power supplies in the Medical, Industrial and LED
  //       industries.
  //       <br />
  //       <br />
  //       I’m currently working on relaunching my Indian handcrafts boutique
  //       focused on creating a digital presence rather than a brick &amp; mortar
  //       this time around. This new quarantine project is tied to building up a
  //       portfolio in efforts to make myself standout as candidate while I pursue
  //       Product Management roles within SF Tech companies.
  //       <br />
  //       <br />
  //       Other than my desire to work in tech, I’m very involved and passionate
  //       about social justice work. I believe it’s our job to empower others
  //       especially our awesome youth in the Bay Area where inequalities grow and
  //       effects move rapidly.
  //     </>
  //   ),
  // },
  // {
  //   name: "Bemnet Yemesgen",
  //   type: "Panelist",
  //   title: "Creative Director, Discord",
  //   ...image("panelists/bem_yemesgen"),
  //   bio: (
  //     <>
  //       Bemnet (Bem) Yemesgen is an Ethiopian American graphic designer,
  //       creative director, photographer, and award winning filmmaker… a polymath
  //       creative. Bemnet is also the cofounder and Creative Director of
  //       SmartPhilm Fest, a festival that features films shot exclusively on
  //       smartphones and tablets. Bemnet’s background spans 16 years in the
  //       creative industry working for brands like Adidas, Nike Foundation, USA
  //       Today and Discord. Bemnet currently serves as the Creative Director at
  //       Discord in San Francisco, CA.
  //     </>
  //   ),
  // },
];

const TeamData = [
  { section: "Keynote Speakers", members: KEYNOTE_SPEAKERS },
  { section: "Panelists", members: PANELISTS },
  { section: "Team", members: TEAM },
];

export default TeamData;
