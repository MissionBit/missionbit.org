import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  CourseDates,
  SDRDates,
  // FallDatesExtended,
  SectionIds,
  SectionId,
  Sections,
} from "./ClassInstanceData";
import { LongDateTimeFormat } from "src/dates";
import Courses from "./Courses";
import { brand } from "src/colors";

const accentStyles = [
  brand.indigo,
  brand.greenPearl,
  brand.wisteria,
  brand.skyBlue,
  brand.lightPink,
].reduce((acc, color, i, arr) => {
  acc[`&:nth-of-type(${arr.length}n + ${i})`] = {
    "--accent-color": color,
  };
  return acc;
}, {} as { [k: string]: { "--accent-color": string } });

const useStyles = makeStyles((theme) => ({
  root: {
    "& > article": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      "&:first-child": {
        marginTop: 0,
      },
      ...accentStyles,
    },
  },
  copy: {
    textAlign: "center",
    margin: theme.spacing(2, 0, 4, 0),
    fontSize: theme.typography.pxToRem(35),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  smallCopy: {
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  constrained: {
    maxWidth: "50em",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  constrainedList: {
    maxWidth: "50em",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    paddingLeft: "4em",
    fontSize: theme.typography.pxToRem(20),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
      paddingLeft: 0,
    },
  },
  deadlineEmphasis: {
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
}));

function sectionIdTitle(id: SectionId): string {
  switch (id) {
    case "workshops":
      return "Workshops";
    case "week-of-code":
      return "Mission Bit Week of Code, December 14 - 18";
    case "courses":
      return "Summer 2021 Classes";
    case "career-prep":
      return "Career Prep Bootcamp";
  }
}

const SectionCopy: React.FC<{ id: SectionId }> = ({ id }) => {
  const classes = useStyles();
  switch (id) {
    case "workshops":
      return (
        <Typography className={classes.copy}>
          Learn something new and get hands-on experience with our workshops.
        </Typography>
      );
    case "week-of-code":
      return (
        <Typography className={classes.copy}>
          Join us for our Week of Code! Take all workshops during this week and
          be entered in a raffle for a chance to win a pair of Beats Flex
          earphones.
        </Typography>
      );
    case "career-prep":
      return (
        <Typography className={classes.copy}>
          Fast-track your career with Mission Bit. Must be an SF resident, 18-24
          years old.
          <br />
          <span className={classes.deadlineEmphasis}>
            Extended application deadline:
          </span>{" "}
          {LongDateTimeFormat.format(SDRDates.registrationDeadline)}
          <br />
        </Typography>
      );
    case "courses":
      return (
        <Typography className={classes.copy}>
          Apply to our program and come have fun with us this summer!
          <br />
          <span className={classes.deadlineEmphasis}>
            Application deadline:
          </span>{" "}
          {LongDateTimeFormat.format(CourseDates.registrationDeadline)}
          <br />
          <br />
          {/* <span className={classes.deadlineEmphasis}>
            Web Design application deadline:
          </span>{" "}
          {LongDateTimeFormat.format(FallDatesExtended.registrationDeadline)} */}
          <div className={classes.constrained}>
            <span className={classes.smallCopy}>
              Mission Bit utilizes a focused enrollment model (more information
              below in our FAQ section) for our semester-based courses and
              prioritizes students with these criteria:
            </span>
          </div>
          <div className={classes.constrainedList}>
            <ul className={classes.smallCopy}>
              <li>Residents of San Francisco</li>
              <li>Children in the foster care system</li>
              <li>English language learners</li>
              <li>
                Low-income students, with a focus on historically
                underrepresented communities in tech, including people who
                identify as Black, Latinx, Pacific Islander, and female
              </li>
              <li>
                Students attending a high school site with limited to no
                computer science offerings
              </li>
            </ul>
          </div>
        </Typography>
      );
  }
};

const Enroll: React.FC<{ sections?: readonly SectionId[] }> = ({
  sections = SectionIds,
}) => {
  const classes = useStyles();
  return (
    <Container component="section" id="enroll" className={classes.root}>
      {sections.map((key: SectionId) => (
        <Courses
          key={key}
          id={key}
          instances={Sections[key]}
          title={sectionIdTitle(key)}
        >
          <SectionCopy id={key} />
        </Courses>
      ))}
    </Container>
  );
};

export default Enroll;
