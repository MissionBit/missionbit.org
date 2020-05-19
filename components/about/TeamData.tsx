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
  | "Program Manager"
  | "Program Coordinator"
  | "Videographer";

type School =
  | "Lowell High School"
  | "Skyline High School"
  | "Wallenburg High School"
  | "Washington High School"
  | "Gateway High School";

type StudentInfo = React.ReactNode;

type BoardTitle = React.ReactNode;

type TeacherTitle = "Lead Instructor" | "Instructor's Assistant";

function image(path: string): { image: { jpg: string; webp: string } } {
  return {
    image: {
      jpg: require(`public/images/about/team/${path}`),
      webp: require(`public/images/about/team/${path}?webp`),
    },
  };
}

const TEAM: TeamMemberProps<TeamTitle>[] = [
  {
    name: "Christina Ortega",
    title: "Chief Executive Officer",
    ...image("core/christina_ortega.jpg"),
    bio: (
      <>
        Christina Ortega has a Master's in Public Administration with an
        emphasis in Public Policy. She has done extensive research on
        after-school programming focusing on the academic success of inner-city
        youth in San Francisco. She is a San Francisco native who is passionate
        about providing Bay Area youth with the skills to compete in the tech
        workforce.
      </>
    ),
  },
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
    title: "Program Manager",
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
  {
    name: "Genevieve Mossey",
    title: "Program Coordinator",
    ...image("core/genevieve_mossey.jpg"),
    bio: (
      <>
        Genevieve Mossey has a Bachelor’s degree in Psychology from San
        Francisco State University, where she focused on Cognition, Equity, and
        Social Justice. She was born and raised in Salinas, CA and has over 5
        years of experience working with youth of all ages in the Bay Area and
        Salinas Valley. In her free time she enjoys being in nature, spending
        time with her dog, and finding ways to be creative.
      </>
    ),
  },
  {
    name: "David Topete",
    title: "Videographer",
    ...image("core/david_topete.jpg"),
  },
];

const TEACHERS: TeamMemberProps<TeacherTitle>[] = [
  {
    name: "Shinjini Nunna",
    title: "Lead Instructor",
    ...image("2020-spring/shinjini_nunna.jpg"),
  },
  {
    name: "Christopher Louie",
    title: "Lead Instructor",
    ...image("2020-spring/christopher_louie.jpg"),
  },
  {
    name: "Georgina Cruz",
    title: "Lead Instructor",
    ...image("2020-spring/georgina_cruz.jpg"),
  },
  {
    name: "Gustavo Salas",
    title: "Lead Instructor",
    ...image("2020-spring/gustavo_salas.jpg"),
  },
  {
    name: "Stephen Yu",
    title: "Lead Instructor",
    ...image("2020-spring/stephen_yu.jpg"),
  },
  {
    name: "Hunter Rocha",
    title: "Lead Instructor",
    ...image("2020-spring/hunter_rocha.jpg"),
  },
  {
    name: "Imani Dawson",
    title: "Instructor's Assistant",
    ...image("2020-spring/imani_dawson.jpg"),
  },
  {
    name: "Martin Linenweber",
    title: "Instructor's Assistant",
    ...image("2020-spring/martin_linenweber.jpg"),
  },
  {
    name: "Anthony Hizon",
    title: "Instructor's Assistant",
    ...image("2020-spring/anthony_hizon.jpg"),
  },
  {
    name: "Minh Phuc Tran",
    title: "Instructor's Assistant",
    ...image("2020-spring/minh_phuc_tran.jpg"),
  },
  {
    name: "Robert Macaibay",
    title: "Instructor's Assistant",
    ...image("2020-spring/robert_macaibay.jpg"),
  },
  {
    name: "Nico Magaña",
    title: "Instructor's Assistant",
    ...image("2020-spring/nico_magana.jpg"),
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
    name: "Alexander Peng",
    ...image("2020-spring-sab/alexander_peng.jpg"),
    title: sabTitle(2020, "Lowell High School"),
  },
  {
    name: "Alyssa Wu",
    ...image("2020-spring-sab/alyssa_wu.jpg"),
    title: sabTitle(2022, "Lowell High School"),
  },
  {
    name: "Bryan De Leon",
    ...image("2020-spring-sab/bryan_de_leon.jpg"),
    title: sabTitle(2020, "Gateway High School"),
  },
  {
    name: "Derick Du",
    ...image("2020-spring-sab/derick_du.jpg"),
    title: sabTitle(2022, "Wallenburg High School"),
  },
  {
    name: "Ernest Sarajyan",
    ...image("2020-spring-sab/ernest_sarajyan.jpg"),
    title: sabTitle(2022, "Washington High School"),
  },
  {
    name: "Johnny Lin",
    ...image("2020-spring-sab/johnny_lin.jpg"),
    title: sabTitle(2022, "Washington High School"),
  },
  {
    name: "Joshua Pan",
    ...image("2020-spring-sab/joshua_pan.jpg"),
    title: sabTitle(2022, "Lowell High School"),
  },
  {
    name: "Oscar Tiong",
    ...image("2020-spring-sab/oscar_tiong.jpg"),
    title: sabTitle(2020, "Lowell High School"),
  },
  {
    name: "Tara Tiong",
    ...image("2020-spring-sab/tara_tiong.jpg"),
    title: sabTitle(2023, "Lowell High School"),
  },
  {
    name: "Trent Taylor III",
    ...image("2020-spring-sab/trent_taylor_iii.jpg"),
    title: sabTitle(2022, "Skyline High School"),
  },
];

const BOARD: TeamMemberProps<BoardTitle>[] = [
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
        SVB Wealth Advisory, Inc.
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
    name: "Bob Ippolito",
    title: "Entrepreneur, Maker of Things",
    ...image("board/bob_ippolito.jpg"),
  },
  {
    name: "Abhay Kumar",
    title: "Investor and Advisor",
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
