import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&::before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: -1,
    minHeight: 56,
    justifyContent: "center",
    "&$expanded": {
      minHeight: 56,
    },
  },
  expandIcon: {
    padding: 0,
    color: theme.palette.secondary.main,
  },
  content: {
    flexGrow: 0,
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles(() => ({
  root: {
    padding: 0,
  },
}))(MuiAccordionDetails);

const ExpansionLink: React.FC<{
  summary: React.ReactNode;
  children: React.ReactNode;
}> = ({ summary, children }) => (
  <Accordion square>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default ExpansionLink;
