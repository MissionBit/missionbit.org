import * as React from "react";
import Head from "next/head";
import { withStyles } from "@material-ui/core/styles";
import * as CSS from "csstype";

const WEIGHTS = [700];

const styles = {
  "@global": {
    "@font-face": WEIGHTS.map(
      (weight): CSS.FontFace => ({
        src: [
          `local("Poppins")`,
          `url("/fonts/poppins-v9-latin-${weight}.woff2") format("woff2")`,
          `url("/fonts/poppins-v9-latin-${weight}.woff") format("woff")`,
        ].join(","),
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontDisplay: "swap",
        fontWeight: weight,
      })
    ),
  },
};

const Poppins: React.FC<{}> = () => (
  <Head>
    {WEIGHTS.map((weight) => (
      <link
        key={weight}
        rel="preload"
        href={`/fonts/poppins-v9-latin-${weight}.woff2`}
        as="font"
        crossOrigin=""
      />
    ))}
  </Head>
);

export default withStyles(styles)(Poppins);
