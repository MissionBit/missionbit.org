import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  openings: {
    margin: `${theme.spacing(3)}px auto`,
    fontSize: theme.typography.h5.fontSize,
  },
}));

interface JobOpening {
  href: string;
  title: string;
}

const JobOpenings: JobOpening[] = [
  // {
  //   href: "/images/jobs/missionBitLeadInstructorJobDescription.pdf",
  //   title: "Lead Instructor",
  // },
  // {
  //   href: "/images/jobs/missionBitInstructorsAssistantJobDescription.pdf",
  //   title: "Instructor's Assistant",
  // },
];

const Jobs: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="jobs" className={classes.root}>
      <Typography variant="h4" component="h2" align="center">
        Job Openings
      </Typography>
      {JobOpenings.length === 0 ? (
        <Typography className={classes.openings}>
          We are no longer hiring for the summer. Please check back in August!
        </Typography>
      ) : (
        <Typography className={classes.openings} component="ul">
          {JobOpenings.map(({ href, title }, i) => (
            <li key={i}>
              <a href={href}>{title}</a>
            </li>
          ))}
        </Typography>
      )}
    </Container>
  );
};

export default Jobs;
