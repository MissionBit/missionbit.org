import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  SummerClassInstances,
  SpringClassInstances,
  SummerDates,
} from "./ClassInstanceData";
import { LongDateTimeFormat } from "../../src/dates";
import FlourishSeparator from "./FlourishSeparator";
import Courses from "./Courses";

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
  deadline: {
    marginTop: theme.spacing(2),
  },
  deadlineEmphasis: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  alert: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
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

const Enroll: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="enroll">
      <Courses instances={SpringClassInstances}>
        <Typography
          variant="h3"
          align="center"
          className={classes.alert}
          id="workshops"
        >
          Spring 2020 Workshops
        </Typography>
        <Typography align="center">
          A 90-minute window into the exciting world of tech.
        </Typography>
      </Courses>
      <Courses instances={SummerClassInstances}>
        <Typography
          variant="h3"
          align="center"
          className={classes.alert}
          id="courses"
        >
          Summer 2020 Bootcamps
        </Typography>
        <Typography align="center" className={classes.deadline}>
          Spend 6 weeks learning how to develop websites or games.
          <br />
          <span className={classes.deadlineEmphasis}>
            Registration deadline:
          </span>{" "}
          {LongDateTimeFormat.format(SummerDates.registrationDeadline)}
        </Typography>
      </Courses>
      <FlourishSeparator />
    </Container>
  );
};

export default Enroll;
