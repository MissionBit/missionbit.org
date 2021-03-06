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
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2020-fall-projects/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2020-fall-projects/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2020-fall-projects/${postfix}${k}.jpg?webp`);
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
        title: "Blocky Dungeon",
        students: ["Jinkang Fang, Jack Wu"],
        course: "Intro to Unity Game Design with Stephen",
        description: <>Shoot down skeletons in a blocky dungeon.</>,
        href: "https://jinkang-0.github.io/blocky-dungeons/",
        ...image("blocky-dungeon"),
      },
      {
        title: "Therapy Area",
        students: ["Breanna Durant, Favour Odenyi"],
        course: "Intro to Web Design with Nico",
        description: (
          <>A website that matches users to different therapy options.</>
        ),
        href: "",
        ...image("therapy-area"),
      },
      {
        title:
          "Comparing the 1918 Spanish Flu Pandemic to the Current Covid-19 Pandemic",
        students: ["Caleb Kha, Karina Anders, Kayla"],
        course: "Intro to JavaScript with Christine",
        description: (
          <>
            Examining data from the pandemic of 1918 and the current COVID-19
            pandemic.
          </>
        ),
        href: "https://final-project--karina317.repl.co/",
        ...image("spanish-flu"),
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
        ...image("diverting-route"),
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
        ...image("lights-off"),
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
        ...image("health-bot"),
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
        ...image("fluff"),
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
        ...image("save-fish"),
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
        ...image("question"),
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
        ...image("social-distancing"),
      },
      {
        title: "Flowprism",
        course: "Intro to Web Design with Michael",
        students: ["Ashley Hom, Ethan Ellis"],
        description: <>A music player and news website.</>,
        href: "https://ethan-ellis13.github.io/flowprism/",
        ...image("flowprism"),
      },
      {
        title: "Python Portfolio",
        course: "Intro to Python with Hunter",
        students: ["Octavio Lomeli-Castro"],
        description: <>Portfolio with multiple python applications.</>,
        href: "https://flask-site.octaviolomeli.repl.co/",
        ...image("python-portfolio"),
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
        ...image("infestation"),
      },
      {
        title: "SF History",
        course: "Intro to Web Design with Michael",
        students: ["Cindy Zhou, Kevin Jung"],
        description: <>History of different neighborhoods in SF.</>,
        href: "https://kevinj1120.github.io/",
        ...image("sf-history"),
      },
      {
        title: "Rainbow Snake",
        course: "Intro to Python with Hunter",
        students: ["Rachel Lee, Sally Hong"],
        description: <>A fun & colorful snake game</>,
        href: "https://repl.it/@YewonLee1/Snakegame#main.py",
        ...image("py-game"),
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
        ...image("cube-rush"),
      },
      {
        title: "Eco Find",
        course: "Intro to Web Design with Michael",
        students: ["Kaitlyn Wong"],
        description: <>An online store that sells eco friendly products</>,
        href: "https://kaitlynnwong.github.io/",
        ...image("eco-find"),
      },
      {
        title: "-",
        course: "Intro to Python with Hunter",
        students: ["Vincent Ruan, Jalyn McFarland"],
        description: <>Music Player</>,
        href: "",
        ...image("Placeholder"),
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
        ...image("haunted-house"),
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
        ...image("covaid"),
      },
      {
        title: "-",
        course: "Intro to Python with Hunter",
        students: ["Kevin Tang, Jason Zhong"],
        description: <>Mini Games Bot</>,
        href: "",
        ...image("Placeholder"),
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
        ...image("boulder"),
      },
      {
        title: "The Real Heroes",
        course: "Intro to Web Design with Michael",
        students: ["Murray Bennett"],
        description: <>Information about famous Black civil rights leaders.</>,
        href: "https://murray88.github.io/",
        ...image("real-heroes"),
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
        ...image("text"),
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
        ...image("mask"),
      },
      {
        title: "Ronnie's Corner",
        course: "Intro to Web Desig with Michael",
        students: ["Veronica Velasquez Macias"],
        description: <>A online store where users can customize gifts</>,
        href: "https://ronnies-corner.github.io/ronnies-corner.githb.io/",
        ...image("ronnie"),
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
        ...image("bot"),
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
        ...image("lone"),
      },
      {
        title: "Air Pollution Demo Day Project",
        course: "Intro to JavaScript with Christine",
        students: ["Nate Sirivallop, Phillip Chin, Ming Wei Huang"],
        description: <>Project is about levels of PM2.5 in a few countries.</>,
        href: "https://parchedwavykeyboard--nsirival1.repl.co/",
        ...image("air-pollution"),
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
        ...image("exodia"),
      },
    ],
  },
  {
    room: "Breakout Room 11",
    projects: [
      {
        title: "Checklist",
        course: "Intro to Web Design with Nico",
        students: ["Agnes Liang, Jessica Lin"],
        description: (
          <>
            A website that provides educational, food, health, etc. resources to
            students.
          </>
        ),
        href: "https://jebbica.github.io/",
        ...image("checklist"),
      },
      {
        title: "San Francisco",
        course: "Intro to JavaScript with Christine",
        students: ["Sophia Liang, Shania Hao, Ethan Xu"],
        description: (
          <>
            San Francisco is a great city, many people love to visit here, here
            are some great aspects and statistics of San Francisco!
          </>
        ),
        href: "https://sfproject--shaniahao.repl.co/",
        ...image("city-sf"),
      },
      {
        title: "Lissin",
        course: "Intro to Python with Alex",
        students: ["Allistair Larson, Ramiro Hernandez, Ryan Yu"],
        description: (
          <>
            Suggests tops artist from Spotify and gives top ten songs from
            chosen artist. Click "View Project" and click the green button
            "Run".
          </>
        ),
        href:
          "https://repl.it/@Ramiromp4/SpectacularDownrightTransversals#main.py",
        ...image("lissin"),
      },
    ],
  },
  {
    room: "Breakout Room 12",
    projects: [
      {
        title: "Self Care",
        course: "Intro to Web Design with Nico",
        students: ["Angelo Ubas, Rachel Zhong"],
        description: <>A website that exposes users self care resources.</>,
        href: "https://raycho-030.github.io/",
        ...image("self-care"),
      },
      {
        title: "Mental Health 101",
        course: "Intro to JavaScript with Christine",
        students: ["Christine Chen, Jack C., Laywaddi Khine"],
        description: (
          <>
            Project is about mental health awareness and how COVID has affected
            people's mental health.
          </>
        ),
        href: "https://fall-demo-day--christine05chen.repl.co/",
        ...image("mental-health"),
      },
    ],
  },
];

export default StudentProjectRooms;
