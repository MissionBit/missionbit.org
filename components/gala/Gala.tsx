import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import { makeStyles } from "@material-ui/core/styles";
import { DEVELOPMENT_EMAIL } from "src/emails";
import GalaLanding, { GALA_LANDING_COPY } from "./GalaLanding";
import FlourishSeparator from "components/programs/FlourishSeparator";
import SponsorSection from "./SponsorSection";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";
import IndigoButton from "components/IndigoButton";
import { Box } from "@material-ui/core";
import RectImage from "components/RectImage";
import AsteriskCollage from "./AsteriskCollage";
import Metadata from "./Metadata";
import Speakers from "./Speakers";
import { GalaCTA } from "./GalaCTA";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(4),
  },
  emojiBullets: {
    listStyle: "none",
    paddingLeft: 0,
    textIndent: 0,
    fontSize: theme.typography.pxToRem(16),
    "& > li[data-bullet]": {
      display: "flex",
      minHeight: "2em",
      alignItems: "center",
      paddingBottom: 0,
      "&::before": {
        content: "attr(data-bullet)",
        fontSize: "200%",
        paddingRight: "0.5em",
      },
    },
  },
  copySection: {
    "& > p": {
      margin: theme.spacing(2, 0),
    },
  },
  videoSection: {
    marginBottom: theme.spacing(8),
  },
  link: {
    color: brand.violet,
  },
  button: {
    fontSize: theme.typography.pxToRem(35),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  sponsorshipTitle: {
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
      fontSize: theme.typography.h5.fontSize,
    },
  },
  sponsorshipCopy: {
    fontSize: theme.typography.pxToRem(24),
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
      padding: theme.spacing(2, 0),
    },
  },
  sponsorshipActions: {},
  actionContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `"main"`,
    },
  },
  actionPhoto: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& > svg": {
      width: "100%",
    },
  },
  smallActionPhoto: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  actionColumnExtra: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  actionColumnMain: {
    "& > svg": {
      width: "100%",
      margin: theme.spacing(0, 3),
    },
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(6),
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridGap: theme.spacing(2),
    },
  },
  studentsCollage: {
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, -2),
      "& svg use": {
        display: "none",
      },
    },
  },
  detailsCopy: {
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  landingCopy: {
    lineHeight: 1.75,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(16),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  cta: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function rectColImg(photo: string) {
  const jpg = require(`public/images/gala/photos/${photo}.jpg?resize&sizes[]=216&sizes[]=432&sizes[]=864`);
  const webp = require(`public/images/gala/photos/${photo}.jpg?resize&sizes[]=216&sizes[]=432&sizes[]=864&format=webp`);
  return {
    id: photo,
    src: jpg.src,
    srcSet: jpg.srcSet,
    srcSetWebp: webp.srcSet,
    width: 432,
    height: 432,
    fill: brand.lightOrange,
  } as const;
}

function rectStudentsImg(photo: string) {
  const jpg = require(`public/images/gala/photos/${photo}.jpg?resize&sizes[]=359&sizes[]=718`);
  const webp = require(`public/images/gala/photos/${photo}.jpg?resize&sizes[]=359&sizes[]=718&format=webp`);
  return {
    id: photo,
    src: jpg.src,
    srcSet: jpg.srcSet,
    srcSetWebp: webp.srcSet,
    width: 359 * 2,
    height: 316 * 2,
    fill: brand.lightOrange,
  } as const;
}

const Gala: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <main id="main" className={classes.root}>
      <Metadata />
      <GalaLanding />
      <FlourishSeparator />
      <Container component="section" className={classes.actionContainer}>
        <Box className={classes.actionColumnExtra}>
          <Box className={classes.actionPhoto} paddingTop={12} paddingRight={6}>
            <RectImage
              {...rectColImg("gala-step-and-repeat")}
              desc="Step and repeat from the 2019 Mission Bit Gala"
              top={41}
              bottom={41}
              left={46}
              right={46}
            />
          </Box>
        </Box>
        <Box className={classes.actionColumnMain}>
          <Typography className={classes.landingCopy}>
            {GALA_LANDING_COPY}
          </Typography>
          <GalaCTA classes={{ heading: classes.cta, date: classes.cta }} />
          <Box className={classes.actionPhoto} paddingX={3} paddingTop={6}>
            <RectImage
              {...rectColImg("gala-ruqaiyah-speaking")}
              desc="Ruqaiyah Angeles speaking at the 2019 Mission Bit Gala"
              top={41}
              bottom={41}
              left={-46}
              right={-46}
            />
          </Box>
          <Box className={classes.smallActionPhoto} marginX={-2} paddingTop={2}>
            <RectImage
              {...rectColImg("gala-ruqaiyah-speaking")}
              desc="Ruqaiyah Angeles speaking at the 2019 Mission Bit Gala"
              top={228}
              bottom={50}
              left={-46}
              right={46}
            />
          </Box>
        </Box>
        <Box className={classes.actionColumnExtra}>
          <Box className={classes.actionPhoto} paddingTop={12} paddingLeft={6}>
            <RectImage
              {...rectColImg("gala-table")}
              desc="Table at the 2019 Mission Bit Gala"
              top={-41}
              bottom={-41}
              left={-46}
              right={-46}
            />
          </Box>
        </Box>
      </Container>
      <FlourishSeparator />
      <Container component="section" className={classes.details}>
        <Typography className={classes.detailsCopy}>
          Mission Bit strives to bridge the tech divide by providing free coding
          courses to high school students in San Francisco and Oakland.
          <br />
          <br />
          The gala will feature a Keynote from{" "}
          <Link color="secondary" href="#michael-tubbs">
            Mayor Michael Tubbs of Stockton
          </Link>
          , a Welcome Address from{" "}
          <Link color="secondary" href="#london-breed">
            Mayor London Breed of San Francisco
          </Link>
          , stories from Mission Bit alumni, and presentations of student
          projects!
        </Typography>
        <Box className={classes.studentsCollage}>
          <AsteriskCollage
            {...rectStudentsImg("gala-students")}
            desc="Students attending the 2019 Mission Bit Gala"
            top={88}
            left={-70}
            bottom={72}
            right={70}
          />
        </Box>
      </Container>
      <FlourishSeparator />
      <Speakers />
      <FlourishSeparator />
      <Container component="section" id="sponsorship-info">
        <Typography
          variant="h2"
          className={classes.sponsorshipTitle}
          align="center"
        >
          Looking to sponsor Mission Bit's Fourth Annual Gala?
        </Typography>
        <Typography className={classes.sponsorshipCopy} align="center">
          Contact{" "}
          <Link
            className={classes.link}
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {DEVELOPMENT_EMAIL}
          </Link>{" "}
          with questions
        </Typography>
        <Box className={classes.sponsorshipActions} textAlign="center">
          <IndigoButton
            variant="outlined"
            size="large"
            href="/gala/sponsorship"
            className={classes.button}
          >
            Gala Sponsorship Packages
          </IndigoButton>
        </Box>
      </Container>
      <FlourishSeparator />
      <Container component="section">
        <GalaVideo />
      </Container>
      <FlourishSeparator />
      <SponsorSection />
    </main>
  );
};

export default Gala;
