import * as React from "react";
import AddToCalendar from "./AddToCalendar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import { makeStyles } from "@material-ui/core/styles";
import { GalaCalendarEvent, galaStartEnd } from "./GalaDates";
import { DEVELOPMENT_EMAIL } from "src/emails";
import GalaLanding from "./GalaLanding";
import FlourishSeparator from "components/programs/FlourishSeparator";
import SponsorSection from "./SponsorSection";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";
import IndigoButton from "components/IndigoButton";
import { Box } from "@material-ui/core";
import RectImage from "components/RectImage";
import AsteriskCollage from "./AsteriskCollage";

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
  addToCalendar: {
    display: "block",
    margin: `${theme.spacing(2)}px auto`,
  },
  saveTheDateHeading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h6.fontWeight,
    },
  },
  saveTheDate: {
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.25rem",
      fontWeight: theme.typography.h6.fontWeight,
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
    alignSelf: "center",
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize,
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
  const { date, time } = galaStartEnd();
  return (
    <main id="main" className={classes.root}>
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
          <Box className={classes.actionPhoto} paddingX={3} paddingBottom={6}>
            <RectImage
              {...rectColImg("gala-ruqaiyah-speaking")}
              desc="Ruqaiyah Angeles speaking at the 2019 Mission Bit Gala"
              top={41}
              bottom={41}
              left={-46}
              right={-46}
            />
          </Box>
          <Box
            className={classes.smallActionPhoto}
            marginX={-2}
            paddingBottom={2}
          >
            <RectImage
              {...rectColImg("gala-ruqaiyah-speaking")}
              desc="Ruqaiyah Angeles speaking at the 2019 Mission Bit Gala"
              top={228}
              bottom={50}
              left={-46}
              right={46}
            />
          </Box>
          <Typography
            component="h2"
            variant="h3"
            align="center"
            className={classes.saveTheDateHeading}
          >
            Save the Date
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.saveTheDate}
          >
            {date}
            <br />
            {time}
            <br />
            Online
            <br />
            <AddToCalendar
              event={GalaCalendarEvent}
              className={classes.addToCalendar}
            />
          </Typography>
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
