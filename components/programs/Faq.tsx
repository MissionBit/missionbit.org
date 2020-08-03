import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FaqItem from "components/FaqItem";
import { LongDateFormat, LongDateTimeFormat } from "src/dates";
import { FallDates } from "./ClassInstanceData";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiExpansionPanel-root::before": {
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
      <FaqItem question="Should I apply for a Fall 2020 class?">
        Mission Bit has a selective admissions process, but we highly encourage
        all interested students to apply! We seek to create a strong learning
        community with committed young people who bring a variety of
        perspectives to the classroom. To be considered for admissions, students
        are required to submit a written application after they submit the first
        one and take part in a Student Admissions Phone Screening that will take
        place on
        {LongDateFormat.format(FallDates.interview)}. Please provide accurate
        email information for the screening and written application.
      </FaqItem>

      <FaqItem question="How can I apply for a class?">
        You can scroll up and click on the Student Application button to apply!
      </FaqItem>

      <FaqItem question="What is the application deadline for Fall 2020?">
        The application deadline is{" "}
        {LongDateTimeFormat.format(FallDates.registrationDeadline)}.
      </FaqItem>

      <FaqItem question="Are Mission Bit programming classes free?">
        Yes! Our classes are completely free to you as long as you're a high
        schooler located in San Francisco. If you live outside of SF you can
        still participate in our workshops!
      </FaqItem>

      <FaqItem question="What is Demo Day?">
        Demo Day is the culminating event of the term, where students showcase
        their final projects to friends, family, and the Mission Bit community.
        This event is required for students. Friends and family are strongly
        encouraged to attend, so mark your calendar for{" "}
        {LongDateFormat.format(FallDates.demoDay)}!
      </FaqItem>

      <FaqItem question="Where are your classes?">
        {/* Our classes are located throughout San Francisco and the Bay Area.
        Students can take our classes at any of our locations. Some students
        choose to take our classes at a school closer to their home, even if
        they attend a different school!   */}
        Due to COVID-19, we will be doing remote programming until the end of
        the Fall.
      </FaqItem>
      <FaqItem question="How long are your classes?">
        Our Fall and Spring courses are 2.5-hour classes twice a week after
        school, running for 11 weeks. During the summer, we run intensive
        courses that are 3 days a week for 6 weeks.
      </FaqItem>

      <FaqItem question="What are your eligibility requirements?">
        Any Bay Area high school student or 8th grade middle school student is
        encouraged to apply to our programs. There are no GPA requirements.
      </FaqItem>

      <FaqItem question="Which class should I sign up for?">
        All our classes are taught at an introductory level and provide a solid
        foundation for beginners. Join our Web Design class if you want to learn
        about design and how to create beautiful websites. Take our Unity Game
        Design class and learn about creating engaging gameplay in video games.
        This fall, we also have two NEW classes: Intro to Python, and Intro to
        Javascript. Both of these languages are heavily used in the industry
        today and after you learn the foundations with us, you'll be able to
        apply your skills to bigger, more amazing projects
      </FaqItem>

      <FaqItem question="Who teaches Mission Bit classes?">
        Most of our classes are taught by college students and software
        engineers who are passionate about computer science education.
      </FaqItem>
    </Container>
  );
};

export default Faq;
