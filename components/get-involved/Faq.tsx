import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import FaqItem from "../FaqItem";
import SignUpButton from "./SignUpButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0
    },
    "& > h4": {
      margin: theme.spacing(2, 0),
      textAlign: "center"
    }
  },
  signUpButton: {
    marginTop: theme.spacing(2)
  }
}));

const Faq: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="faq" className={classes.root}>
      <Typography variant="h4">Frequently Asked Questions</Typography>
      <FaqItem question="How can I help Mission Bit as a volunteer?">
        There are many different ways Mission Bit volunteers help us. Volunteers
        can provide support inside the classroom and out, but they can also help
        us build partnerships with companies that want to give back, secure
        equipment donations, or provide feedback on our programs. We welcome all
        volunteers who are passionate about our mission.
      </FaqItem>
      <FaqItem question="What computer languages do we teach?">
        In the classroom, we teach web design with HTML, CSS, and JavaScript and
        we teach game design with C# and Java. Although all of our classes are
        introductory, having a basic understanding of the languages taught in
        the specified course is required.
      </FaqItem>
      <FaqItem question="Where are your partner schools?">
        Visit the <Link href="/programs">programs</Link> page for a list of
        Mission Bit school partners.
      </FaqItem>
      <FaqItem question="How can my company support my volunteer work?">
        Many companies have a match program through the Human Resources
        Department, which encourages employees to volunteer by matching their
        volunteer hours. You can also talk to your company about becoming a
        partner to support our work. Scroll down to see our current partners and
        sponsors.
      </FaqItem>
      <SignUpButton className={classes.signUpButton} />
    </Container>
  );
};

export default Faq;
