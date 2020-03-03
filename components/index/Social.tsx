import * as React from "react";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Box from "@material-ui/core/Box";

const Social: React.FC<{}> = () => (
  <section id="social">
    <Typography>Connect with us on social</Typography>
    <Box>
      <EmailIcon />
      <TwitterIcon />
      <InstagramIcon />
      <FacebookIcon />
      <GitHubIcon />
      <YouTubeIcon />
    </Box>
  </section>
);

export default Social;
