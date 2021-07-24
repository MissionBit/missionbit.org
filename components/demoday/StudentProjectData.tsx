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
      jpg: require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-projects/${postfix}.jpg`),
      srcSet: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-projects/${postfix}${k}.jpg`);
        return `${fn} ${PHOTO_SIZES[k].width}w`;
      }).join(","),
      webp: SIZE_ORDER.map((k) => {
        const fn = require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2021-summer-projects/${postfix}${k}.jpg?webp`);
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
        title: "Participation is Mandatory",
        students: ["Blue Geisinger"],
        course: "Intro to Unity Game Design with Daniel",
        description: <>A puzzle game without puzzles.</>,
        href:
          "http://bluubonic.itch.io/participation-is-mandatory-demo-day-2021",
        ...image("puzzle"),
      },
      {
        title: "Bub's World",
        students: ["Kira Allen, Victoria Vella, Carolina Hernandez"],
        course: "Intro to Unity with Joe",
        description: (
          <>
            Bub's World is a first person shooter zombie game from the
            perspective of the zombie.
          </>
        ),
        href:
          "https://konekomiaow.github.io/BubsWorld/BubsWorldFinal/index.html",
        ...image("bub"),
      },
      {
        title: "Bunny Python",
        students: ["Emily Yan, Dina Wu"],
        course: "Intro to Python with Ai",
        description: <>Python review game</>,
        href: "https://replit.com/@Emilyyaan12/Bunny-Python-Game#main.py",
        ...image("bunny"),
      },
      {
        title: "Cost of Living SF",
        students: ["Fabian Mantilla, Rafael Perez, Zeus Flores"],
        course: "Intro to JavaScript with Wilson",
        description: <>PVisualization of SF rent prices.</>,
        href: "https://js-final-project.zeusflores85.repl.co/",
        ...image("rent"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "SQUEAKYTOWN HERO",
        students: ["Claudia Reyes"],
        course: "Intro to Unity Game Design with Daniel",
        description: (
          <>
            SQUEAKYTOWN HERO is all about reducing waste! It shows how small
            things like collecting trash from the streets is a small solution to
            big problems that affect the environment.
          </>
        ),
        href: "https://clreyes1.github.io/STownHero1/",
        ...image("squeaky"),
      },
      {
        title: "Animal Run",
        students: ["Nathaniel Mejia Yoc, Jeremiah Riley, Leslie Rodriguez"],
        course: "Intro to Unity Game Design with Joe",
        description: (
          <>
            Our game is about saving animals and showing young kids how
            important it is to save the world with animals and learning how to
            take good care of them and showing them love and kindness.
          </>
        ),
        href:
          "https://leslierodri.github.io/Animal-Run/Animal%20Run/index.html",
        ...image("animal"),
      },
      {
        title: "Treaure Adventure",
        students: ["Sammy Rodriguez, Malcolm Angst"],
        course: "Intro to Python with Ai",
        description: <>Text based adventure. Click the green play button!</>,
        href: "https://replit.com/@Sammy538/TreasureAdventureGame#main.py",
        ...image("text"),
      },
      {
        title: "Tiger Feeding",
        students: ["Kevin Jung"],
        course: "Intermediate VR with Cody",
        description: <>Kevin Jung</>,
        href: "https://youtu.be/0n9syATNDqc",
        ...image("tiger"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "Xscape",
        course: "Intro to Unity Game Design with Daniel",
        students: ["Dejohn Thompson"],
        description: (
          <>
            Xscape is a game which tests your mind and reaction times by tasking
            you to pick up certain objects to escape from a scary room and move
            onto the next level.
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Zoombie Shootout",
        course: "Intro to Unity Game Design with Joe",
        students: ["Jeffrey Andrade, Jordan Lewis, Yousuf Syed"],
        description: (
          <>
            A futuristic first person shooter in space where you fight for your
            survival on alien planets.
          </>
        ),
        href:
          "https://jeffrey938.github.io/demoday/ZombieShootout2.0/index.html",
        ...image("space"),
      },
      {
        title: "Optimized Advice for Everyone",
        course: "Intro to Python with Ai",
        students: ["Kevin Wu, Walter Menjivar"],
        description: <>Healthcare advisor</>,
        href:
          "https://replit.com/@WalterMenjivar/Final-projet-Healthcare-advice",
        ...image("healthcare"),
      },
      {
        title: "Phuzzle VR",
        course: "Intermediate VR with Cody",
        students: ["Sam Dunn"],
        description: <>Physics based puzzle game</>,
        href: "https://youtu.be/Bs3SvSoVSzo",
        ...image("phuzzle"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Night Crawler",
        course: "Intro to Unity Game Design with Daniel",
        students: ["Drew Mejia"],
        description: (
          <>
            In Night Crawler the player experiences the annoyance of struggling
            with insomnia and mental health by consistently repeating a cycle
            where they are incapable of reaching their basic need of rest.
          </>
        ),
        href: "",
        ...image("night"),
      },
      {
        title: "SFA",
        course: "Intro to Web Design with Cameron",
        students: ["Sasa Ramos, Fernando Hernandez, Alishia Aguilar Rubio"],
        description: (
          <>
            We seek to help first-generation students access academic and
            professional support.
          </>
        ),
        href: "https://sasaramos.github.io/rising-stars/",
        ...image("rising"),
      },
      {
        title: "Food at your Service",
        course: "Intro to Python with Ai",
        students: ["Annie Ye, Allison Kwan"],
        description: <>Basic needs finder. Press the green play button!</>,
        href: "https://replit.com/@allisonkwan1/demoday?v=1",
        ...image("trivia"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "The Attack of The Skeleton",
        course: "Intro to Unity Game Design with Daniel",
        students: ["Edgar Morataya"],
        description: (
          <>Control the Skeleton and destroy his enemies and foes!</>
        ),
        href: "https://edgarm54.github.io/AttackonCube3/",
        ...image("skeleton"),
      },
      {
        title: "You Recipe",
        course: "Intro to Web Design with Cameron",
        students: ["Emma Chung, Salina Voong, Christian Lopez"],
        description: (
          <>
            You Recipe allows you to not only find homemade recipes, but you can
            also share your own recipes and favorite recipes you like. Our goal
            is to encourage users to try new foods and explore different
            cuisines while being inclusive to everyone's dietary needs.
          </>
        ),
        href: "https://savoong.github.io/you-recipe/",
        ...image("recipe"),
      },
      {
        title: "Kee(y) - Turtle Insurgency: Operation Plastic",
        course: "Intro to Python with Ornelle",
        students: ["Elsa Li, Esther, Kurt"],
        description: <></>,
        href: "https://replit.com/@ElsaLi3/Operation-Plastic-by-KEEY#main.py",
        ...image("turtles"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Knock Knock (Dungeons And Doors)",
        course: "Intro to Unity Game Design with Daniel",
        students: ["Jade Martin"],
        description: (
          <>
            A maze game where you are stuck in a level until you find the
            required items to escape and go to the next level. You complete the
            game by escaping all levels.
          </>
        ),
        href: "https://jamartin6.github.io/KnockKnockMazeGame/",
        ...image("maze"),
      },
      {
        title: "Sweet Tooth",
        course: "Intro to Web Design with Cameron",
        students: [
          "Allison Hernandez, Zainab Wisniewski, Rachel Liu, Rachel He",
        ],
        description: (
          <>
            We choose to make a website on the topic of ice cream because we
            have a sweet tooth and it was a way for us to explore the Bay Area.
          </>
        ),
        href: "https://liurachel139.github.io/ice-cream-4-all/",
        ...image("ice"),
      },
      {
        title: "Green day snickers - Zoom joiner",
        course: "Intro to Python with Ornelle",
        students: ["Mats Krikhaar, John Azevedo "],
        description: (
          <>
            ZoomJoiner is a program written for MacOS designed to automatically
            open Zoom meetings (or any other browser links!) at a scheduled time
            and date. It is written completely in python, and utilized the
            webbrowser, rumps, and schedule libraries.
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 7",
    projects: [
      {
        title: "Amnesia Adventure",
        students: ["Jalyn Mcfarland"],
        course: "Intro to Unity Game Design with Daniel",
        description: (
          <>
            Amnesia Adventure is a game about a girl who lost her memory and
            woke up in a strange land. Throughout her journey she will find
            clues about who she is and how she got there.
          </>
        ),
        href: "",
        ...image("game"),
      },
      {
        title: "Asteroids",
        students: ["Victoria, Jaquain, Emmanuel"],
        course: "Intro to Python with Hunter",
        description: <>Asteroids Game</>,
        href: "https://replit.com/@VictoriaOguta/Asteroids#main.py",
        ...image("asteroid"),
      },
      {
        title: "Under the Sea",
        students: ["Jessica, Annie, Hua"],
        course: "Intro to Python with Ornelle",
        description: (
          <>
            Under the sea is a game that focuses on how pollution has affected
            marine life. The user can play the game by moving the
            up/down/left/right arrows to learn more about sea pollution.
          </>
        ),
        href: "https://replit.com/@JessicaNg1/UnderTheSea#main.py",
        ...image("sea"),
      },
    ],
  },
  {
    room: "Breakout Room 8",
    projects: [
      {
        title: "PKM",
        course: "Intro to Unity Game Design with Daniel",
        students: ["Juan MacFarlane"],
        description: (
          <>
            PKM is a role-playing game based around building a small team of
            monsters to battle other monsters in a quest to become the best.
          </>
        ),
        href: "https://juanmac18.github.io/fantastic-guacamole/PKMN%20GAME/",
        ...image("pkm"),
      },
      {
        title: "ABI (Name Acronym)",
        course: "Intro to Python with Hunter",
        students: ["Azalea, Benjamin, Ilyas"],
        description: <>Pong Game</>,
        href: "https://replit.com/@HunterMRocha/MBPong#main.py",
        ...image("pong"),
      },
      {
        title: "Poker Game",
        course: "Intro to Python with Ornelle",
        students: ["Luis"],
        description: <>Poker Game</>,
        href: "https://replit.com/@LuisMederos/poker-game#main.py",
        ...image("poker"),
      },
    ],
  },
  {
    room: "Breakout Room 9",
    projects: [
      {
        title: "DesertRacers",
        course: "Intro to Unity Game Design with Daniel",
        students: ["Kami Wang"],
        description: (
          <>
            DesertRacers is a single-player kart racing game where you try to
            race around a track within 3 minutes. Along the way, there are
            multiple difficult turns as well as speed pads that make you go
            faster.
          </>
        ),
        href: "https://kammaw-awesome.github.io/DesertRacers/",
        ...image("desert"),
      },
      {
        title: "Piggy Catcher",
        course: "Intro to Python with Hunter",
        students: ["Yusuf, Max, David"],
        description: <>Reaction Game</>,
        href: "https://replit.com/@YusufAbdolcader/Piggy-catcher#main.py",
        ...image("pig"),
      },
      {
        title: "Homelessness in SF",
        course: "Intro to JavaScript with Wilson",
        students: ["Elian Montano, Fernando Diaz, Joseph Izeta"],
        description: <>Exploring the rise of homelessness in SF.</>,
        href:
          "https://final-project-fernando-joseph-elian.m0ntano203.repl.co/#prevent-homelessness",
        ...image("houseless"),
      },
    ],
  },
  {
    room: "Breakout Room 10",
    projects: [
      {
        title: "Bunny Funny Stories",
        course: "Intro to Python with Ai",
        students: ["Debora Choi, Kimberly Tamayo"],
        description: <>Madlibs</>,
        href: "https://replit.com/@KimberlyTamayo/BunnyFunnyStories?v=1",
        ...image("funny"),
      },
      {
        title: "Coronavirus",
        course: "Intro to JavaScript with Wilson",
        students: ["Even Michael, Isabella Hui, Kyle Curiel-Miranda"],
        description: <>Reaction Game</>,
        href: "https://project.kylecuriel.repl.co/",
        ...image("covid"),
      },
    ],
  },
  {
    room: "Breakout Room 11",
    projects: [
      {
        title: "Tower Base Defense",
        course: "Intro to Unity Game Design with Joe",
        students: ["Griffin Guerrero Seiberling"],
        description: (
          <>
            This game is a first person shooter where you are tasked with
            defending a base.
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Money Cap",
        course: "Intro to Python with Ai",
        students: ["Angelo Rei Ramos, Cheryl Chen"],
        description: <>Budget Calculator</>,
        href: "https://replit.com/@cherhchen/MoneyCap?v=1",
        ...image("money"),
      },
      {
        title: "Climate Change",
        course: "Intro to JavaScript with Wilson",
        students: ["Bryan Jiang Li, Sophia Johnson"],
        description: (
          <>
            Our project is to inform people of how human activities have
            impacted our planet and fueled the consequences of climate change.
          </>
        ),
        href: "https://demo-day-project.sophiamj.repl.co/",
        ...image("climate"),
      },
    ],
  },
];

export default StudentProjectRooms;
