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

const PLACEHOLDER_PROJECTS: readonly ProjectProps[] = [
  {
    title: "Project A",
    students: ["Student 1", "Student 2", "Student 3"],
    description: (
      <>Project description. 1-2 sentences. This is placeholder content.</>
    ),
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
    ...image("project_a"),
  },
  {
    title: "Project B",
    students: ["Student 1", "Student 2", "Student 3"],
    description: (
      <>Project description. 1-2 sentences. This is placeholder content.</>
    ),
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
    ...image("project_b"),
  },
  {
    title: "Project C",
    students: ["Student 1", "Student 2", "Student 3"],
    description: (
      <>Project description. 1-2 sentences. This is placeholder content.</>
    ),
    href: "https://showcase.missionbit.org/2013/group-projects/video-game/",
    ...image("project_c"),
  },
];

export const StudentProjectRooms: readonly StudentProjectRoomProps[] = [
  {
    room: "Breakout Room 1",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 2",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 3",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 4",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 5",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 6",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 7",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 8",
    projects: PLACEHOLDER_PROJECTS,
  },
  {
    room: "Breakout Room 9",
    projects: PLACEHOLDER_PROJECTS,
  },
];

export default StudentProjectRooms;
