import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  FallDates,
  SDRDates,
  FallDatesExtended,
  SectionIds,
  SectionId,
  Sections,
} from "./ClassInstanceData";
import { LongDateTimeFormat } from "src/dates";
import FlourishSeparator from "./FlourishSeparator";
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
      return "Fall 2020 Classes";
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
            Application deadline:
          </span>{" "}
          {LongDateTimeFormat.format(SDRDates.registrationDeadline)}
          <br />
        </Typography>
      );
    case "courses":
      return (
        <Typography className={classes.copy}>
          Apply to our program and come have fun with us this fall!
          <br />
          <span className={classes.deadlineEmphasis}>
            Application deadline:
          </span>{" "}
          {LongDateTimeFormat.format(FallDates.registrationDeadline)}
          <br />
          <span className={classes.deadlineEmphasis}>
            Web Design application deadline:
          </span>{" "}
          {LongDateTimeFormat.format(FallDatesExtended.registrationDeadline)}
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
      <FlourishSeparator />
    </Container>
  );
};

export default Enroll;
