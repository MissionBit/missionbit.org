import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import VioletButton from "../VioletButton";
import IndigoButton from "../IndigoButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(3, 0),
  },
  column: {
    flex: "0 0 50%",
    padding: theme.spacing(0, 3),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  copy: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(28),
    lineHeight: theme.typography.pxToRem(49),
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
  button: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightBold,
    width: "12rem",
    "&:nth-child(n + 2)": {
      marginLeft: theme.spacing(2),
    },
  },
  imageWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "33vw",
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
          Become an Innovator
        </Typography>
        <Typography className={classes.copy}>
          Mission Bit provides free after-school coding courses,{" "}
          <Link href="#workshops">workshops</Link>, and{" "}
          <Link href="#courses">summer bootcamps</Link> to high school students
          from underserved and underrepresented communities.
        </Typography>
        <Box className={classes.buttons}>
          <VioletButton
            variant="contained"
            href="#workshops"
            size="large"
            className={classes.button}
          >
            Workshops
          </VioletButton>
          <IndigoButton
            variant="contained"
            href="#courses"
            size="large"
            className={classes.button}
          >
            Classes
          </IndigoButton>
        </Box>
      </Box>
      <Box className={classes.imageWrapper}>
        <img
          src={require("../../public/images/program/programs-page.svg")}
          className={classes.image}
        />
      </Box>
    </Container>
  );
};

export default Landing;
