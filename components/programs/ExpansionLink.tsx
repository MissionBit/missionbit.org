import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ExpansionPanel = withStyles({
  root: {
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: -1,
    minHeight: 56,
    justifyContent: "flex-start",
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
}))(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(() => ({
  root: {
    padding: 0,
  },
}))(MuiExpansionPanelDetails);

const ExpansionLink: React.FC<{
  summary: React.ReactNode;
  children: React.ReactNode;
}> = ({ summary, children }) => (
  <ExpansionPanel square>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
  </ExpansionPanel>
);

export default ExpansionLink;
