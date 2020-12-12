import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

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
        <picture className={classes.photo}>
          <source
            type="image/webp"
            srcSet={require("public/images/program/safia_jaleel.jpg?webp")}
          />
          <img
            alt="Mission Bit student"
            src={require("public/images/program/safia_jaleel.jpg")}
          />
        </picture>
      </Box>
      <Box className={classes.copyColumn}>
        <Typography className={classes.copy}>
          This program gives students all the skills they need to successful
          Sales Development Representatives. The bootcamp consists of three
          three phases.
        </Typography>
        <Typography className={classes.copy}>
          In phase 1, students complete soft skills training to gain necessary
          skills and tools to facilitate their entry into the tech field. In
          phase 2, students begin to learn specialized skills needed to land a
          job as a Sales Development Representative. In phase 3, students
          complete a four week career placement course to help prepare them for
          the workforce.
        </Typography>
      </Box>
    </Container>
  );
};

export default Description;
