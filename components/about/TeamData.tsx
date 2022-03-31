import * as React from "react";
import { StaticImageImport } from "src/image";

export interface TeamMemberProps<T extends React.ReactNode = React.ReactNode> {
  name: string;
  title?: T;
  image: StaticImageImport;
  bio?: React.ReactNode;
}

type TeamTitle =
  | "Chief Executive Officer"
  | "Director of Curriculum"
  | "Director of Programs"
  | "Program Coordinator"
  | "Videographer"
  | "Office Administrator"
  | "Curriculum Assistant"
  | "Social Media/Marketing Intern"
  | "Social Media Strategist"
  | "Operations Manager";

type School =
  | "Lowell High School"
  | "Skyline High School"
  | "Wallenburg High School"
  | "Washington High School"
  | "Galileo High School"
  | "Gateway High School"
  | "Mission High School"
  | "Burton High School"
  | "San Francisco University High"
  | "Ruth Asawa SOTA High School"
  | "Lincoln High School";

type StudentInfo = React.ReactNode;

type BoardTitle = React.ReactNode;

type TeacherTitle =
  | "Lead Instructor"
  | "Instructor's Assistant"
  | "Workforce Development Instructor"
  | "Workshop Series Instructor";

function image(path: string): {
  image: StaticImageImport;
} {
  return {
    image:
      require(/* webpackInclude: /\.jpg$/ */ `public/images/about/team/${path}`)
        .default,
  };
}

const CEO = {
  name: "Christina Ortega",
  title: "Chief Executive Officer",
  ...image("core/christina.jpg"),
  bio: (
    <>
      Christina Ortega has a Master's in Public Administration with an emphasis
      in Public Policy. She has done extensive research on after-school
      programming focusing on the academic success of inner-city youth in San
      Francisco. She is a San Francisco native who is passionate about providing
      Bay Area youth with the skills to compete in the tech workforce.
    </>
  ),
} as const;

const TEAM: TeamMemberProps<TeamTitle>[] = [
  CEO,
  {
    name: "Cora Monokandilos",
    title: "Director of Curriculum",
    ...image("core/cora.jpg"),
    bio: (
      <>
        Cora Monokandilos is a Mission Bit alum who studied Computer Science at
        the University of California, Santa Cruz. She is a San Francisco native
        and is extremely passionate about making tech more diverse and
        accessible to youth from the Bay Area. In her free time, she could be
        found exploring new places, reading, or{" "}
        <a href="https://www.instagram.com/tuftgirlsdontcry/?hl=en">
          making rugs.
        </a>
      </>
    ),
  },
  {
    name: "Cynthia Chin",
    title: "Director of Programs",
    ...image("core/thia.jpg"),
    bio: (
      <>
        Cynthia Chin is an education professional with over 6 years of
        experience in the field. She has worked in San Francisco and abroad with
        students of all ages. She is an SF native and is passionate about giving
        back to her community. In her free time, she enjoys dancing, rock
        climbing, and sailing.
      </>
    ),
  },
  {
    name: "Belinda Coronado",
    title: "Program Coordinator",
    ...image("core/belinda-coronado.jpg"),
    bio: (
      <>
        Belinda was born and raised in South Central, Los Angeles. She studied
        communication at the University of Southern California. Belinda is very
        excited to become a valuable member at Mission Bit since she is
        passionate about helping bring resources and opportunities to
        underrepresented communities!
      </>
    ),
  },
  {
    name: "Zoe Kurtz",
    title: "Program Coordinator",
    ...image("core/zoe.jpg"),
    bio: (
      <>
        Zoe is from Boston and attended Vassar College to study English and
        education. After teaching for one year, she moved into the nonprofit
        sector, working with youth in an internship program. Zoe is excited
        about working with a team of creative individuals passionate about
        increasing youth engagement in tech.
      </>
    ),
  },
  {
    name: "David Topete",
    title: "Videographer",
    ...image("core/david_topete.jpg"),
  },
  {
    name: "Erin Mendez",
    title: "Social Media Strategist",
    ...image("core/erin-mendez.jpg"),
  },
  {
    name: "Kayla Wilton",
    title: "Office Administrator",
    ...image("core/kayla.jpg"),
    bio: (
      <>
        Kayla Wilton was born and raised in San Francisco. She studied English
        and Spanish at California State University, Stanislaus, before coming
        back to her hometown to study creative writing at City College of San
        Francisco. She is passionate about equity and about her Bay Area
        community, and in her free time, she enjoys writing fiction and poetry,
        making art, and being active outdoors.
      </>
    ),
  },
  {
    name: "Shailendra Jain",
    title: "Operations Manager",
    ...image("core/shailendra-jain.jpg"),
  },
];

const TEACHERS: TeamMemberProps<TeacherTitle>[] = [
  {
    name: "Brent Gannetta",
    title: "Lead Instructor",
    ...image("instructors/spring2022/brent.jpg"),
  },
  {
    name: "Brian Stapleton",
    title: "Workshop Series Instructor",
    ...image("instructors/spring2022/brian.jpg"),
  },
  {
    name: "Frank Shang",
    title: "Workshop Series Instructor",
    ...image("instructors/spring2022/frank.jpg"),
  },
  {
    name: "Imani Dawson",
    title: "Workshop Series Instructor",
    ...image("instructors/spring2022/imani.jpg"),
  },
  {
    name: "Joe Lerner",
    title: "Lead Instructor",
    ...image("instructors/spring2022/joe2.jpg"),
  },
  {
    name: "Scott Mauer",
    title: "Lead Instructor",
    ...image("instructors/spring2022/scott.jpg"),
  },
  {
    name: "Sirasit Thitirattanakorn",
    title: "Lead Instructor",
    ...image("instructors/spring2022/sirasit.jpg"),
  },
  {
    name: "Wilson Ng",
    title: "Lead Instructor",
    ...image("instructors/spring2022/wilson.jpg"),
  },
];

function sabTitle(year: number, school: School): React.ReactNode {
  return (
    <>
      {school}
      <br />
      Class of {year}
    </>
  );
}

const STUDENT_ADVISORY_BOARD: TeamMemberProps<StudentInfo>[] = [
  {
    name: "Alyssa Wu",
    ...image("sab/alyssa_wu.jpg"),
    title: sabTitle(2022, "Lowell High School"),
  },
  {
    name: "Carmen Li",
    ...image("sab/carmen-li.jpg"),
    title: sabTitle(2022, "Galileo High School"),
  },
  {
    name: "Esther Zeng",
    ...image("sab/esther-zeng.jpg"),
    title: sabTitle(2022, "Lincoln High School"),
  },
  {
    name: "Favour Odenyi",
    ...image("sab/favour-odenyi.jpg"),
    title: sabTitle(2023, "Mission High School"),
  },
  {
    name: "Johnny Lin",
    ...image("sab/johnny_lin.jpg"),
    title: sabTitle(2022, "Washington High School"),
  },
  {
    name: "Karina Anders",
    ...image("sab/karina-anders.jpg"),
    title: sabTitle(2023, "Lowell High School"),
  },
  {
    name: "Lilian Emelife",
    ...image("sab/lilian-emelife.jpg"),
    title: sabTitle(2022, "Burton High School"),
  },
  {
    name: "Nate Sirivallop",
    ...image("sab/nate.jpg"),
    title: sabTitle(2023, "Lowell High School"),
  },
  {
    name: "Oswen Martinez",
    ...image("sab/oswen-martinez.jpg"),
    title: sabTitle(2022, "San Francisco University High"),
  },
  {
    name: "Rafael Perez",
    ...image("sab/rafael-perez.jpg"),
    title: sabTitle(2023, "Lowell High School"),
  },
  {
    name: "Sabeen Rasheed",
    ...image("sab/sabeen-rasheed.jpg"),
    title: sabTitle(2023, "Ruth Asawa SOTA High School"),
  },
  {
    name: "Sonia Lee",
    ...image("sab/sonia.jpg"),
    title: sabTitle(2024, "Lowell High School"),
  },
  {
    name: "Tara Tiong",
    ...image("sab/tara-tiong.jpg"),
    title: sabTitle(2023, "Lowell High School"),
  },
];

const BOARD: TeamMemberProps<BoardTitle>[] = [
  {
    ...CEO,
    title: (
      <>
        <em>Board President</em>
        <br />
        Mission Bit
      </>
    ),
  },
  {
    name: "Sam Purtill",
    title: (
      <>
        <em>Board Chair</em>
        <br />
        Co-Founder &amp; CTO at Jyve
      </>
    ),
    ...image("board/sam_purtill.jpg"),
  },
  {
    name: "Jeff Schnitz",
    title: (
      <>
        <em>Board Treasurer</em>
        <br />
        Founder of Hypothetico, Inc.
      </>
    ),
    ...image("board/jeff_schnitz.jpg"),
  },
  {
    name: "Farid Vij",
    title: (
      <>
        <em>Board Secretary</em>
        <br />
        Head of Corporate Development at Ciitizen
      </>
    ),
    ...image("board/farid_vij.jpg"),
  },
  {
    name: "Clive Downie",
    title: (
      <>
        <em>Board Emeritus</em>
        <br />
        CMO, Unity Technologies
      </>
    ),
    ...image("board/clive_downie.jpg"),
  },
  {
    name: "Dan Garon",
    title: "GM of Emerging Platforms at Zynga",
    bio: (
      <>
        Dan is an active angel investor, advisor, and mentor to start-ups and
        entrepreneurs, and is a speaker on topics related to consumer product
        development and social gaming. Dan received his juris doctor with high
        distinction, Order of the Coif from the University of Iowa College of
        Law, and is a member of the California Bar.
        <br />
        <br />
        I'm excited to help more students unlock their full potential by making
        computer science more accessible.
      </>
    ),
    ...image("board/dan_garon.jpg"),
  },
  {
    name: "Bob Ippolito",
    title: "Entrepreneur, Maker of Things",
    ...image("board/bob_ippolito.jpg"),
  },
  {
    name: "Jill McNay",
    title: "Marketing Professional",
    ...image("board/jill_mcnay.jpg"),
  },
  {
    name: "Abel Regalado",
    title: "Mission Bit Alum & Software Engineer, Chan Zuckerberg Initiative",
    ...image("board/abel_regalado.jpg"),
  },
  {
    name: "Allison Scott, PhD",
    title: "CEO at Kapor Foundation",
    ...image("board/allison-scott.jpg"),
  },
  // {
  //   name: "Michael Walker",
  //   title: "Principal Consultant, BrandGeneering, Inc",
  //   ...image("board/michael_walker.jpg"),
  // },
];

const TeamData = [
  { section: "Team", members: TEAM },
  { section: "Teachers", members: TEACHERS },
  { section: "Student Advisory Board", members: STUDENT_ADVISORY_BOARD },
  { section: "Board", members: BOARD },
];

export default TeamData;
