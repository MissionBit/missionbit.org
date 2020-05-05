import * as React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const NetlifyBanner: React.FC<{}> = () => (
  <Container component="section">
    <Box display="flex" justifyContent="center" paddingBottom={4}>
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
          alt="Deploys by Netlify"
        />
      </a>
    </Box>
  </Container>
);

export default NetlifyBanner;
