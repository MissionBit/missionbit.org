import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import FaqItem from "components/FaqItem";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAccordion-root::before": {
      backgroundColor: brand.orange,
    },
    "& .MuiAccordionSummary-expandIcon": {
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
      <FaqItem question="Should I take a workshop?">
        Yes! You definitely should. Come and see if you like technology and
        building things.
      </FaqItem>

      <FaqItem question="How can I take a workshop?">
        You can scroll up and click on the Register button!
      </FaqItem>

      <FaqItem question="How many workshops can I take?">
        As many as you want! There is no limit.
      </FaqItem>

      <FaqItem question="Are Mission Bit workshops free?">
        Yes! Our workshops are completely free.
      </FaqItem>

      <FaqItem question="Where are your workshops?">
        {/* Our classes are located throughout San Francisco and the Bay Area.
        Students can take our classes at any of our locations. Some students
        choose to take our classes at a school closer to their home, even if
        they attend a different school!   */}
        Due to COVID-19, we will be doing remote programming until the Summer.
      </FaqItem>
      <FaqItem question="How long are your workshops?">
        Our youth workshops are 90-minutes and our adult workshops are
        120-minutes.
      </FaqItem>

      <FaqItem question="Who teaches Mission Bit workshops?">
        We have amazing faciliatators from lots of different companies. Our
        Student Advisory Board also teaches some of the workshops!
      </FaqItem>
    </Container>
  );
};

export default Faq;
