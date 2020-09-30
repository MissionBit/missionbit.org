import * as React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import YouTubeVideo from "components/YouTubeVideo";
import Link from "@material-ui/core/Link";
import VioletButton from "components/VioletButton";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(6, 0),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 0, 6, 0),
    },
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
    margin: theme.spacing(0, 2),
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
    padding: theme.spacing(3, 2, 2, 2),
    fontSize: theme.typography.pxToRem(33),
    lineHeight: 1.5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.pxToRem(35),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(24),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 2, 0, 2),
    },
  },
  button: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
    fontSize: theme.typography.pxToRem(35),
  },
  copy: {
    padding: theme.spacing(2, 2, 2, 2),
    // marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(25),
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: theme.typography.body1.fontSize,
    // },
  },
}));

const Register: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box component="section" id="register" className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.copyButton}>
          <Typography
            variant="h2"
            className={classes.heading}
            color="textSecondary"
          >
            Mission Bit offers free coding classes for high school students in
            the San Francisco area. We also offer after-school workshops, summer
            bootcamps, and project-based tech industry experiences.
          </Typography>
          <Typography variant="h2" className={classes.copy} color="secondary">
            <Link href="/programs#workshops" color="secondary">
              Register
            </Link>{" "}
            for our 90-minute workshops today!
          </Typography>
          <VioletButton
            href="/programs#workshops"
            size="large"
            variant="outlined"
            className={classes.button}
          >
            Register
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
