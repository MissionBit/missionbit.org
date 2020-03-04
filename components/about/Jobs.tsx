import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  jobs: theme.typography.body1
}));

const Jobs: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="jobs">
      <Typography variant="h4" component="h2" align="center">
        Job Openings
      </Typography>
      <ul className={classes.jobs}>
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
      </ul>
    </section>
  );
};

export default Jobs;
