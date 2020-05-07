import * as React from "react";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(2, 0),
  },
  icons: {
    margin: theme.spacing(2),
    "& > a > span > svg": {
      color: theme.palette.common.black,
      fontSize: "2rem",
    },
  },
}));

const Social: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <section id="social" className={classes.root}>
      <Typography variant="h4" component="h2">
        Connect with us on social
      </Typography>
      <Box className={classes.icons}>
        <Button href="mailto:info@missionbit.org" title="Email">
          <EmailIcon />
        </Button>
        <Button
          href="https://twitter.com/missionbit"
          title="Twitter"
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon />
        </Button>
        <Button
          href="https://www.instagram.com/missionbit/"
          title="Instagram"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon />
        </Button>
        <Button
          href="https://www.facebook.com/MissionBit/"
          title="Facebook"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon />
        </Button>
        <Button
          href="https://github.com/missionbit"
          title="GitHub"
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon />
        </Button>
        <Button
          href="https://www.youtube.com/channel/UCN07uXlUaHsvCYwXhHa2NPw"
          title="YouTube"
          target="_blank"
          rel="noopener"
        >
          <YouTubeIcon />
        </Button>
        <Button
          href="https://www.linkedin.com/company/mission-bit"
          title="LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon />
        </Button>
      </Box>
    </section>
  );
};

export default Social;
