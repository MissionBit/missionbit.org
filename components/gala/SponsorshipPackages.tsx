import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { DEVELOPMENT_EMAIL } from "src/emails";
import IndigoButton from "components/IndigoButton";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { brand } from "src/colors";

const useStyles = makeStyles((theme) => ({
  buttons: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  button: {
    fontSize: theme.typography.pxToRem(35),
  },
  link: {
    color: brand.violet,
  },
  packagesCopy: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(28),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(16),
    },
  },
  copySection: {
    "& > p": {
      margin: theme.spacing(2, 0),
    },
    [theme.breakpoints.down("sm")]: {
      "& > h3": {
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
      },
    },
  },
}));

const usePackageStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${brand.indigo}`,
    padding: theme.spacing(4),
    margin: theme.spacing(4, 0),
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gridTemplateAreas: `
      "title ul"
      "title actions"
    `,
    gridGap: theme.spacing(0, 6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      gridTemplateAreas: `
        "title"
        "ul"
        "actions"
      `,
      gridTemplateColumns: "1fr",
    },
  },
  ul: {
    ...theme.typography.body1,
    gridArea: "ul",
    fontSize: theme.typography.pxToRem(24),
    paddingLeft: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
      fontSize: theme.typography.pxToRem(18),
    },
  },
  title: {
    gridArea: "title",
    alignSelf: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  actions: {
    gridArea: "actions",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  button: {
    fontSize: theme.typography.pxToRem(22),
    padding: theme.spacing(1, 4),
  },
}));

const Package: React.FC<{
  readonly title: string;
  readonly children: React.ReactElement<"li">[];
}> = ({ title, children }) => {
  const classes = usePackageStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h3" component="h4" className={classes.title}>
        {title}
      </Typography>
      <ul className={classes.ul}>{children}</ul>
      <Box className={classes.actions}>
        <IndigoButton
          variant="contained"
          className={classes.button}
          size="large"
          target="_blank"
          href="/gala/sponsorship/mb-gala-sponsorship-2020.pdf"
        >
          Sponsor
        </IndigoButton>
      </Box>
    </Box>
  );
};

const useReportStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "2fr 6fr",
    gridTemplateAreas: `"report copy"`,
    gridGap: theme.spacing(4),
    padding: theme.spacing(6, 8, 8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 4, 8),
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "report"
        "copy"
      `,
    },
  },
  report: {
    gridArea: "report",
    textAlign: "center",
    "& img": {
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        maxWidth: "80%",
      },
    },
  },
  link: {
    color: brand.violet,
  },
  copy: {
    gridArea: "copy",
    alignSelf: "center",
    fontSize: theme.typography.pxToRem(22),
    "& h4": {
      marginBottom: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.pxToRem(18),
      "& h4": {
        fontSize: theme.typography.pxToRem(32),
      },
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

const ANNUAL_REPORT_HREF =
  "/annual-reports/2018/mission-bit-annual-report-2018.pdf";

const AnnualReport: React.FC<{}> = () => {
  const classes = useReportStyles();
  const jpg = require("public/images/gala/sponsorship/annual-report-2018-preview.jpg?resize&sizes[]=766&sizes[]=383&sizes[]=192");
  const webp = require("public/images/gala/sponsorship/annual-report-2018-preview.jpg?resize&sizes[]=766&sizes[]=383&sizes[]=192&format=webp");
  return (
    <Container component="section" className={classes.root}>
      <a
        href={ANNUAL_REPORT_HREF}
        target="_blank"
        rel="noreferrer"
        className={classes.report}
      >
        <picture>
          <source type="image/webp" srcSet={webp.srcSet} />
          <img alt="Annual report cover" src={jpg.src} srcSet={jpg.srcSet} />
        </picture>
      </a>
      <Typography component="div" className={classes.copy}>
        <Typography variant="h3" component="h4">
          2018 Annual Report
        </Typography>
        Check out our{" "}
        <Link
          className={classes.link}
          href={ANNUAL_REPORT_HREF}
          target="_blank"
        >
          2018 Annual Report
        </Link>{" "}
        for more about our vision and current impact. If you have any questions,
        please contact us at{" "}
        <Link
          className={classes.link}
          href={`mailto:${DEVELOPMENT_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {DEVELOPMENT_EMAIL}
        </Link>
        .
      </Typography>
    </Container>
  );
};

const SponsorshipPackages: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <Container
        component="section"
        id="packages"
        className={classes.copySection}
      >
        <Box className={classes.buttons}>
          <IndigoButton
            variant="outlined"
            size="large"
            href="/gala"
            className={classes.button}
          >
            Fourth Annual Gala Details
          </IndigoButton>
        </Box>
        <Typography variant="h3" align="center">
          Gala Sponsorship Packages
        </Typography>
        <Typography className={classes.packagesCopy}>
          All sponsorship packages include a virtual table for at least 25
          attendees and logo presence on Mission Bit website for 2021.
          <br />
          Contact{" "}
          <Link
            href={`mailto:${DEVELOPMENT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {DEVELOPMENT_EMAIL}
          </Link>{" "}
          with any questions.
        </Typography>
        <Package title="$50,000 Diamond Sponsor">
          <li>Exclusive to one sponsor</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>Up to three minutes of speaking time</li>
          <li>Public recognition in CEO Remarks</li>
          <li>
            Your logo featured as Diamond Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </Package>
        <Package title="$25,000 Platinum Sponsor">
          <li>Exclusive to two sponsors</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>Public recognition in CEO Remarks</li>
          <li>
            Your logo featured as Platinum Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </Package>
        <Package title="$10,000 Gold Sponsor">
          <li>Exclusive to five sponsors</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>
            Your logo featured as Gold Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </Package>
        <Package title="$5,000 Silver Sponsor">
          <li>Exclusive to ten sponsors</li>
          <li>Unlimited “seats” to virtual event</li>
          <li>
            Your logo featured as Silver Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </Package>
        <Package title="$2,500 Bronze Sponsor">
          <li>25 “seats” for your employees</li>
          <li>Logo presence on event program</li>
          <li>
            Your logo featured as Bronze Sponsor on event slideshow before and
            after event and all promotional material
          </li>
          <li>Your logo displayed on the Mission Bit website</li>
        </Package>
      </Container>
      <AnnualReport />
    </>
  );
};

export default SponsorshipPackages;
