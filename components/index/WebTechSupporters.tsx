import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > div > a": {
      margin: theme.spacing(0, 1),
    },
  },
}));

const WebTechSupporters: React.FC<{}> = () => (
  <Container component="section" className={useStyles().root}>
    <Box
      display="flex"
      justifyContent="center"
      paddingBottom={4}
      alignItems="center"
    >
      <a
        href="https://www.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={
            require("public/images/web-tech-supporters/netlify.svg").default.src
          }
          alt="Deploys by Netlify"
        />
      </a>
      <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer">
        <img
          width={150}
          src={
            require("public/images/web-tech-supporters/sentry.svg").default.src
          }
          alt="Application Monitoring and Error Reporting by Sentry"
        />
      </a>
    </Box>
  </Container>
);

export default WebTechSupporters;
