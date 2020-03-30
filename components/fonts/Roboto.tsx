import * as React from "react";
import Head from "next/head";
import { withStyles } from "@material-ui/core/styles";
import * as CSS from "csstype";

const WEIGHTS = [
  { weight: 300, name: "Light" },
  { weight: 400, name: "Regular" },
  { weight: 500, name: "Medium" },
  { weight: 700, name: "Bold" },
];

const styles = {
  "@global": {
    "@font-face": WEIGHTS.map(
      ({ name, weight }): CSS.FontFace => ({
        src: [
          `local("Roboto ${name}")`,
          `local("Roboto-${name}")`,
          `url("/fonts/roboto-latin-${weight}.woff2") format("woff2")`,
          `url("/fonts/roboto-latin-${weight}.woff") format("woff")`,
        ].join(","),
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontDisplay: "swap",
        fontWeight: weight,
      })
    ),
  },
};

const Roboto: React.FC<{}> = () => (
  <Head>
    {WEIGHTS.map(({ weight }) => (
      <link
        key={weight}
        rel="preload"
        href={`/fonts/roboto-latin-${weight}.woff2`}
        as="font"
        crossOrigin=""
      />
    ))}
  </Head>
);

export default withStyles(styles)(Roboto);
