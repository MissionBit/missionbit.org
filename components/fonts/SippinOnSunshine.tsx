import * as React from "react";
import Head from "next/head";
import { withStyles, createStyles } from "@material-ui/core/styles";

const styles = createStyles({
  "@global": {
    "@font-face": {
      src: [
        `url("/fonts/SippinOnSunshine.woff2") format("woff2")`,
        `url("/fonts/SippinOnSunshine.woff") format("woff")`,
      ].join(","),
      fontFamily: "Sippin On Sunshine",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  },
});

const SippinOnSunshine: React.FC<{}> = () => (
  <Head>
    <link
      rel="preload"
      href={`/fonts/SippinOnSunshine.woff2`}
      as="font"
      crossOrigin=""
    />
  </Head>
);

export default withStyles(styles)(SippinOnSunshine);
