import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import VioletButton from "components/VioletButton";
import IndigoButton from "components/IndigoButton";
import OrangeButton from "components/OrangeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  column: {
    flex: "1 0 240px",
    padding: theme.spacing(0, 3),
    [theme.breakpoints.between("xs", "sm")]: {
      flex: "1 1 100%",
    },
    [theme.breakpoints.down("xs")]: {
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
      fontSize: theme.typography.h4.fontSize,
    },
  },
  copy: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(28),
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  buttons: {
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
    marginTop: theme.spacing(4),
  },
  button: {
    fontSize: theme.typography.pxToRem(22),
    width: "10.5rem",
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      "&:nth-child(n + 2)": {
        marginLeft: theme.spacing(2),
      },
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "10rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      textAlign: "center",
      margin: "1rem auto",
      width: "10em",
      fontSize: "0.8rem",
    },
  },
  imageWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    width: "33vw",
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  },
}));

const Landing: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="landing" component="section" className={classes.root}>
      <Box className={classes.column}>
        <Typography variant="h2" className={classes.title}>
          Become an Innovator
        </Typography>
        <Typography className={classes.copy} component="h1">
          Mission Bit provides free after-school coding courses,{" "}
          <Link href="/programs/workshops">workshops</Link>, and{" "}
          <Link href="/programs/courses">summer bootcamps</Link> to high school
          students from underserved and underrepresented communities.
        </Typography>
        <Box className={classes.buttons}>
          <VioletButton
            variant="contained"
            href="/programs/workshops"
            size="large"
            className={classes.button}
          >
            Workshops
          </VioletButton>
          <IndigoButton
            variant="contained"
            href="/programs/courses"
            size="large"
            className={classes.button}
          >
            Classes
          </IndigoButton>
          <OrangeButton
            variant="contained"
            href="/programs/career-prep"
            size="large"
            className={classes.button}
          >
            Career Prep
          </OrangeButton>
        </Box>
      </Box>
      <Box className={classes.imageWrapper}>
        <img
          alt=""
          src={require("public/images/program/programs-page.svg")}
          className={classes.image}
        />
      </Box>
    </Container>
  );
};

export default Landing;
