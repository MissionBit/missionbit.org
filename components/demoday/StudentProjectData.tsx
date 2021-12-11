import * as React from "react";
import { StaticImageImport } from "src/image";

export interface StudentProjectRoomProps {
  readonly room: string;
  readonly projects: readonly ProjectProps[];
}

export interface ProjectProps {
  readonly title: string;
  readonly course: string;
  readonly students: readonly string[];
  readonly description: React.ReactNode;
  readonly href: string;
  readonly image: StaticImageImport;
}

function image(postfix: string): Pick<ProjectProps, "image"> {
  return {
    image:
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-fall-projects/${postfix}.jpg`)
        .default,
  };
}

export const StudentProjectRooms: readonly StudentProjectRoomProps[] = [
  {
    room: "Breakout Room 1",
    projects: [
      {
        title: "Luigi's Adventure",
        students: ["Malcolm Angst, Joanne Chen, Pedro Navarrete Gonzalez"],
        course: "Intro to Python with Angela",
        description: (
          <>
            Mario has kidnapped Princess Peach and it is up to you, Luigi, to
            save her.
          </>
        ),
        href: "https://replit.com/@joannechen3/adventure-game?v=1",
        ...image("adventure"),
      },
      {
        title: '"Can" You Pick It Up?',
        students: ["Han Ngo"],
        course: "Intro to Unity with Ranjan",
        description: (
          <>
            Game about picking up as much trash as you can in 30 seconds + Fun
            Facts at the end
          </>
        ),
        href: "https://han-ngo16.github.io/Can-You-Pick-It-Up/",
        ...image("pick"),
      },
      {
        title: "Virtual Illustration Studio",
        students: ["Ismael Peralta"],
        course: "Intro to VR with Scott",
        description: (
          <>Think IRL studio space is too expensive? Here's your answer!</>
        ),
        href: "https://youtu.be/gJchxf_CvIA",
        ...image("art"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "Guess the Word",
        students: ["Yuli ZhangHung, Afia Shaikh, Abel Gutierrez"],
        course: "Intro to Python with Angela",
        description: (
          <>
            This game focuses on the user having to guess the randomly generated
            word. You can create a list from which the word would have to be
            guessed and also set a cap on the number of guesses allowed
          </>
        ),
        href: "https://replit.com/@AbelG4/MissionBit-1?v=1",
        ...image("guesser"),
      },
      {
        title: "Movingjump",
        students: ["Emmanuel Odenyi"],
        course: "Intro to Unity Game Design with Ranjan",
        description: (
          <>
            2D endless sidescroller where you dodge a never-ending stream of
            deadly blocks
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Drum Team",
        students: ["Kevin Cao"],
        course: "Intro to JavaScript with Wilson",
        description: <>Interactive Piano and Drum Kit</>,
        href: "https://kevin-joseph-drumpiano-kit-project.kevincao10.repl.co/",
        ...image("piano"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "Hangman",
        course: "Intro to Python with Angela",
        students: ["Qinghe Mai, Chloe Wu, Ayannah Pruitt"],
        description: (
          <>
            The object is for one player to guess the letters of an unknown word
            before the player who knows the word creates a stick figure of a
            hanged man by drawing one line for each incorrect guess.
          </>
        ),
        href: "https://replit.com/@ChloeWu5/MissionBit?v=1",
        ...image("hangman"),
      },
      {
        title: "A vs Z",
        course: "Intro to Unity Game Design with Ranjan",
        students: ["Praise Odenyi"],
        description: (
          <>Kill the zombies and collect items to get to the boss.</>
        ),
        href: "https://play.unity.com/mg/other/a-vs-z-n2",
        ...image("a"),
      },
      {
        title: "Image Team",
        course: "Intro to JavaScript with Wilson",
        students: ["Cindy Zhou, Kathleen Zapata"],
        description: (
          <>
            A website to help spread awareness about the increased cases of
            COVID-19 in San Francisco highschools.
          </>
        ),
        href: "https://covid-in-sf-highschools.kathleenzz.repl.co",
        ...image("covid"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Playlists",
        course: "Intro to Web Design with Georgina",
        students: ["Angela So & Maya Murakami"],
        description: (
          <>
            Our website is created to help people save time by finding different
            playlists easier. We provide playlists with various artists, songs,
            and genres to help meet your mood.
          </>
        ),
        href: "https://playlist-website.glitch.me/",
        ...image("music"),
      },
      {
        title: "",
        course: "Intro to Unity Game Design with Ranjan",
        students: ["Welmer Carvajal"],
        description: (
          <>
            An endless sidescroller where you play as a ghost that avoids mines
            and tries to survive as long as possible
          </>
        ),
        href: "-",
        ...image("placeholder"),
      },
      {
        title: "Clock Team",
        course: "Intro to JavaScript with Wilson",
        students: ["Hao Zhou, Heldana Abaraham, Victor Cruz"],
        description: (
          <>Advanced clock representing new year and covid impacts in 2021</>
        ),
        href: "https://clock-team.980378285haozho.repl.co/",
        ...image("clock"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "SFBeats",
        course: "Intro to Web Design with Georgina",
        students: ["Diego Valdez & Jason Lau"],
        description: (
          <>
            SFBeats is a website that caters to people interested in Hip Hop and
            Rap artists in the bay area.
          </>
        ),
        href: "https://mercury-ringed-citron.glitch.me/",
        ...image("sfbeats"),
      },
      {
        title: "Gunslinger",
        course: "Intro to VR with Scott",
        students: ["Dietrich Whitley"],
        description: <>A Divine Chaos of Martial Machinery!</>,
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Gladiator Strikedown",
        course: "Intro to Unity Game Design with Ranjan",
        students: ["Connie Huang"],
        description: (
          <>
            3D top-down combat game where you face off in a duel to the death
            against another gladiator
          </>
        ),
        href: "https://youtu.be/QH08mA0MfHY",
        ...image("gladiator"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Ocean Guards",
        course: "Intro to Web Design with Georgina",
        students: ["Sarai Lopez, Sydney Ouyang, & Rigoberto Morales"],
        description: (
          <>
            Our website is about the ocean and provides information about how
            plastics are harmful to the ocean life. We also provide
            organizations that you can donate to in order to help bring change.
          </>
        ),
        href: "https://ocean-guards.glitch.me/",
        ...image("ocean"),
      },
      {
        title: "Andy Candy",
        course: "Intro to VR with Scott",
        students: ["Anh Vo"],
        description: (
          <>
            Andy Candy rocks your dessert universe with more pastries then could
            ever be assembled IRL!
          </>
        ),
        href: "https://youtu.be/xGAIvOMPRSg",
        ...image("andy"),
      },
      {
        title: "Spikey",
        course: "Intro to Unity Game Design with Ranjan",
        students: ["Johny Cornejo"],
        description: <>Avoid obstacles and collect stuff!</>,
        href: "-",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 7",
    projects: [
      {
        title: "Metroidvania",
        students: ["Brian Quintanilla"],
        course: "Intro to Unity Game Design with Ranjan",
        description: (
          <>
            2D metroidvania where the player collects keys and beats bosses to
            progress to the next area
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Soul Rising",
        students: ["Jordan Lewis"],
        course: "Intro to VR with Scott",
        description: <>Escape the trap by rising above it!</>,
        href: "https://youtu.be/KVefRcBcZt0",
        ...image("soul"),
      },
      {
        title: "Data Team",
        course: "Intro to JavaScript with Wilson",
        students: ["Ysabel Saavedra"],
        description: (
          <>
            A website to inform others on popular Music genres and streaming
            platforms.
          </>
        ),
        href: "https://htmlcssjs-chartjs-walkthrough-2.ysabelbianca.repl.co/",
        ...image("music2"),
      },
    ],
  },
];

export default StudentProjectRooms;
