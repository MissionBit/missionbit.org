import * as React from "react";

export interface StudentProjectRoomProps {
  readonly room: string;
  readonly projects: readonly ProjectProps[];
}

export interface ProjectProps {
  readonly title: string;
  readonly students: readonly string[];
  readonly description: React.ReactNode;
  readonly href: string;
  readonly image: {
    readonly jpg: string;
    readonly webp: string;
    readonly srcSet: string;
  };
}

const PHOTO_SIZES = {
  "": { width: 600, height: 600 },
  // "@0.5x": { width: 300, height: 300 },
} as const;

function image(postfix: string): Pick<ProjectProps, "image"> {
  // const SIZE_ORDER = ["@0.5x", ""] as const;
  const SIZE_ORDER = [""] as const;
  return {
    image: {
      jpg: require(`public/images/demoday/2020-summer-projects/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-summer-projects/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2020-summer-projects/${postfix}${k}.jpg?webp`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
    },
  };
}

export const StudentProjectRooms: readonly StudentProjectRoomProps[] = [
  {
    room: "Breakout Room 1",
    projects: [
      {
        title: "Placeholder",
        students: ["William Tran"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Nature Girl & Hunter Boy",
        students: ["Maia Piomelli", "Carmen Li"],
        description: (
          <>
            Just like the iconic Fireboy & Watergirl game, both NatureGirl and
            HunterBoy travel the world together to discard garbage while
            overcoming obstacles on the way, thus making the Earth a cleaner
            place to live.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
      {
        title: "Hi-Tech",
        students: ["Sabrina Fang", "Benji Gin", "Nate Sirivallop"],
        description: (
          <>
            We are designing a page showcasing three futuristic tech products:
            self-driving cars, AI, and maglev bullet trains.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
      {
        title: "Gen Z Alliance",
        students: ["Matthew Kong", "Winnie Qi", "Connie Wang"],
        description: (
          <>
            Gen Z Alliance is a website that includes desciptions of
            propositions and elections, allowing voters to know who and what
            they are voting for.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "Placeholder",
        students: ["Joseph Blackett"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "The Escape",
        students: ["Noah Chan", "Kevin Jung"],
        description: (
          <>
            You are trying to make it to the end while being chased by the
            monster.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
      {
        title: "BookStrap",
        students: [
          "Ben Sirivallop",
          "Malika Vahobova",
          "Christine Chen",
          "Max Xu",
        ],
        description: (
          <>
            Find your next favorite book today! Our site is full of books and
            resources on where you can find them!
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "Placeholder",
        students: ["Terry Wong"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Placeholder",
        students: ["Nolan Louie", "Zachary Yieh"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "BigFoot",
        students: ["Caitlyn Wong"],
        description: (
          <>
            BigFoot is a shoe brand that creates inexpensive and trendy wide
            shoes.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
      {
        title: "GreenWorld",
        students: ["Marie Nido", "Alex Stewart"],
        description: (
          <>
            An informational website of the planet and its current status as of
            2020.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Placeholder",
        students: ["Zhenyu Yu", "Eric Chen"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "FPS Zombie Game",
        students: ["Simon Zhao", "Nikita Kartsev"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Learin",
        students: ["Ashley Chan"],
        description: (
          <>
            Learin is a website offering underprivileged youth equal education.
            It is a platform for teachers and tutors to submit educational
            videos and articles, so that students who can’t afford tutoring can
            still get help. Students can also interact with teachers and tutors
            if they need help on something.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
      {
        title: "Bazaar Hall",
        students: ["Tyler Keegan", "Ken Lin"],
        description: (
          <>
            A place for professionals to share their work and attract clients.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "Placeholder",
        students: ["Kary Lin", "Nate Tesler", "Jackey Li"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Quiz Time",
        students: ["Octavio Lomeli-castrohao"],
        description: (
          <>
            Quiz time is a website that contains three quizzes for the user to
            attempt. (Math, HTML/CSS, and other random topics)
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "SF Chopsticks",
        students: ["Grace Chen", "Natalie Huang"],
        description: (
          <>
            Through our “SF Chopsticks” project, we hope to introduce some of
            our favorite food discoveries in the city that we believe to be a
            must try for everyone.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_b"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Placeholder",
        students: ["Jennifer Wong", "Shania Hao", "Gavin Scott"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Placeholder",
        students: ["Ian Kwan"],
        description: (
          <>Project description. 1-2 sentences. This is placeholder content.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Cookie Clicker",
        students: ["Jinkang Fang"],
        description: (
          <>A cookie game about clicking cookies and getting more cookies. :)</>
        ),
        href: "https://jinkang-0.github.io/MB-Final/public/play.html",
        ...image("cookie-clicker"),
      },
    ],
  },
  {
    room: "Breakout Room 7",
    projects: [
      {
        title: "Monster Lab",
        students: ["Matthew Lau", "Mateo Jeremias-Lin"],
        description: (
          <>
            A game where you can roam around the map fighting zombies and
            defeating a final boss inside a laboratorydescription.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Squid Boba",
        students: ["Laura Trinh", "Oswen Martinez", "Allison Sam"],
        description: (
          <>
            We created a website for our boba company with information about
            what our shop offers and why it’s extra special.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Placeholder",
        students: ["LiTong Liu"],
        description: <>Placeholder</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
    ],
  },
  {
    room: "Breakout Room 8",
    projects: [
      {
        title: "Ransacked",
        students: ["Kevin Soo", "Jordan Lewis"],
        description: <>Save the city from zombies.</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Know Your Rights",
        students: ["Amanda Chang", "Curtis Chen"],
        description: (
          <>
            Want to know your rights and how you got them? This website is an
            introduction to the Bill of Rights and the Constitution as well as
            informing you of your rights as a protestor.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Paulina's Online Store",
        students: ["Klester Hernandez"],
        description: <>We sell purses online for the best prices.</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
    ],
  },
  {
    room: "Breakout Room 9",
    projects: [
      {
        title: "Rocket Game",
        students: ["Jack Bobadilla"],
        description: (
          <>
            You have a rocket launcher and you can use explosions to jump with
            it.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "COVID-19 Info",
        students: ["Audrey Lau", "Cheryl Chen", "Jeffrey Popek"],
        description: (
          <>
            Informational website about COVID-19 with resources on safety,
            recent news updates, and donations (also available in Chinese for
            non-English speakers).
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Life: The MMO",
        students: ["Kevin Tan"],
        description: (
          <>
            Remember life the board game? Well a different creator tried to make
            it a massively multiplayer online game.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
    ],
  },
  {
    room: "Breakout Room 10",
    projects: [
      {
        title: "Time for Golf",
        students: ["Isabel Wong", "Ian Wong"],
        description: <>Outdoor mini golf game with fun and unique tricks.</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Arizmendi Bakery",
        students: ["Prathmesh Sonawane"],
        description: (
          <>
            My Demo Day project is a front-end remake of Arizmendi Bakery, a
            local bakery's website. Using HTML and CSS, I created a more
            stylistic website that appeals more to the user by offering better
            UX and UI.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Sanrio Resale",
        students: ["Kayla Tran"],
        description: (
          <>
            Sanrio Resale and it is a website designed for users to resell
            Sanrio merchandise. You can buy/bid on merchandise.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
    ],
  },
  {
    room: "Breakout Room 11",
    projects: [
      {
        title: "Flying Game",
        students: ["Ling Ren", "Victoria Perez-Cruz"],
        description: (
          <>Fly though a maze of obstacles and try not to get hit.</>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "protests.com",
        students: ["Victoria Oguta"],
        description: (
          <>
            Create and locate local protests to be a part of something greater.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Placeholder",
        students: ["Liyah Khaoone"],
        description: <>Placeholder</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
    ],
  },
  {
    room: "Breakout Room 12",
    projects: [
      {
        title: "Zombie Escape",
        students: ["Tristan Popek", "Jayden Khaoone"],
        description: <>A FPS survival game where zombies try to attack you.</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "OpporTEENitites",
        students: ["Karina Anders"],
        description: (
          <>
            Opporteenity is a website that allows teens to discover
            opportunities that will help them develop their passions.
            Oppoteenities features volunteering opportunities, programs,
            internships, and resources to learn new things.
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
      {
        title: "Placeholder",
        students: ["Jason Siu"],
        description: <>Placeholder</>,
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("project_a"),
      },
    ],
  },
];

export default StudentProjectRooms;
