import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IndigoButton from "components/IndigoButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
      "title image"
      "buttons image"
    `,
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2, 4),
      marginTop: theme.spacing(0),
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "title"
        "image"
        "buttons"
      `,
    },
  },
  title: {
    gridArea: "title",
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
      marginBottom: theme.spacing(1),
      textAlign: "center",
    },
  },
  buttons: {
    gridArea: "buttons",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(2),
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
    [theme.breakpoints.down("sm")]: {
      width: "10rem",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  imageWrapper: {
    gridArea: "image",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    maxHeight: "50vh",
    width: "100%",
    height: "auto",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "35vh",
    },
  },
}));

const Landing: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="landing" component="section" className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Summer Demo Day Projects
      </Typography>
      <Box className={classes.buttons}>
        <IndigoButton
          variant="contained"
          href="/demoday"
          size="large"
          className={classes.button}
        >
          Back to this Demo Day
        </IndigoButton>
      </Box>
      <Box className={classes.imageWrapper}>
        <img
          src={require("public/images/stats/students.svg")}
          className={classes.image}
          alt=""
        />
      </Box>
    </Container>
  );
};

export default Landing;
