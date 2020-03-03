export interface TeamMemberProps<T extends string> {
  name: string;
  title?: T;
  image: string;
}

type TeamTitle =
  | "Chief Executive Officer"
  | "Director of Curriculum"
  | "Program Manager"
  | "Videographer";

type BoardTitle = string;

type TeacherTitle = "Lead Instructor" | "Instructor's Assistant";

const TEAM: TeamMemberProps<TeamTitle>[] = [
  {
    name: "Christina Ortega",
    title: "Chief Executive Officer",
    image: "core/christina_ortega.jpg"
  },
  {
    name: "Cora Monokandilos",
    title: "Director of Curriculum",
    image: "core/cora_monokandilos.jpg"
  },
  {
    name: "Cynthia Chin",
    title: "Program Manager",
    image: "core/cynthia_chin.jpg"
  },
  {
    name: "David Topete",
    title: "Videographer",
    image: "core/david_topete.jpg"
  }
];

const TEACHERS: TeamMemberProps<TeacherTitle>[] = [
  {
    name: "Shinjini Nunna",
    title: "Lead Instructor",
    image: "2020-spring/shinjini_nunna.jpg"
  },
  {
    name: "Christopher Louie",
    title: "Lead Instructor",
    image: "2020-spring/christopher_louie.jpg"
  },
  {
    name: "Georgina Cruz",
    title: "Lead Instructor",
    image: "2020-spring/georgina_cruz.jpg"
  },
  {
    name: "Gustavo Salas",
    title: "Lead Instructor",
    image: "2020-spring/gustavo_salas.jpg"
  },
  {
    name: "Stephen Yu",
    title: "Lead Instructor",
    image: "2020-spring/stephen_yu.jpg"
  },
  {
    name: "Hunter Rocha",
    title: "Lead Instructor",
    image: "2020-spring/hunter_rocha.jpg"
  },
  {
    name: "Imani Dawson",
    title: "Instructor's Assistant",
    image: "2020-spring/imani_dawson.jpg"
  },
  {
    name: "Martin Linenweber",
    title: "Instructor's Assistant",
    image: "2020-spring/martin_linenweber.jpg"
  },
  {
    name: "Anthony Hizon",
    title: "Instructor's Assistant",
    image: "2020-spring/anthony_hizon.jpg"
  },
  {
    name: "Minh Phuc Tran",
    title: "Instructor's Assistant",
    image: "2020-spring/minh_phuc_tran.jpg"
  },
  {
    name: "Robert Macaibay",
    title: "Instructor's Assistant",
    image: "2020-spring/robert_macaibay.jpg"
  },
  {
    name: "Nico Magaña",
    title: "Instructor's Assistant",
    image: "2020-spring/nico_magana.jpg"
  }
];

const STUDENT_ADVISORY_BOARD: TeamMemberProps<never>[] = [
  { name: "Alexander Peng", image: "2019-sab/alexander_peng.jpg" },
  { name: "Bryan De Leon", image: "2019-sab/bryan_de_leon.jpg" },
  { name: "Derick Du", image: "2019-sab/derick_du.jpg" },
  { name: "Ernest Sarajyan", image: "2019-sab/ernest_sarajyan.jpg" },
  { name: "Oscar Tiong", image: "2019-sab/oscar_tiong.jpg" },
  { name: "Tara Tiong", image: "2019-sab/tara_tiong.jpg" },
  { name: "Trent Taylor III", image: "2019-sab/trent_taylor_iii.jpg" }
];

const BOARD: TeamMemberProps<BoardTitle>[] = [
  {
    name: "Brian Clark",
    title: "Engineering Manager at Cruise Automation",
    image: "board/brian_clark.jpg"
  },
  {
    name: "Clive Downie",
    title: "CMO, Unity Technologies",
    image: "board/clive_downie.jpg"
  },
  {
    name: "Bob Ippolito",
    title: "Entrepreneur, Maker of Things",
    image: "board/bob_ippolito.jpg"
  },
  {
    name: "Mark Jacobson",
    title: "Founder & CEO at Terrain Advisors",
    image: "board/mark_jacobson.jpg"
  },
  {
    name: "Abhay Kumar",
    title: "Investor and Advisor",
    image: "board/abhay_kumar.jpg"
  },
  {
    name: "Jill McNay",
    title: "Marketing Professional",
    image: "board/jill_mcnay.jpg"
  },
  {
    name: "Sam Purtill",
    title: "Co-Founder & CTO at Jyve",
    image: "board/sam_purtill.jpg"
  },
  {
    name: "Jeff Schnitz",
    title: "SVB Wealth Advisory, Inc.",
    image: "board/jeff_schnitz.jpg"
  },
  {
    name: "Farid Vij",
    title: "Head of Corporate Development at Ciitizen",
    image: "board/farid_vij.jpg"
  },
  {
    name: "Michael Walker",
    title: "Principal Consultant, BrandGeneering, Inc",
    image: "board/michael_walker.jpg"
  },
  {
    name: "Saskia Leggett",
    title: "Learning Experience Designer",
    image: "board/saskia_leggett.jpg"
  }
];

const TeamData = [
  { section: "Team", members: TEAM },
  { section: "Teachers", members: TEACHERS },
  { section: "Student Advisory Board", members: STUDENT_ADVISORY_BOARD },
  { section: "Board", members: BOARD }
];

export default TeamData;
