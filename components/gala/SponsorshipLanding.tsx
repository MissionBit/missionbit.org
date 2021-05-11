import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { galaStartEnd } from "./GalaDates";
import PinIcon from "components/icons/Pin";
import { brand } from "src/colors";
import AsteriskCollage from "./AsteriskCollage";

const DETAILS_PX = 32;
const DETAILS_PX_SM = 24;
const COPY_PX = 24;
const COPY_PX_SM = 16;

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
  copy: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(COPY_PX),
    lineHeight: 1.75,
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(COPY_PX_SM),
      textAlign: "center",
    },
  },
  details: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(DETAILS_PX),
    lineHeight: 1.5,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(DETAILS_PX_SM),
      textAlign: "center",
    },
  },
  pin: {
    color: brand.violet,
    position: "relative",
    lineHeight: 1.75,
    fontSize: theme.typography.pxToRem(DETAILS_PX),
    top: theme.typography.pxToRem(DETAILS_PX / 8),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(DETAILS_PX_SM),
      top: theme.typography.pxToRem(DETAILS_PX_SM / 8),
    },
  },
  imageWrapper: {
    display: "flex",
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}));

const SponsorLandingCollage: React.FC<{
  className?: string;
}> = ({ className }) => {
  const jpg = require("public/images/gala/sponsorship/sponsorship-landing.jpg?resize&sizes[]=1140&sizes[]=570&sizes[]=285");
  const webp = require("public/images/gala/sponsorship/sponsorship-landing.jpg?resize&sizes[]=1140&sizes[]=570&sizes[]=285&format=webp");
  const desc = "Mission Bit Gala attendees during fund-a-need";
  return (
    <AsteriskCollage
      id="landing-collage"
      className={className}
      width={570}
      height={434}
      top={88}
      left={-70}
      bottom={72}
      right={70}
      fill={brand.orangeFlourish}
      desc={desc}
      src={jpg.src}
      srcSet={jpg.srcSet}
      srcSetWebP={webp.srcSet}
    />
  );
};

const SponsorshipLanding: React.FC<{}> = () => {
  const classes = useStyles();
  const { date, time } = galaStartEnd();
  return (
    <Container id="landing" component="section" className={classes.root}>
      <Box className={classes.column}>
        <Typography variant="h2" component="h1" className={classes.title}>
          Sponsor the Fifth Annual Gala
        </Typography>
        <Typography className={classes.details}>
          {date}
          <br />
          {time}
          <br />
          <PinIcon className={classes.pin} /> TBD
        </Typography>
        <Typography className={classes.copy}>
          Mission Bit’s 5th Annual Gala is a celebration of eight years of
          growth, impact, and learning. Join us for this inspiring event, meet
          our students, hear their stories, and help us reach our 2022 goals!
        </Typography>
      </Box>
      <Box className={classes.imageWrapper}>
        <SponsorLandingCollage className={classes.image} />
      </Box>
    </Container>
  );
};

export default SponsorshipLanding;
