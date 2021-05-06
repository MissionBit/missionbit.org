import * as React from "react";

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
      jpg: require(`public/images/demoday/2021-spring-projects/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2021-spring-projects/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(`public/images/demoday/2021-spring-projects/${postfix}${k}.jpg?webp`);
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
        title: "Stuck in My Fantasy",
        students: ["Bonnie Huang, Brianna Lopez, Ki'ilani Versoza"],
        course: "Intro to Unity Game Design with Shay",
        description: (
          <>
            Stuck In My Fantasy is a 3D puzzle platforming game that is played
            in the prospective of a poor teenage boy who works as a butler for
            another boy around his age. From puzzle to puzzle, this game shows
            how an income gap doesn't affect these two teenagers as they
            discover each other's similarity and become life long partners.
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "-",
        students: ["Isaiah Murillo"],
        course: "VR with Kevin",
        description: (
          <>
            Go beneath the surface and explore abandoned caves filled with
            ominous creatures crawling and climbing through out your journey.
            good luck{" "}
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "San Foodcisco",
        students: ["Zeus Flores, Leslie Hernandez, Bettie Tan"],
        course: "Intro to Web Design with Cameron",
        description: (
          <>
            A website that has information on some neighborhoods in San
            Francisco and the restaurants within them that serve different kinds
            of food for a good price.
          </>
        ),
        href: "https://lesliex1.github.io/san-foodcisco/",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "Diverting Route",
        students: ["Natalie Huang, Rosaline Lee"],
        course: "Intro to Unity Game Design with Stephen",
        description: (
          <>
            Collect healthy food in a food dessert or pick up presents for this
            holiday season!!! 🌵🎄 Diverting route is an endless runner game
            where players try to last for as long as possible and gets the
            highest score 🤩
          </>
        ),
        href: "https://natalie-huang.github.io/diverting-route-game/",
        ...image("placeholder"),
      },
      {
        title: "Lights Off!",
        students: ["Christine Shen, Dylan Wong"],
        course: "Intro to Web Design with Nico",
        description: (
          <>
            A website that informs users about energy conservation. Also
            includes a game to help reinforce it.
          </>
        ),
        href: "https://cshen7.github.io",
        ...image("placeholder"),
      },
      {
        title: "Healthbot",
        students: ["Caitlyn Wong & Zhenyu Yu"],
        course: "Intro to Python with Hunter",
        description: (
          <>
            Do ever need someone to talk to or check in with? Healthbot is a
            python created helper that checks in with you to see where you are
            at with your mental health. It provides resources and mini surveys
            for you to complete while you talk about your emotions! Instructions
            on how to run the project are on the left as soon as you click "View
            Project".
          </>
        ),
        href: "https://repl.it/@caitwong/finalproject#finaltest.py",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "Fluff",
        course: "Intro to Unity Game Design with Stephen",
        students: ["Judy Ng, Michelle Chen"],
        description: <>Fly like flappy bird and last as long as possible</>,
        href: "https://michen1.github.io/fluff/",
        ...image("placeholder"),
      },
      {
        title: "Save the Fish",
        course: "Intro to Web Design with Nico",
        students: ["Denica Tran, Elian Montano, Spencer Lee"],
        description: (
          <>
            A website that shows users how plastic consumption affects the
            ocean.
          </>
        ),
        href: "https://elianchief.github.io/",
        ...image("placeholder"),
      },
      {
        title: "Questionnaire",
        course: "Intro to Python with Hunter",
        students: ["Ben Sirivallop, Gerald Aguirre"],
        description: (
          <>
            This project is a questionnaire which asks questions related to the
            symptoms of Coronavirus, if the program realizes that you answered
            "Yes" to several of the questions, it will probably suggest that you
            go and take the COVID-19 test, it also stores your answers which can
            be interesting and helpful for your doctor. Click "View Project" and
            click the green button "Run".
          </>
        ),
        href: "https://repl.it/@bennables/Demo-day-python#main.py",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Social Distancing Game: Stay Away From Me",
        course: "Intro to Unity Game Design with Stephen",
        students: ["Sam Dunn, Tysir Awadalla"],
        description: (
          <>
            Do your best to make it to the pharmacy without bumping into
            strangers along the way. Click on the link and press "Play".
          </>
        ),
        href: "https://gamejolt.com/games/socialdistancing-game/564409",
        ...image("placeholder"),
      },
      {
        title: "Flowprism",
        course: "Intro to Web Design with Michael",
        students: ["Ashley Hom, Ethan Ellis"],
        description: <>A music player and news website.</>,
        href: "https://ethan-ellis13.github.io/flowprism/",
        ...image("placeholder"),
      },
      {
        title: "Python Portfolio",
        course: "Intro to Python with Hunter",
        students: ["Octavio Lomeli-Castro"],
        description: <>Portfolio with multiple python applications.</>,
        href: "https://flask-site.octaviolomeli.repl.co/",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "Infestation",
        course: "Intro to Unity Game Design with Stephen",
        students: ["Lindsey Tong, Andrew Tam"],
        description: <>Stop the bugs from stealing fruit from the tree!</>,
        href: "https://ltong03.github.io/infestation/",
        ...image("placeholder"),
      },
      {
        title: "SF History",
        course: "Intro to Web Design with Michael",
        students: ["Cindy Zhou, Kevin Jung"],
        description: <>History of different neighborhoods in SF.</>,
        href: "https://kevinj1120.github.io/",
        ...image("placeholder"),
      },
      {
        title: "Rainbow Snake",
        course: "Intro to Python with Hunter",
        students: ["Rachel Lee, Sally Hong"],
        description: <>A fun & colorful snake game</>,
        href: "https://repl.it/@YewonLee1/Snakegame#main.py",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Cube Rush",
        course: "Intro to Unity Game Design with Christopher",
        students: ["Marquis Ellis"],
        description: (
          <>
            A fast-paced game that tests your skills at dodging through
            obstacles.
          </>
        ),
        href: "https://trickyvortexyt.github.io/Cube-Rush/",
        ...image("placeholder"),
      },
      {
        title: "Eco Find",
        course: "Intro to Web Design with Michael",
        students: ["Kaitlyn Wong"],
        description: <>An online store that sells eco friendly products</>,
        href: "https://kaitlynnwong.github.io/",
        ...image("placeholder"),
      },
      {
        title: "-",
        course: "Intro to Python with Hunter",
        students: ["Vincent Ruan, Jalyn McFarland"],
        description: <>Music Player</>,
        href: "",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 7",
    projects: [
      {
        title: "The Haunted House",
        course: "Intro to Unity Game Design with Christopher",
        students: ["Keke Ning"],
        description: (
          <>
            You are a ghost that has been sleeping for 2000 years, and one day a
            group of people are having a party in YOUR HOUSE. The most important
            thing is that they disturbed your sleep, so they either get out of
            the house or become a ghost. Click the link and press "Play".
          </>
        ),
        href: "https://gamejolt.com/games/TheHauntedHouse/564107",
        ...image("placeholder"),
      },
      {
        title: "CovAid",
        course: "Intro to Web Design with Michael",
        students: ["Katy Hu, Tyler Choi, Katy Yang"],
        description: (
          <>
            A website that will help people in SF find resources to help them
            through the pandemic.
          </>
        ),
        href: "https://tylerchoi1.github.io/",
        ...image("placeholder"),
      },
      {
        title: "-",
        course: "Intro to Python with Hunter",
        students: ["Kevin Tang, Jason Zhong"],
        description: <>Mini Games Bot</>,
        href: "",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 8",
    projects: [
      {
        title: "Boulder Game",
        course: "Intro to Unity Game Design with Christopher",
        students: ["Aaron Yu, Owen Huanbutta, Sedrick Wang"],
        description: <>Run away from the boulder and get to the finish line.</>,
        href: "https://owenhuanbutta.github.io/Boulder-Game/",
        ...image("placeholder"),
      },
      {
        title: "The Real Heroes",
        course: "Intro to Web Design with Michael",
        students: ["Murray Bennett"],
        description: <>Information about famous Black civil rights leaders.</>,
        href: "https://murray88.github.io/",
        ...image("placeholder"),
      },
      {
        title: "Text-Adventure",
        course: "Intro to Python with Alex",
        students: ["Andrew Li, Kingsley Lam, Jordan Lei"],
        description: (
          <>
            Text-based-adventure, bringing awareness to socioeconomically
            disadvantage students. Click "View Project" and click the green
            button "Run".
          </>
        ),
        href: "https://repl.it/@alexanduh/Finalproject#README.md",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 9",
    projects: [
      {
        title: "Mask Up",
        course: "Intro to Unity Game Design with Christopher",
        students: ["Austin Choi, Wenna Luu"],
        description: (
          <>Give everyone a mask and stay safe. Go fullscreen to play.</>
        ),
        href: "https://luuw.github.io/Mask-Up/",
        ...image("placeholder"),
      },
      {
        title: "Ronnie's Corner",
        course: "Intro to Web Desig with Michael",
        students: ["Veronica Velasquez Macias"],
        description: <>A online store where users can customize gifts</>,
        href: "https://ronnies-corner.github.io/ronnies-corner.githb.io/",
        ...image("placeholder"),
      },
      {
        title: "SurveyBot",
        course: "Intro to Python with Alex",
        students: ["Elijah Arrington, George Brooder, Tyler Huanbutta"],
        description: (
          <>
            A Bot designed to create surveys for discord, also giving positive
            messages to create a positive environment for the users and the
            channel.
          </>
        ),
        href: "https://www.youtube.com/watch?v=Po5DGwRwXH0",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 10",
    projects: [
      {
        title: "Lone Survivor and Zombie Genocide",
        course: "Intro to Unity Game Design with Christopher",
        students: ["Carlo Dagandan, Kayden Chan, Wesley Guan"],
        description: (
          <>
            A lost man stuck between the midst of a dusted area strives to
            survive when groups of zombies begin to approach him.
          </>
        ),
        href:
          "https://weissss-hub.github.io/The-Lone-Survivor-and-Zombie-Genocide/",
        ...image("placeholder"),
      },
      {
        title: "Air Pollution Demo Day Project",
        course: "Intro to JavaScript with Christine",
        students: ["Nate Sirivallop, Phillip Chin, Ming Wei Huang"],
        description: <>Project is about levels of PM2.5 in a few countries.</>,
        href: "https://parchedwavykeyboard--nsirival1.repl.co/",
        ...image("placeholder"),
      },
      {
        title: "Exodia",
        course: "Intro to Python with Alex",
        students: ["Jacky Huang, Angelo Linsleyrusso, Jonathan Tran"],
        description: (
          <>
            A hands-on interactive experience with a "Choose Your Own Adventure"
            game, with the aim to give an overall enjoyable experience
            all-the-while satisfying the community values. Click "View Project"
            and click the green button "Run".
          </>
        ),
        href: "https://repl.it/@alexanduh/Exodia-1#README.md",
        ...image("placeholder"),
      },
    ],
  },
];

export default StudentProjectRooms;
