import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import VioletButton from "components/VioletButton";
import { Photo } from "./PhotoFooter";
import { DONATE_EMAIL } from "src/emails";
import SectionHeading from "./SectionHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(4),
    },
  },
  body: {
    margin: theme.spacing(4, 0),
  },
  mobilePhoto: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      marginBottom: theme.spacing(4),
    },
  },
  button: {},
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
      <Typography className={classes.body}>
        Mission Bit is a 501(c)(3) not-for-profit organization founded in 2012
        to bridge the digital divide in the San Francisco Bay Area. To date, we
        have served over 4,000 students through our free programming and
        continue in our commitment to make computer science more accessible to
        those who are traditionally underrepresented in tech. We strive to
        inspire curiosity by cultivating an innovative mindset, enabling
        students to unleash their full potential to design technologies of the
        future. We can only do this with your generous support.
      </Typography>
      <Typography className={classes.body}>
        Join us in narrowing the digital divide by making a gift today to ensure
        that our students continue to have access to our educational experiences
        and our incredible community.
      </Typography>
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
