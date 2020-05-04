import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Supporters from "../Supporters";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Workshops from "./Workshops";
import Courses from "./Courses";
import Faq from "./Faq";
import Showcase from "../Showcase";
import {
  SummerClassInstances,
  SpringClassInstances,
  SummerDates,
} from "./ClassInstanceData";
import YouTubePreview from "../YouTubePreview";
import YouTubePreviews from "../YouTubePreviews";
import { LongDateFormat, LongDateTimeFormat } from "../../src/dates";

const programImageNames = [
  "safia_jaleel",
  "girl-unity",
  "jada",
  "jesus",
  "miguel_yanez",
  "nathan_powell",
] as const;

const programImages = Object.fromEntries(
  programImageNames.map((name) => [
    name,
    require(`../../public/images/program/${name}.jpg`),
  ])
) as {
  [name in typeof programImageNames[number]]: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > section": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
  description: {
    "& > p": {
      marginBottom: theme.spacing(2),
    },
  },
  deadline: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      "& > strong": {
        display: "block",
      },
    },
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  landingTitle: {
    padding: theme.spacing(0, 3),
  },
  landing: {
    padding: theme.spacing(3, 0),
    textAlign: "center",
    background:
      "transparent linear-gradient(180deg, #2881D0 0%, #1B98A2 39%, #FFFFFF 100%) 0% 0% no-repeat padding-box",
    "& > h1": {
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
      color: theme.palette.common.white,
    },
  },
  landingPhoto: {
    maxWidth: "100%",
    margin: "0 auto",
    "& > img": {
      maxWidth: 1380,
      maxHeight: 300,
      width: "100%",
      objectFit: "cover",
      margin: "0 auto",
    },
  },
  courseNotes: {
    ...theme.typography.body1,
    paddingLeft: theme.spacing(2),
    "& > li": {
      margin: theme.spacing(1, 0),
    },
  },
}));

const Main: React.FC<{}> = () => {
  const classes = useStyles();
  let i = 0;
  const images = Object.values(programImages);
  const nextImage = () => images[i++ % images.length];
  return (
    <main id="main" className={classes.root}>
      <Box id="landing" component="section" className={classes.landing}>
        <Typography
          variant="h2"
          component="h1"
          align="center"
          className={classes.landingTitle}
        >
          Programs
        </Typography>
        <picture className={classes.landingPhoto}>
          <source
            type="image/webp"
            srcSet={require("../../public/images/program/students-header.jpg?webp")}
          />
          <img
            alt="Photo of students"
            src={require("../../public/images/program/students-header.jpg")}
          />
        </picture>
      </Box>
      <Container
        component="section"
        id="description"
        className={classes.description}
      >
        <Typography>
          Mission Bit provides free after-school coding courses,{" "}
          <Link href="#workshops">workshops</Link>, and{" "}
          <Link href="#courses">summer programs</Link> to high school students
          from underserved and underrepresented communities.
        </Typography>
        <Typography>
          We offer our students career and college advising related to the
          technology field, a field trip to a Bay Area tech company, and an
          opportunity to showcase their group projects to a large community of
          supporters during our Demo Day event at the end of the term. Our
          program’s inclusive community fosters positive relationships between
          students, their peers, and our experienced classroom leaders. Mission
          Bit brings like-minded individuals together to form long-lasting
          meaningful connections and gives students all the tools they need to
          succeed in the tech industry.
        </Typography>
      </Container>
      <Container component="section" id="enroll">
        <Courses instances={SpringClassInstances} nextImage={nextImage}>
          <Typography
            variant="h3"
            align="center"
            className={classes.alert}
            id="workshops"
          >
            Spring 2020 Workshops:
          </Typography>
        </Courses>
        <Courses instances={SummerClassInstances} nextImage={nextImage}>
          <Typography
            variant="h3"
            align="center"
            className={classes.alert}
            id="courses"
          >
            Sign up for Summer 2020 classes now!
          </Typography>
          <Typography align="center" className={classes.deadline}>
            Registration deadline:{" "}
            <strong>
              {LongDateTimeFormat.format(SummerDates.registrationDeadline)}
            </strong>
          </Typography>
        </Courses>
      </Container>
      <Container component="section" id="enroll-notes">
        <Typography variant="h6">For Summer 2020 Courses:</Typography>
        <ul className={classes.courseNotes}>
          <li>
            Mission Bit has a selective admissions process. We seek to create a
            strong learning community with committed young people who bring a
            variety of perspectives to the classroom. We highly encourage all
            interested students to apply.
          </li>
          <li>
            To be considered for admissions, students are required to take part
            in a group interview. Applicants will receive an invitation to be
            interviewed after the registration deadline has passed.{" "}
            <strong>
              Interviews will take place on{" "}
              {LongDateFormat.format(SummerDates.interview)}.
            </strong>{" "}
            Please provide accurate email information to receive your
            invitation.
          </li>
          <li>
            Each term ends with Demo Day, which is a required event for
            students. Friends and family are strongly encouraged to attend;
            please mark your calendar for{" "}
            <strong>{LongDateFormat.format(SummerDates.demoDay)}.</strong>
          </li>
          <li>
            <strong>
              Registration Deadline is{" "}
              {LongDateTimeFormat.format(SummerDates.registrationDeadline)}.
            </strong>
          </li>
        </ul>
        <Typography>
          For additional questions about registration, please contact us at{" "}
          <a href="mailto:info@missionbit.org">info@missionbit.org.</a>
        </Typography>
        <br />
        <Typography variant="h6">Videos from Summer 2019:</Typography>
        <YouTubePreviews>
          <YouTubePreview id="RZgGXRmfdh0">Orientation</YouTubePreview>
          <YouTubePreview id="9HqfU7-DCao">Demo Day</YouTubePreview>
          <YouTubePreview id="-e0v7Zx-fy0">Mini-Doc Ep 1</YouTubePreview>
          <YouTubePreview id="z9Iz6Z-XH8o">Mini-Doc Ep 2</YouTubePreview>
          <YouTubePreview id="de8JieFe88Y">Mini-Doc Ep 3</YouTubePreview>
          <YouTubePreview id="1eJZBmQtJu0">Mini-Doc Ep 4</YouTubePreview>
        </YouTubePreviews>
      </Container>
      <Workshops />
      <Faq />
      <Showcase />
      <Supporters />
    </main>
  );
};

export default Main;
