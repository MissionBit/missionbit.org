import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  SummerClassInstances,
  SpringClassInstances,
  SummerDates,
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

const Enroll: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="enroll" className={classes.root}>
      <Courses instances={SpringClassInstances}>
        <Typography
          variant="h3"
          align="center"
          className={classes.alert}
          id="workshops"
        >
          Summer 2020 Workshops
        </Typography>
        <Typography className={classes.copy}>
          Learn something new and get hands-on experience with our workshops.
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
        <Typography className={classes.copy}>
          Spend 6 weeks learning how to develop websites or games.
          <br />
          <span className={classes.deadlineEmphasis}>
            Registration deadline:
          </span>{" "}
          {LongDateTimeFormat.format(SummerDates.registrationDeadline)}
          <br />
        </Typography>
      </Courses>
      <FlourishSeparator />
    </Container>
  );
};

export default Enroll;
