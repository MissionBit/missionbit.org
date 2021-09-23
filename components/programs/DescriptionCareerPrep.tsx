import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  copy: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(24),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
  imageColumn: {
    display: "flex",
    alignItems: "center",
    flexBasis: "33%",
  },
  copyColumn: {
    flex: 1,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginLeft: 0,
    },
  },
  photo: {
    width: "100%",
    "& > img": {
      width: "100%",
      maxHeight: "33vh",
      objectFit: "contain",
    },
  },
}));

const Description: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container component="section" id="description" className={classes.root}>
      <Box className={classes.imageColumn}>
        <Image
          className={classes.photo}
          alt="Mission Bit student"
          src={require("public/images/program/safia_jaleel.jpg").default}
        />
      </Box>
      <Box className={classes.copyColumn}>
        <Typography className={classes.copy}>
          This program gives students all the skills they need to be successful
          Sales Development Representatives. The bootcamp consists of three
          phases.
        </Typography>
        <Typography className={classes.copy}>
          In phase 1, students complete soft skills training to gain necessary
          skills and tools to facilitate their entry into the tech field. In
          phase 2, students receive individualized learning plans and begin to
          learn specialized skills needed to land a job as a Sales Development
          Representative. In phase 3, students work with recruiters to get
          matched with a tech company for a paid apprenticeship.
        </Typography>
      </Box>
    </Container>
  );
};

export default Description;
