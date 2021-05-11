import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { GalaCTA } from "./GalaCTA";

const COPY_PX = 24;
const COPY_PX_SM = 16;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    marginTop: theme.spacing(3),
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
      "title image"
      "copy image"
    `,
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "title"
        "image"
        "copy"
      `,
    },
  },
  title: {
    gridArea: "title",
    marginBottom: theme.spacing(2),
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
  cta: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  copy: {
    gridArea: "copy",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(COPY_PX),
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      display: "none",
      fontSize: theme.typography.pxToRem(COPY_PX_SM),
      textAlign: "center",
    },
  },
  imageWrapper: {
    gridArea: "image",
    position: "relative",
    textAlign: "center",
    padding: theme.spacing(0, 4),
  },
  image: {
    objectFit: "contain",
    maxHeight: 150,
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "min(100%, 40vh)",
      objectFit: "contain",
    },
  },
}));

export const GALA_LANDING_COPY = (
  <>
    Mission Bit’s 5th Annual Gala is a celebration of eight years of growth,
    impact, and learning. Join us for this inspiring event, meet our students,
    hear their stories, and help us reach our 2022 goals!
  </>
);

export const GalaLanding: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Container id="landing" component="section" className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Fifth Annual Gala
      </Typography>
      <div className={classes.cta}>
        <GalaCTA heading={null} />
      </div>
      <Typography className={classes.copy}>{GALA_LANDING_COPY}</Typography>
      <Box className={classes.imageWrapper}>
        <img
          src={require("public/images/gala/champagne-flutes.svg")}
          alt="Champagne Flutes"
          className={classes.image}
        />
      </Box>
    </Container>
  );
};

export default GalaLanding;
