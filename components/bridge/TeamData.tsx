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
    title: "President of the Student Advisory Board, Mission Bit",
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
    title:
      "Manager, Verizon Crisis Response Team - VA/WV/KY/OH, Public Sector Strategic Operations",
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
  {
    name: "Venky Konanur",
    type: "Keynote Speaker",
    title: "Senior Engineer - Applied Research",
    ...image("keynote-speakers/venky"),
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
];

const PANELISTS: TeamMemberProps[] = [
  {
    name: "Alelgn Amsalu",
    type: "Panelist",
    title: "Sr. Manager - Technology and Product Development",
    ...image("panelists/alelgn"),
    bio: (
      <>
        Alelgn Amsalu is Senior Manager - Technology responsible for Sports
        Technology integration supporting the Technology & Product Development
        Organization. Before joining Device Technology, he was a Senior Manager
        of Global Operator Collaboration responsible for collaborating with 55+
        international carriers to help identify emerging trends in the industry
        and advocate for Verizon interest in the global landscape on strategic
        initiatives such as 5G core, FWA and mmWave adoption. Alelgn has prior
        experience in the Network Implementation organization where he helped
        launch projects such as eUICC, VoWiFi and also helped in portfolio
        management of various projects. He has also worked in the Network Device
        Evaluation Lab where he worked with device OEMs to make sure they adhere
        to Verizon and industry standards.
      </>
    ),
  },
  {
    name: "Carlo Thompson",
    type: "Panelist",
    title: "Principal Engineer System Architecture",
    ...image("panelists/carlo"),
    bio: (
      <>
        Award-winning Telecommunications Professional with 15+ years of
        expertise in wireless network engineering, systems design and
        implementation, project planning, and team leadership. Proven ability to
        direct teams of 15+ while managing $20M capital expense budgets.
        Highly-skilled at adapting to new technologies in dynamic, fast-paced,
        environments. Gains stakeholder buy-in to deliver projects on time and
        budget. Organized self-starter able to manage multiple competing
        priorities.
      </>
    ),
  },
  {
    name: "Destah Owens",
    type: "Panelist",
    title: "Product Marketing",
    ...image("panelists/destah"),
    bio: (
      <>
        Destah is a technology and innovation enthusiast with a career built
        around driving business disruption, customer advocacy and connecting
        good ideas and good people. A veteran of several of the smallest Silicon
        Valley Startups as well as some of the biggest behemoths, he has picked
        up enough knowledge and information to be relatively dangerous. From his
        humble beginnings as an Electrical Engineer he has touched the data
        networking, wireless data, and machine learning technologies as a
        customer facing evangelist and problem solver. When using his powers for
        good, he is identifying emerging technologies and finding synergistic
        solutions for customers and professional colleagues. The latest shiny
        objects to have caught his fancy are XR (mixed reality), Cybersecurity,
        and IoT/Smart City technologies.
      </>
    ),
  },
  {
    name: "Patricia Chang",
    type: "Panelist",
    title: "5G Infrastructure Planning",
    ...image("panelists/patricia"),
    bio: (
      <>
        Patricia is a senior Cloud Technology manager in the Verizon Global
        Strategy and Technology Planning organization. She is leading and
        driving private 5G and private Mobile Edge Computing (MEC) strategy to
        commercialization. She was instrumental in the private 5G and MEC
        partnerships with Microsoft and AWS. Prior to HQ Network Planning,
        Patricia was an Associate Director in the West Area Data Planning
        leading VoLTE and Data Networks in Planning, Engineering, and
        Performance. Patricia is a technology innovator with over seventy plus
        granted patents. She was elected as one of the 2019 Verizon Master
        Inventors, and was showcased in Verizon Patent Video in 2015. She earned
        her bachelor and master degrees in Electrical Engineering and Computer
        Science at New York University School of Engineering in Brooklyn, New
        York{" "}
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
