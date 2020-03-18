import * as React from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const FaqItem: React.FC<{
  question: React.ReactNode;
  children: React.ReactNode;
}> = ({ question, children }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>{question}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{children}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

const Faq: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="faq" className={classes.root}>
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
