import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import VioletButton from "components/VioletButton";
import IndigoButton from "components/IndigoButton";

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
  buttons: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  button: {
    fontSize: theme.typography.pxToRem(25),
    width: "12rem",
    "&:nth-child(n + 2)": {
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(3),
      },
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "10rem",
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      width: "7.5rem",
      fontSize: "1rem",
    },
  },
  imageWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    position: "relative",
    bottom: "-5%",
    maxWidth: "40vw",
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
          Welcome to our Summer 2020 Demo Day
        </Typography>
        <Box className={classes.buttons}>
          <IndigoButton
            variant="contained"
            href="#agenda"
            size="large"
            className={classes.button}
          >
            Agenda
          </IndigoButton>
          <VioletButton
            variant="contained"
            href="#projects"
            size="large"
            className={classes.button}
          >
            Projects
          </VioletButton>
        </Box>
      </Box>
      <Box className={classes.imageWrapper}>
        <img
          src={require("public/images/get-involved/hands.svg")}
          className={classes.image}
          alt=""
        />
      </Box>
    </Container>
  );
};

export default Landing;
