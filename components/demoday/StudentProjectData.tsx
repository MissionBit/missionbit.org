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
      require(/* webpackInclude: /\.jpg$/ */ `public/images/demoday/2022-spring-projects/${postfix}.jpg`)
        .default,
  };
}

export const StudentProjectRooms: readonly StudentProjectRoomProps[] = [
  {
    room: "Breakout Room 1",
    projects: [
      {
        title: "Life in Beige",
        students: ["Joy Jin, Nicole Martinez, Tania Castanon Perez"],
        course: "Intro to Web with Brent",
        description: (
          <>
            Our self-care website focuses on encouraging people to incorporate
            different things in their daily lives that will help them with any
            stress they are carrying or to just have a healthy relationship with
            their mind and body.
          </>
        ),
        href: "http://what-is-self-care.glitch.me/",
        ...image("selfcare"),
      },
      {
        title: "Mission Bit Jump",
        students: ["Steven Wu, Emely Sarceno Bravo, Fernando Diaz"],
        course: "Intro to Python with Brent",
        description: (
          <>
            Our game is a version of Doodle Jump. You progress up by jumping on
            different platforms and the further you get the more points you
            earn. This connects to Mission Bit’s core values of smart risks and
            community. It is a visual representation of taking smart risks and
            it represents community because in our game, you can choose your
            character to make everyone feel included.
          </>
        ),
        href: "https://replit.com/@gannettajr/MissionBitJump",
        ...image("jump"),
      },
      {
        title: "Gallery of National Black History",
        students: ["Kathleen Zapata, Rafael Perez"],
        course: "Intro to Unity with Joe",
        description: (
          <>
            This game is an impressive walk-through museum highlighting the
            accomplishments of Civil Rights activists and leaders.
          </>
        ),
        href: "https://simmer.io/@UnaverageJoe/museum",
        ...image("museum"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "Mental Health Awareness Website",
        students: ["Ahmed Nagi, Harrison Liang, Malcolm Angst"],
        course: "Intro to Web with Brent",
        description: (
          <>
            Our project focuses on the aspects of mental health, regarding the
            causes/effects of stressors in everyday life. We’ll also be
            discussing ways to improve your mental health and limit stressors.
          </>
        ),
        href: "https://innovative-shining-year.glitch.me",
        ...image("mental"),
      },
      {
        title: "Chat Bot",
        students: [
          "Treazure Vasquez, Uzma Kadri, Jaymel Santos, Georgina Alano",
        ],
        course: "Intro to Python with Brent",
        description: <>A bot for facilitating an open-ended conversation</>,
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Snack Treasure Hunt",
        students: ["Yuli Zhang Hung, Anne Zheng"],
        course: "Intro to Unity with Joe",
        description: (
          <>
            In this treasure hunting game, players must find delicious snacks
            hidden in a tranquil outdoors environment!
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "Racism Education",
        course: "Intro to Web with Brent",
        students: ["Jordan Lewis, Leya Truong"],
        description: (
          <>
            This project will be about Racism Education; why you ask? It’s
            because of all of the people that dealt with racism and need help.
          </>
        ),
        href: "https://racism-education.glitch.me/",
        ...image("racism"),
      },
      {
        title: "Project 863",
        course: "Intro to Unity with Joe",
        students: ["Tatiana Hernandez"],
        description: (
          <>
            You are a new employee at SpellBound and after seeing all the things
            the team has dealt with, you offered to help. The team gave you the
            task to find and collect the remaining serums. Along the way you
            discover some things that are worth sharing with the team. Turns out
            Project 863 is much bigger than they expected.
          </>
        ),
        href: "https://simmer.io/@UnaverageJoe/863",
        ...image("project863"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Animei",
        course: "Intro to Web Design with Sirasit",
        students: ["Po Sang Hung (Winnie)"],
        description: (
          <>
            This project was about introducing different anime to people who are
            interested in watching anime, it was build with the knowledge I've
            learned from the Missionbit Intro to WebDesign. You can find the
            most popular, and or some new anime you've never seen before. The
            idea for building this website was sharing some awesome anime I've
            watched as well as researching some new anime I've never seen. A
            highlight in the last section "Somethingcool" is about a very new
            thing I discovered online which was really fun to play with.
          </>
        ),
        href: "https://anime-project-psh.glitch.me/",
        ...image("anime"),
      },
      {
        title: "Countdown",
        course: "Intro to JavaScript with Wilson",
        students: ["Aaron Yee, David Do"],
        description: <>Countdown till Demo Day. Productivity Tool </>,
        href: "https://countdown.daviddo11.repl.co/",
        ...image("countdown"),
      },
      {
        title: "Anti-Runner",
        course: "Intro to Unity with Joe",
        students: ["Sergio Velasco Valles, Tiffany Chen, Julian Paradise"],
        description: (
          <>
            In this game, you play as “anti-runner,” a hero tasked with
            traversing a dangerous level. If you lose, you respawn at a
            checkpoint!
          </>
        ),
        href: "https://simmer.io/@UnaverageJoe/anti-runner",
        ...image("antirunner"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "Google Clone",
        course: "Intro to Web Design with Sirasit",
        students: ["Sahid Rizo"],
        description: (
          <>
            A search engine provided by Google. Handling more than 3.5 billion
            searches per day, it has a 92% share of the global search engine
            market. It is also the most-visited website in the world.
          </>
        ),
        href: "https://google-project1.glitch.me/",
        ...image("google"),
      },
      {
        title: "Sort the Trash",
        course: "Intro to JavaScript with Wilson",
        students: ["Maya Murakami, Moselle Mac"],
        description: (
          <>Sort the Trash - Be mindful of where you toss your trash</>
        ),
        href: "https://whack-a-mole.mosellemac.repl.co/",
        ...image("trashsorter"),
      },
      {
        title: "Carnival Shooting Gallery",
        course: "Intermediate VR with Scott",
        students: ["Emmanuel Odenyi"],
        description: <>Alien’s from Mars have invaded the State Fair!</>,
        href: "https://www.youtube.com/watch?v=Po3OeuKWIYQ&ab_channel=MissionBit",
        ...image("carnival"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Bread4U",
        course: "Intro to Web Design with Sirasit",
        students: ["Jessica Zheng, Natalie Ramirez"],
        description: <>Shop about bread.</>,
        href: "https://spicy-innovative-provelone.glitch.me/",
        ...image("bread4u"),
      },
      {
        title: "Values of Time",
        course: "Intro to JavaScript with Wilson",
        students: ["Princess Agyapong"],
        description: <>Values of Time - Values to remember</>,
        href: "https://css-clock-spring-22.princessagyapon.repl.co/",
        ...image("valuesoftime"),
      },
      {
        title: "Death's Apprentice",
        course: "Intermediate VR with Scott",
        students: ["Keke Ning"],
        description: (
          <>
            Every century, the Grim Reaper chooses an apprentice to be the next
            Death. You as the chosen one, will have the very first lesson of
            Death today!
          </>
        ),
        href: "https://youtu.be/z0Z3Jn9g_hk",
        ...image("death"),
      },
    ],
  },
  {
    room: "Breakout Room 7",
    projects: [
      {
        title: "Animal Crossing",
        students: ["Persephone Vaez, Angely Torres Esquivel"],
        course: "Intro to Web Design with Sirasit",
        description: (
          <>
            In Animal Crossing: New Horizons you escape to a deserted island and
            create your own paradise as you explore, create, and customize. Your
            island getaway has a wealth of natural resources that can be used to
            craft everything from tools to creature comforts.
          </>
        ),
        href: "https://animal-crossing-website.glitch.me/",
        ...image("animalcrossing"),
      },
      {
        title: "Drop a Beat",
        students: ["Wenxin (Sam) Huang"],
        course: "Intro to JavaScript with Wilson",
        description: <>Drop a Beat - Soundboard to destress</>,
        href: "https://badsuperficialsolution.samhuang5.repl.co/",
        ...image("beat"),
      },
      {
        title: "Escape the Space",
        course: "Intermediate VR with Scott",
        students: ["Kami Wang"],
        description: (
          <>
            Escape the Space: You’re stuck in a large space station but there
            are multiple corridors so you have to explore the station in order
            to find the correct path. Good luck!
          </>
        ),
        href: "https://www.youtube.com/watch?v=3gMFIAtFMdE&feature=youtu.be&ab_channel=MissionBit",
        ...image("space"),
      },
    ],
  },
  {
    room: "Breakout Room 8",
    projects: [
      {
        title: "Exotic Foods",
        students: ["Sandra Montejo, Aileen Medrano"],
        course: "Intro to Web Design with Sirasit",
        description: (
          <>
            Our project is about foods that are not seen or eaten everyday, in
            our website you can learn facts these different types of foods and
            learn how to make them into delicious meals.
          </>
        ),
        href: "https://demo-day-project-aileen-and-sandra.glitch.me/",
        ...image("exoticfood"),
      },
      {
        title: "The Trash Game",
        students: ["Phillip Chin, Phuong Anh Vo, Alexander Guarneros"],
        course: "Intro to Unity with Joe",
        description: (
          <>
            Garbage items are out on the street, and they're trying to find
            their way to the right bin! Will it be compost, recycling, or trash?
          </>
        ),
        href: "-",
        ...image("placeholder"),
      },
      {
        title: "TREZ - Find the treasure in the maze!",
        course: "Intermediate VR with Scott",
        students: ["Aaron Carter"],
        description: (
          <>Think about how to blast your way to “treasure” and freedom.</>
        ),
        href: "https://www.youtube.com/watch?v=YfnKC76jW-I&ab_channel=MissionBit",
        ...image("trez"),
      },
    ],
  },
];

export default StudentProjectRooms;
