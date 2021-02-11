import * as React from "react";

export interface TeamMemberProps<T extends React.ReactNode> {
  name: string;
  title?: T;
  image: { jpg: string; webp: string };
  bio?: React.ReactNode;
}

type TeamTitle =
  | "Chief Executive Officer"
  | "Director of Curriculum"
  | "Director of Programs"
  | "Program Coordinator"
  | "Videographer"
  | "Curriculum Assistant";

type School =
  | "Lowell High School"
  | "Skyline High School"
  | "Wallenburg High School"
  | "Washington High School"
  | "Galileo High School"
  | "Gateway High School"
  | "Mission High School"
  | "Burton High School";

type StudentInfo = React.ReactNode;

type BoardTitle = React.ReactNode;

type TeacherTitle =
  | "Lead Instructor"
  | "Instructor's Assistant"
  | "Workforce Development Instructor";

function image(path: string): { image: { jpg: string; webp: string } } {
  return {
    image: {
      jpg: require(`public/images/about/team/${path}`),
      webp: require(`public/images/about/team/${path}?webp`),
    },
  };
}

const CEO = {
  name: "Christina Ortega",
  title: "Chief Executive Officer",
  ...image("core/christina_ortega.jpg"),
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
    ...image("core/cora_monokandilos.jpg"),
    bio: (
      <>
        Cora Monokandilos is a Mission Bit alum who studied Computer Science at
        the University of California, Santa Cruz. She is a San Francisco native
        and is extremely passionate about making tech more diverse and
        accessible to youth from the Bay Area. In her free time, she could be
        found exploring new places, reading, or learning how to draw.
      </>
    ),
  },
  {
    name: "Cynthia Chin",
    title: "Director of Programs",
    ...image("core/cynthia_chin.jpg"),
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
  // {
  //   name: "Genevieve Mossey",
  //   title: "Program Coordinator",
  //   ...image("core/genevieve_mossey.jpg"),
  //   bio: (
  //     <>
  //       Genevieve Mossey has a Bachelor’s degree in Psychology from San
  //       Francisco State University, where she focused on Cognition, Equity, and
  //       Social Justice. She was born and raised in Salinas, CA and has over 5
  //       years of experience working with youth of all ages in the Bay Area and
  //       Salinas Valley. In her free time she enjoys being in nature, spending
  //       time with her dog, and finding ways to be creative.
  //     </>
  //   ),
  // },
  {
    name: "David Topete",
    title: "Videographer",
    ...image("core/david_topete.jpg"),
  },
  {
    name: "Cody Rowland",
    title: "Curriculum Assistant",
    ...image("core/cody.jpg"),
  },
];

const TEACHERS: TeamMemberProps<TeacherTitle>[] = [
  {
    name: "Cameron Deputy",
    title: "Lead Instructor",
    ...image("instructors/cameron-deputy.jpg"),
  },
  {
    name: "Hunter Rocha",
    title: "Lead Instructor",
    ...image("instructors/hunter_rocha.jpg"),
  },
  {
    name: "Irvin Guerra",
    title: "Workforce Development Instructor",
    ...image("instructors/irvin.jpg"),
  },
  {
    name: "Kevin Beltran",
    title: "Lead Instructor",
    ...image("instructors/kevin-beltran.jpg"),
  },
  {
    name: "Shay Yano",
    title: "Lead Instructor",
    ...image("instructors/shay-yano.jpg"),
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
    name: "Natalie Yingyan Huang",
    ...image("sab/natalie.jpg"),
    title: sabTitle(2021, "Washington High School"),
  },
  {
    name: "Tara Tiong",
    ...image("sab/tara-tiong.jpg"),
    title: sabTitle(2023, "Lowell High School"),
  },
  {
    name: "Trent Taylor III",
    ...image("sab/trent-taylor.jpg"),
    title: sabTitle(2022, "Skyline High School"),
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
    name: "Brian Clark",
    title: "Engineering Manager at Cruise Automation",
    ...image("board/brian_clark.jpg"),
  },
  {
    name: "Clive Downie",
    title: "CMO, Unity Technologies",
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
    name: "Abhay Kumar",
    title: "Chief Product Officer, Helium Systems",
    ...image("board/abhay_kumar.jpg"),
  },
  {
    name: "Saskia Leggett",
    title: "Learning Experience Designer",
    ...image("board/saskia_leggett.jpg"),
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
  {
    name: "Michael Walker",
    title: "Principal Consultant, BrandGeneering, Inc",
    ...image("board/michael_walker.jpg"),
  },
];

const TeamData = [
  { section: "Team", members: TEAM },
  { section: "Teachers", members: TEACHERS },
  { section: "Student Advisory Board", members: STUDENT_ADVISORY_BOARD },
  { section: "Board", members: BOARD },
];

export default TeamData;
