import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SpeakerData from "./SpeakerData";
import Person from "./Person";

const useStyles = makeStyles((_theme) => ({
  root: {},
}));

const Speakers: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="speakers" className={classes.root}>
      <Typography variant="h2" align="center">
        Featured Speakers
      </Typography>
      {SpeakerData.map((props, i) => (
        <Person key={i} {...props} />
      ))}
    </Container>
  );
};

export default Speakers;
