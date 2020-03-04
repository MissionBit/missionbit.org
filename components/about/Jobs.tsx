import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > ul": {
      margin: `${theme.spacing(3)}px auto`
    }
  }
}));

const Jobs: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="jobs" className={classes.root}>
      <Typography variant="h4" component="h2" align="center">
        Job Openings
      </Typography>
      <Typography variant="h5" component="ul">
        <li>
          <a href="/images/jobs/missionBitLeadInstructorJobDescription.pdf">
            Lead Instructor
          </a>
        </li>
        <li>
          <a href="/images/jobs/missionBitInstructorsAssistantJobDescription.pdf">
            Instructor's Assistant
          </a>
        </li>
      </Typography>
    </section>
  );
};

export default Jobs;
