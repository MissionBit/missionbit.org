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
        title: "NP",
        students: ["Nina Huang, Phoebe Lin"],
        course: "Intro to JavaScript with Nico",
        description: (
          <>
            In this project we want to encourage people to protect the
            environment and animals.
          </>
        ),
        href: "https://replit.com/join/pateszfa-phoebe8334",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "Safe Space",
        students: [
          "Gerald Aguirre, Ison Trujillo, Omar Sanchez, Lonnie Morris",
        ],
        course: "Intro to Unity Game Design with Shay",
        description: (
          <>
            Hey, it’s time to go back to school but a certain something is still
            lingering around...stay active and don’t get caught! Find a safe
            space where you can avoid those spooky particles or run around all
            day. Be careful out there because this town is infested.
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "ToDoodles!",
        students: ["Jessica Lin, Lexian Nguyen, Dexian Yang"],
        course: "Intro to Python with Hunter",
        description: (
          <>
            Project goal is to create a planner application in which the user
            can add assignments/tasks, view all assignments, set timers (maybe)
            for studying/productivity, and grow a plant by completing
            assignments. Click the link and press play.
          </>
        ),
        href: "https://replit.com/@jebbica/ToDoodles#main.py",
        ...image("doodles"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "VacciNader",
        course: "Intro to Unity Game Design with Shay",
        students: ["Darnell Norman, Kingsley Kai Lam, Ali Hernandez"],
        description: (
          <>
            VacciNader is a 3d shooter set in a post-apocalyptic covid infested
            dystopia. Avoid the covid zombies for as long as you can!
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "The Turn Against History",
        course: "Intro to Python with Hunter",
        students: [
          "Dejohn Thompson, Griffin Guerrero Seiberling, Rafael Perez",
        ],
        description: (
          <>
            Our project is gonna talk about Black heroes that the user they can
            select to choose so far we have created and little thing were you
            can select what Black hero you want to learn our prolem write now is
            uploading information to each hero
          </>
        ),
        href: "-",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Deadly Dungeon",
        course: "VR with Kevin",
        students: ["Alex Tapus"],
        description: (
          <>
            Explore a dark dungeon and fight off dangerous enemies in an attempt
            to rescue a fellow knight.
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Weather Forcast",
        course: "Intro to Python with Hunter",
        students: ["Sabeen Rasheed, Eunbi Lucia Ryu, Yixi Ou"],
        description: (
          <>
            This project is a weather forecast, where the user will be able to
            choose between two options: Today's Weather and Weekly (7 Day)
            weather. Today's Weather will take them to a screen showing the
            weather (sun, rain, etc.), the city (San Francisco, CA), and the
            temperature in both Fahrenheit and Celsius. The Weekly (7 Day)
            weather will show a 7 day's worth of weather, also showing the
            weather and temperature.
          </>
        ),
        href: "https://replit.com/@Lucia0824/Project-Code-Outline#main.py",
        ...image("weather"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "Feeding Lions",
        course: "VR with Kevin",
        students: ["Kevin Jung"],
        description: <>The lions are hungry and need to be fed!</>,
        href: "",
        ...image("placeholder"),
      },
      {
        title: "Python Portfolio",
        course: "Intro to Python with Hunter",
        students: ["Agnes Liang, Christine Chen, Cindy Zhou"],
        description: <>Stoichiometry Calculator</>,
        href: "https://demoday-python.glitch.me/#games",
        ...image("portfolio"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Puzzle Justice VR",
        course: "VR with Kevin",
        students: ["Sam Dunn, Marquis Ellis"],
        description: (
          <>
            Puzzle Justice VR.Its a puzzle game with some incorporated into the
            gameplay
          </>
        ),
        href: "",
        ...image("placeholder"),
      },
      {
        title: "OneMindfulSelf",
        course: "Intro to Web Design with Cameron",
        students: ["Darren Yee, Kellie Wong, Jalyn McFarland"],
        description: (
          <>
            Our website name will be called onemindfulself (onemindfulself.com)
            and will be about self care. On the website, we will have various
            tips on how to take care of yourself mainly mentally and a little
            physically{" "}
          </>
        ),
        href: "https://kkellie.github.io/onemindfulself/",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 7",
    projects: [
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
    room: "Breakout Room 8",
    projects: [
      {
        title: "Carbon Count",
        course: "Intro to JavaScript with Nico",
        students: ["Praise Odenyi, Sophia Cao"],
        description: (
          <>
            Our project is an informative website about carbon dioxide and
            energy consumption.
          </>
        ),
        href: "https://sophiac8.github.io/CarbonCount/#",
        ...image("carbon"),
      },
      {
        title: "Sticky Lips Sweetery",
        course: "Intro to Web Design with Michael",
        students: ["Sonia Lee, Saray Mendoza, Kimberly Alvarado"],
        description: (
          <>
            Sticky lips sweetery, it is a recommendation website to help you
            find yummy treats{" "}
          </>
        ),
        href: "https://sonia-who.github.io/Sticky-Lips-Sweetery/",
        ...image("placeholder"),
      },
    ],
  },
  {
    room: "Breakout Room 9",
    projects: [
      {
        title: "Project Plastic Zero",
        course: "Intro to JavaScript with Nico",
        students: ["Caitlyn Wong, Ethan Ellis, Tyler Choi"],
        description: (
          <>
            "Project Plastic Zero" sets a goal for "Zero Plastic, Zero
            Pollution," striving to reduce plastic use and providing sustainable
            alternatives.
          </>
        ),
        href: "https://rise-in-plastic.tylerchoi1.repl.co/",
        ...image("plastic"),
      },
      {
        title: "Mission Bitcoin",
        course: "Intro to Web Desig with Cameron",
        students: ["Theresa Tsai, Carson Ma, Akemi Yu"],
        description: (
          <>An informational website about Cryptocurrency and how it works.</>
        ),
        href: "https://akemiyu.github.io/missionbitcoin/",
        ...image("bitcoin"),
      },
      {
        title: "Depression over COVID-19 ",
        course: "Intro to JavaScript with Nico",
        students: ["Jessica Ng, Monica Luo"],
        description: (
          <>
            "The Study of Depression" shows how Covid-19 has affected people's
            emotional and mental health
          </>
        ),
        href: "https://jessicasng.github.io/",
        ...image("depression"),
      },
    ],
  },
];

export default StudentProjectRooms;
