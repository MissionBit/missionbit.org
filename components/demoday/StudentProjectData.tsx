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
    room: "Hungry",
    projects: [
      {
        title: "Placeholder",
        students: ["William Tran"],
        description: (
          <>
            You have to get food in the city, but healthy food is hard to come
            by because you live in a food desert.
          </>
        ),
        href: "https://crazythepotato.github.io/HungryMan/",
        ...image("hungry"),
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
        href: "https://maiap2309.github.io/NatureGirl-and-HunterBoy-game/",
        ...image("nature-hunter"),
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
        href: "https://sabrinafang.github.io/summer-webdesign-2020/index.html",
        ...image("hi-tech"),
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
        href: "https://mattkong0.github.io/GenZAlliance/",
        ...image("genz"),
      },
    ],
  },
  {
    room: "Breakout Room 2",
    projects: [
      {
        title: "Endless Run",
        students: ["Joseph Blackett"],
        description: (
          <>
            Make it as far as you can by jumping from platform to platform while
            avoiding obstacles.
          </>
        ),
        href: "https://joblackett6.github.io/endless-run/",
        ...image("endless_run"),
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
        href: "https://kevinj1120.github.io/The-Escape/TheEscape/index.html",
        ...image("the_escape"),
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
        href: "https://malikahon.github.io/Demo-Day/",
        ...image("bookstrap"),
      },
    ],
  },
  {
    room: "Breakout Room 3",
    projects: [
      {
        title: "The Spook",
        students: ["Terry Wong"],
        description: (
          <>
            Experience what inner demons might feel like. (Click the link and
            press pray).
          </>
        ),
        href: "https://gamejolt.com/games/tayteyz/520051",
        ...image("the-spook"),
      },
      {
        title: "Vanguard Runner",
        students: ["Nolan Louie", "Zachary Yieh"],
        description: (
          <>
            Jump your way through platforms while shooting the enemy soldiers.
            Try to make your way to the final boss.
          </>
        ),
        href: "https://nolan019.github.io/Vanguard-Runner/",
        ...image("vanguard-runner"),
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
        href: "https://caitwong.github.io/FinalProject/index.html",
        ...image("big-foot"),
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
        href: "https://stewartalexb3651.github.io/Green-World/",
        ...image("green-world"),
      },
    ],
  },
  {
    room: "Breakout Room 4",
    projects: [
      {
        title: "Alien Shooter",
        students: ["Zhenyu Yu", "Eric Chen"],
        description: (
          <>
            Play as a solider fighting off endless waves of aliens for as long
            as possible.
          </>
        ),
        href: "https://zhenyuyu1.github.io/alienshooter/",
        ...image("alien-shooter"),
      },
      {
        title: "Infinite Lurker",
        students: ["Simon Zhao", "Nikita Kartsev"],
        description: (
          <>
            The game is a first-person shooter with infinite rounds with the
            player's goal to survive the highest round. The player shoots and
            runs from zombies that increase per round with three different
            weapons.
          </>
        ),
        href:
          "https://nikitakartsevv.github.io/Infinite-Lurker/game/index.html",
        ...image("infinite-lurker"),
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
        href: "https://achan3.github.io/Final-Project/",
        ...image("learin"),
      },
      {
        title: "Bazaar Hall",
        students: ["Tyler Keegan", "Ken Lin"],
        description: (
          <>
            A place for professionals to share their work and attract clients.
          </>
        ),
        href: "https://keshfer.github.io/Bazaar-Hall/index.html",
        ...image("bazaar-hall"),
      },
    ],
  },
  {
    room: "Breakout Room 5",
    projects: [
      {
        title: "Run Ruin",
        students: ["Kary Lin", "Nate Tesler", "Jackey Li"],
        description: (
          <>
            Race across a broken temple and traverse the obstacles to get to the
            end. Click on the link and press play.
          </>
        ),
        href: "https://gamejolt.com/games/ruin-ruin/520049",
        ...image("ruin-run"),
      },
      {
        title: "Quiz Time",
        students: ["Octavio Lomeli-Castro"],
        description: (
          <>
            Quiz time is a website that contains three quizzes for the user to
            attempt. (Math, HTML/CSS, and other random topics)
          </>
        ),
        href: "https://octaviolomeli.github.io/FinalProject/",
        ...image("quiz-time"),
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
        href: "https://natalie-huang.github.io/SFChopsticks/",
        ...image("sf-chopsticks"),
      },
    ],
  },
  {
    room: "Breakout Room 6",
    projects: [
      {
        title: "Path to Ocean Beach",
        students: ["Jennifer Wong", "Shania Hao", "Gavin Scott"],
        description: (
          <>Make your way to Ocean Beach from the city of San Francisco</>
        ),
        href: "https://shaniahao.github.io/cityplanner/",
        ...image("city-planners"),
      },
      {
        title: "Dodgeball",
        students: ["Ian Kwan"],
        description: (
          <>Avoid the raining dodgeballs and get the fastest time!</>
        ),
        href: "https://povrty.github.io/Dodgeball/Game/",
        ...image("dodgeball"),
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
        href: "https://malau2.github.io/Monster-Lab-2/Monster%20Lab/",
        ...image("monstor-lab"),
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
        href: "https://alsam8.github.io/cooperative-zinc-hare/index.html",
        ...image("squid-boba"),
      },
      {
        title: "LiTong's Bubble",
        students: ["LiTong Liu"],
        description: (
          <>
            LiTong’s Bubble is a blog and portfolio website. I write
            anime/kdrama/cdrama reviews and just random things that I want to
            share on my blog.
          </>
        ),
        href: "https://litxng.github.io/LiTongBubble/",
        ...image("litong-bubble"),
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
        href: "https://kesooh3r72.github.io/Ransacked/Ransacked/",
        ...image("ransacked"),
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
        href: "https://amchang2.github.io/demodayproject/",
        ...image("know-your-right"),
      },
      {
        title: "Paulina's Online Store",
        students: ["Klester Hernandez"],
        description: <>We sell purses online for the best prices.</>,
        href: "https://klester2003.github.io/Final_Project/index.html#",
        ...image("paulina-purse"),
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
        href:
          "https://jackbobadillagaming.github.io/Rocket-game/rocket%20game/",
        ...image("rocket-game"),
      },
      {
        title: "COVID-19 Central",
        students: ["Audrey Lau", "Cheryl Chen", "Jeffrey Popek"],
        description: (
          <>
            Informational website about COVID-19 with resources on safety,
            recent news updates, and donations (also available in Chinese for
            non-English speakers).
          </>
        ),
        href: " https://cherhchen.github.io/covid-central/",
        ...image("covid-central"),
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
        href: "https://kevinn-t.github.io/Life-The-MMO/",
        ...image("mmo"),
      },
    ],
  },
  {
    room: "Breakout Room 10",
    projects: [
      {
        title: "Time for Golf",
        students: ["Isabel Wong", "Ian Wong"],
        description: (
          <>
            Outdoor mini golf game with fun and unique tricks. Click on the link
            and press play.
          </>
        ),
        href: "https://gamejolt.com/games/golf/520031",
        ...image("golf"),
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
        href: "https://prathmesh-s.github.io/Project-Bakery/index.html",
        ...image("arizmendi-bakery"),
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
        href: "https://k4yluh.github.io/SanrioResale/shop.html",
        ...image("sanrio"),
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
        href: "https://ling1729.github.io/FlyingGame/index.html",
        ...image("flying-game"),
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
        ...image("protests"),
      },
      {
        title: "Boba Me",
        students: ["Andy Liu"],
        description: (
          <>
            What I have here is a website that I built to describe the many boba
            stores which I enjoy and would recommend to everyone to try out.
          </>
        ),
        href: "https://andywkliu.github.io/Boba/",
        ...image("boba"),
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
        href: "https://tristanpopek.github.io/Zombie-escape/wpodsfsdfas/",
        ...image("zombie-escape"),
      },
      {
        title: "Opporteenities",
        students: ["Karina Anders"],
        description: (
          <>
            Opporteenity is a website that allows teens to discover
            opportunities that will help them develop their passions.
            Oppoteenities features volunteering opportunities, programs,
            internships, and resources to learn new things.
          </>
        ),
        href: "https://kmanders317.github.io/Karina-Summer-Web-Developement/",
        ...image("oportuneety"),
      },
      {
        title: "Fruit Box",
        students: ["Jason Siu"],
        description: (
          <>
            I built a website that sells fresh organic year-round fruits and
            produce that delivers to your doorstep with 1 click of a button with
            your phone
          </>
        ),
        href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
        ...image("Placeholder"),
      },
    ],
  },
];

export default StudentProjectRooms;
