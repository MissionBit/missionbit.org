import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FaqItem from "../FaqItem";
import { LongDateFormat, LongDateTimeFormat } from "../../src/dates";
import { SummerDates } from "./ClassInstanceData";
import { brand } from "../../src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiExpansionPanel-root:before": {
      backgroundColor: brand.orange,
    },
    "& .MuiExpansionPanelSummary-expandIcon": {
      color: brand.orange,
      "& .MuiSvgIcon-root": {
        fontSize: theme.typography.pxToRem(48),
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.typography.pxToRem(28),
        },
      },
    },
    "& .MuiPaper-elevation1": {
      boxShadow: `0px 2px 1px -1px ${brand.orange}, 0px 1px 1px 0px ${brand.orange}, 0px 1px 3px 0px ${brand.orange}`,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    "& > h4": {
      margin: theme.spacing(2, 0),
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.h5.fontSize,
      },
    },
  },
}));

const Faq: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="faq" className={classes.root}>
      <Typography variant="h4">Frequently Asked Questions</Typography>
      <FaqItem question="Should I apply for a summer 2020 bootcamp?">
        Mission Bit has a selective admissions process, but we highly encourage
        all interested students to apply! We seek to create a strong learning
        community with committed young people who bring a variety of
        perspectives to the classroom. To be considered for admissions, students
        are required to take part in a Student Admissions Phone Screening that
        will take place on {LongDateFormat.format(SummerDates.interview)}.
        Please provide accurate email information for the screening.
      </FaqItem>

      <FaqItem question="What is the registration deadline for summer 2020?">
        The registration deadline is{" "}
        {LongDateTimeFormat.format(SummerDates.registrationDeadline)}.
      </FaqItem>

      <FaqItem question="What is Demo Day?">
        Demo Day is the culminating event of the term, where students showcase
        their final projects to friends, family, and the Mission Bit community.
        This event is required for students. Friends and family are strongly
        encouraged to attend, so mark your calendar for{" "}
        {LongDateFormat.format(SummerDates.demoDay)}!
      </FaqItem>

      <FaqItem question="Where are your classes?">
        Our classes are located throughout San Francisco and the Bay Area.
        Students can take our classes at any of our locations. Some students
        choose to take our classes at a school closer to their home, even if
        they attend a different school!
      </FaqItem>
      <FaqItem question="How long are your classes?">
        Our Fall and Spring courses are 2-hour classes twice a week after
        school, running for 11 weeks. During the summer, we run intensive
        introductory and advanced courses that are 5 days a week for 6 weeks.
      </FaqItem>

      <FaqItem question="What are your eligibility requirements?">
        Any Bay Area high school student or 8th grade middle school student is
        encouraged to apply to our programs. There are no GPA requirements.
      </FaqItem>

      <FaqItem question="Which class should I sign up for?">
        All our classes are taught at an introductory level, but our Web Design
        and Unity Game Design classes provide a solid foundation for beginners.
        You can take our Android Game Design class with no experience, but the
        class is more fast-paced compared to the others.
      </FaqItem>

      <FaqItem question="Who teaches Mission Bit classes?">
        Most of our classes are taught by college students and software
        engineers who are passionate about computer science education.
      </FaqItem>

      <FaqItem question="How can I sign up for a class?">
        You can scroll down and click on the Register Now button to apply!
      </FaqItem>
    </Container>
  );
};

export default Faq;
