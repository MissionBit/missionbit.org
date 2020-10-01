import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "./icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightRegular,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(17),
    },
  },
  expand: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(17),
    },
  },
}));

const FaqItem: React.FC<{
  question: React.ReactNode;
  children: React.ReactNode;
}> = ({ question, children }) => {
  const classes = useStyles();
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className={classes.expand} />}
      >
        <Typography className={classes.heading}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div">{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqItem;
