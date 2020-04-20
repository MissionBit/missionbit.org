import * as React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { brand } from "../../src/colors";
import { makeStyles } from "@material-ui/core/styles";
import SignUpButton from "./SignUpButton";
import PhotoText from "./PhotoText";

const useStyles = makeStyles((theme) => ({
  root: {
    background: brand.orange,
    padding: theme.spacing(4, 0),
  },
  heading: {
    margin: theme.spacing(0, 0, 4, 0),
    textAlign: "center",
  },
  wrapper: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signUp: {
    marginTop: theme.spacing(2),
  },
}));

const Volunteers: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="volunteers" className={classes.root}>
      <Container>
        <Typography variant="h4" className={classes.heading}>
          Our Volunteers
        </Typography>
        <Paper elevation={0} className={classes.wrapper}>
          <PhotoText
            src={require("../../public/images/get-involved/volunteer-2.jpg")}
          >
            <Typography variant="body1">
              Mission Bit's volunteers are the heart and soul of the
              organization. Our classroom volunteers play an essential role in
              providing one on one support to our students and assisting our
              instructors. As a classroom volunteer, you will engage a diverse
              group of students through a project-based coding course. We also
              recruit volunteers for one-time events (no coding knowledge
              required) who support Mission Bit throughout the year. These
              events include our workshops, Demo Day, and our annual gala.
            </Typography>
          </PhotoText>
          <SignUpButton className={classes.signUp} />
        </Paper>
      </Container>
    </section>
  );
};

export default Volunteers;
