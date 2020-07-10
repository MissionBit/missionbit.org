import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IndigoButton from "components/IndigoButton";
import { brand } from "src/colors";
import VolunteerCollage, { VolunteerImage } from "./VolunteerCollage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(0, 0, 8, 0),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  column: {
    flex: "0 0 50%",
    padding: theme.spacing(0, 3),
    [theme.breakpoints.between("xs", "sm")]: {
      flex: "0 0 70%",
    },
    [theme.breakpoints.down("xs")]: {
      flex: 1,
    },
  },
  title: {
    margin: theme.spacing(3, 0),
    textAlign: "center",
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.5,
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
      margin: theme.spacing(1.5, 0),
    },
  },
  copy: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(28),
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(12),
    },
  },
  buttons: {
    margin: theme.spacing(4, 0),
    textAlign: "center",
  },
  button: {
    fontSize: theme.typography.pxToRem(25),
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  imageWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "33vw",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      backgroundColor: brand.indigo,
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: theme.spacing(0, 1),
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      width: "100%",
      height: "auto",
    },
  },
  image: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  },
  largeImage: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smallImage: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Volunteers: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="volunteer" component="section" className={classes.root}>
      <Box className={classes.column}>
        <Typography variant="h2" component="h1" className={classes.title}>
          Our Volunteers
        </Typography>
        <Typography className={classes.copy}>
          Mission Bit’s volunteers are the heart and soul of the organization.
          Our classroom volunteers play an essential role in providing one on
          one support to our students and assisting our instructors. We also
          recruit volunteers for one-time events (no technical skills required)
          who support us during the year. These events include our workshops,
          Demo Day, and our annual gala.
        </Typography>
        <Box className={classes.buttons}>
          <IndigoButton
            variant="contained"
            href="https://www.tfaforms.com/4835077"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            className={classes.button}
          >
            Become a Volunteer
          </IndigoButton>
        </Box>
      </Box>
      <Box className={classes.imageWrapper}>
        <VolunteerCollage
          className={`${classes.image} ${classes.largeImage}`}
        />
        <VolunteerImage className={`${classes.image} ${classes.smallImage}`} />
      </Box>
    </Container>
  );
};

export default Volunteers;
