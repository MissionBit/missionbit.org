import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import VioletButton from "components/VioletButton";
import { Photo } from "./PhotoFooter";
import { DONATE_EMAIL } from "src/emails";
import SectionHeading from "./SectionHeading";
import BodyText from "./BodyText";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  body: {
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 4),
    },
  },
  mobilePhoto: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      marginBottom: theme.spacing(4),
      width: "auto",
      maxHeight: "50vh",
      objectFit: "contain",
      "& img": {
        objectFit: "contain",
        maxHeight: "50vh",
      },
    },
  },
  button: {
    fontSize: theme.typography.pxToRem(20),
  },
  actions: {
    textAlign: "center",
  },
}));

export const SupportOurWork: React.FC<{ className?: string }> = ({
  className,
}) => {
  const classes = useStyles();
  return (
    <Box component="section" className={clsx(classes.root, className)}>
      <SectionHeading>Support our work</SectionHeading>
      <BodyText className={classes.body}>
        Mission Bit is a 501(c)(3) not-for-profit organization founded in 2012
        to bridge the digital divide in the San Francisco Bay Area. To date, we
        have served over 4,000 students through our free programming and
        continue in our commitment to make computer science more accessible to
        those who are traditionally underrepresented in tech. We strive to
        inspire curiosity by cultivating an innovative mindset, enabling
        students to unleash their full potential to design technologies of the
        future. We can only do this with your generous support.
      </BodyText>
      <BodyText className={classes.body}>
        Join us in narrowing the digital divide by making a gift today to ensure
        that our students continue to have access to our educational experiences
        and our incredible community. All donations are tax-deductible to the
        extent allowed by IRS guidelines
      </BodyText>
      <Photo photo="1" className={classes.mobilePhoto} />
      <Box className={classes.actions}>
        <VioletButton
          href={`mailto:${DONATE_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          className={classes.button}
        >
          Get in touch with us
        </VioletButton>
      </Box>
    </Box>
  );
};

export default SupportOurWork;
