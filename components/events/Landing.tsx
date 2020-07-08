import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(3, 0, 0, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3, 0),
      flexDirection: "column",
    },
  },
  column: {
    flex: "0 0 50%",
    padding: theme.spacing(0, 3, 3, 3),
    [theme.breakpoints.down("sm")]: {
      flex: 1,
    },
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(36),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      textAlign: "center",
    },
  },
  copy: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(28),
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
      textAlign: "center",
    },
  },
  imageWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    position: "relative",
    maxWidth: "40vw",
    maxHeight: 500,
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}));

const Landing: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="landing" component="section" className={classes.root}>
      <Box className={classes.column}>
        <Typography variant="h2" component="h1" className={classes.title}>
          Events
        </Typography>
        <Typography className={classes.copy}>
          Mission Bit hosts many events throughout the year like our annual{" "}
          <Link href="#gala">Gala</Link> and end of term{" "}
          <Link href="#demo-day">Demo Day</Link> for our students, instructors,
          volunteers, and donors. Join our community and attend one of our
          events today!
        </Typography>
      </Box>
      <Box className={classes.imageWrapper}>
        <img
          src={require("public/images/events/step-and-repeat.svg")}
          className={classes.image}
          alt="Step and repeat illustration"
        />
      </Box>
    </Container>
  );
};

export default Landing;
