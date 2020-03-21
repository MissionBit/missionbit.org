import * as React from "react";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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

export default FaqItem;
