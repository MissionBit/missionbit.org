import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import GalaVideo from "./GalaVideo";
import { makeStyles } from "@material-ui/core/styles";
import { galaStartEnd } from "./GalaDates";
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
import BuyGalaTicket from "./BuyGalaTicket";
import PinIcon from "components/icons/Pin";
import Metadata from "./Metadata";

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
  buyTicket: {
    marginTop: theme.spacing(2),
  },
  pin: {
    color: brand.violet,
    position: "relative",
    top: 4,
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
            Get Your Ticket
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
            <PinIcon className={classes.pin} /> Online
            <br />
            <BuyGalaTicket className={classes.buyTicket} />
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
          <br />
          <br />
          The gala will feature inspiring keynote speakers, stories from Mission
          Bit alumni, and presentations of student projects!
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
      <Container component="section" id="speakers">
        <Typography>Keynote: Mayor Michael D. Tubbs</Typography>
        <Typography>Mayor of Stockton, CA</Typography>
        <Typography>
          On November 8, 2016, Michael Tubbs was elected to serve as the mayor
          of his hometown - Stockton, California. Upon taking office in January
          2017, Mayor Tubbs became Stockton’s first African-American Mayor and
          the youngest mayor of any major city in America. Mayor Tubbs’
          leadership paired with an ambitious progressive agenda has received
          national recognition. He has been recognized as one of Politico’s Top
          50, Fortune’s 2018 Top "40 under 40," Forbes' 2018 list of the “30
          Under 30”, and received the John F. Kennedy New Frontier Award in
          2019. In his first year, Mayor Tubbs secured $20 million to launch
          Stockton Scholars, a place-based scholarship that aims to dramatically
          increase the number of Stockton students entering and graduating from
          college. Mayor Tubbs also brought Advance Peace to Stockton, a
          data-driven program that works to reduce gun violence in communities.
          With an innovative public-private partnership supported by a $1
          million grant, Tubbs launched the nation’s first-ever mayor-led
          guaranteed income pilot known as Stockton Economic Empowerment
          Demonstration (SEED). Based on the success of SEED, Tubbs’ latest
          initiative is Mayors for a Guaranteed Income (MGI). MGI is a coalition
          of mayors advocating for a guaranteed income to ensure that all
          Americans have an income floor. Under his leadership Stockton has been
          named an All-America City three times, in 2018 was named the second
          most fiscally healthy city in the country, and homicides have been
          reduced by 40%.
          <br />
          <br />
          Before becoming mayor, Michael Tubbs earned a B.A. in Comparative
          Studies in Race &amp; Ethnicity and an M.A. in Policy, Leadership
          &amp; Organization studies from Stanford University with honors. He
          started his political career at age 22 when he was elected to serve as
          Stockton’s District 6 City Councilmember in 2012. While holding this
          position he founded the Reinvent South Stockton Coalition, a
          private-public-non-profit that aims to empower South Stockton
          residents to help eradicate cycles of intergenerational poverty. He
          was also a part of the council that led the city out of bankruptcy as
          Chair of the Audit and Legislative Committee. As a result of his
          dedication to innovative solutions to real problems, Tubbs has been a
          Fellow Hasso Plattner Institute of Design, known as the d.school, at
          Stanford, the Emerson Collective and MIT Media Lab. Mayor Tubbs is
          married to his Partner Anna Nti-Asare-Tubbs and is a proud new father
          as of 2019.
        </Typography>
        <Typography>Welcome Address: Mayor London Breed</Typography>
        <Typography>
          45th Mayor of the City and County of San Francisco
        </Typography>
        <Typography>
          Mayor London Breed is a native San Franciscan, raised by her
          grandmother in Plaza East Public Housing in the Western Addition. She
          graduated with honors from Galileo High School. In June 2018, Mayor
          Breed was elected to be the first African American woman and second
          woman in San Francisco history to serve as Mayor. She was re-elected
          for her first full four-year term in November 2019.
          <br />
          <br />
          She has focused on helping the City’s homeless population into care
          and shelter; adding more housing for residents of all income levels;
          helping those suffering from mental health and substance use disorder
          on San Francisco’s streets; ensuring that all San Franciscans have
          access to a thriving economy; making San Francisco a cleaner and safer
          city; and furthering San Francisco’s leadership in combating climate
          change.
          <br />
          <br />
          Prior to public service, Mayor Breed served as Executive Director of
          the African American Art &amp; Culture Complex in the Western Addition
          for over a decade. She also served as a San Francisco Redevelopment
          Agency Commissioner and in 2010 was appointed by then-Mayor Gavin
          Newsom to be a San Francisco Fire Commissioner, where she served until
          her election to the Board of Supervisors.
          <br />
          <br />
          In 2013, Mayor Breed was elected to the San Francisco Board of
          Supervisors, representing District 5 for six years, including three
          years as President of the Board.
        </Typography>
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
