import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import YouTubeVideo from "../YouTubeVideo";
import Link from "@material-ui/core/Link";
import VioletButton from "../VioletButton";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(6, 0),
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      padding: 0,
    },
  },
  copyButton: {
    maxWidth: 440,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "initial",
    },
  },
  videoContainer: {
    position: "relative",
    flexGrow: 1,
  },
  videoOutline: {
    position: "absolute",
    left: -20,
    top: -20,
    right: 20,
    bottom: 20,
    border: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  heading: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(50),
    lineHeight: theme.typography.pxToRem(75),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2, 0, 2),
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(36),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
    fontSize: theme.typography.pxToRem(35),
  },
}));

const Register: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="register" className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.copyButton}>
          <Typography
            variant="h4"
            className={classes.heading}
            color="secondary"
          >
            <Link href="/programs#courses" color="secondary">
              Register
            </Link>{" "}
            for online summer classes now!
          </Typography>
          <VioletButton
            href="/programs#courses"
            size="large"
            variant="outlined"
            className={classes.button}
          >
            Register Now
          </VioletButton>{" "}
        </Box>
        <Box className={classes.videoContainer}>
          <div className={classes.videoOutline} />
          <YouTubeVideo id="bF5XmVRDWBk" />
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
