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
  //   href: "/images/jobs/InstructorF21.pdf",
  //   title: "Fall Coding Instructor",
  // },
  // {
  //   href: "/images/jobs/CurriculumAssistant.pdf",
  //   title: "Part Time Coding Curriculum Assistant (VR/Game Design)",
  // },
];

const Jobs: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="jobs" className={classes.root}>
      <Typography variant="h4" component="h2" align="center">
        Job Openings
      </Typography>
      {/* <Typography variant="h6" align="center">
        Please email your resume and cover letter to hiring@missionbit.org.
      </Typography> */}
      {JobOpenings.length === 0 ? (
        <Typography className={classes.openings}>
          Check out our open positions{" "}
          <a
            href="https://missionbit.notion.site/Job-Board-a2e8e23be3704823b7bb62111ba77f9c"
            target="_blank"
            rel="noreferrer"
          >
            here.
          </a>
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
