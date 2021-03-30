import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
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
    fontSize: theme.typography.pxToRem(35),
    // fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h4.fontSize,
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h5.fontSize,
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
  },
  copy: {
    // fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(25),
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
    width: "12.5rem",
    padding: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      "&:nth-child(n + 2)": {
        // marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
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
  },
  image: {
    width: "33vw",
    maxWidth: "70%",
    height: "auto",
    objectFit: "contain",
  },
}));

const CodeAtHome: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="landing" component="section" className={classes.root}>
      <Box className={classes.imageWrapper}>
        <img
          alt=""
          src={require("public/images/program/code-at-home/mlk.jpg")}
          className={classes.image}
        />
      </Box>
      <Box className={classes.column}>
        <Typography variant="h2" className={classes.title}>
          MLK Quote Generator
        </Typography>
        <Typography className={classes.copy} component="h1">
          In this activity, we will learn how to create a Random Quote Generator
          app with HTML, CSS, and JavaScript. In honor of Black History Month
          which is during the month of February (& every month!) we will use
          Martin Luther King Jr.'s most notable quotes as we work on this
          project. If you wish to use different characters or themes, feel free
          to add in your own images and backgrounds and personalize it!
        </Typography>
        <OrangeButton
          variant="contained"
          href="https://drive.google.com/file/d/1TRl1-wBUg_v2PqdQZwJ-HGmuT_voMOTB/view?usp=sharing"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >
          Download
        </OrangeButton>
      </Box>
    </Container>
  );
};

export default CodeAtHome;
