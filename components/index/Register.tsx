import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import YouTubeVideo from "../YouTubeVideo";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
    textAlign: "center",
    marginBottom: "3rem",
  },
  button: {
    marginTop: theme.spacing(2),
    fontSize: "2rem",
  },
}));

const Register: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="mission" className={classes.root}>
      <Container>
        <Typography variant="h4">
          <Link href="/programs#courses">Register</Link> for online summer
          classes now!
        </Typography>
        <YouTubeVideo id="bF5XmVRDWBk" />
        <Button
          href="/programs#courses"
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
        >
          Register Now
        </Button>
      </Container>
    </Box>
  );
};

export default Register;
