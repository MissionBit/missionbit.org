import * as React from "react";
import Head from "next/head";
import { withStyles } from "@material-ui/core/styles";
import * as CSS from "csstype";

const WEIGHTS = [
  { weight: 300, name: "Light" },
  { weight: 400, name: "Regular" },
  { weight: 500, name: "Bold" },
  { weight: 700, name: "Black" },
];

const styles = {
  "@global": {
    "@font-face": WEIGHTS.map(
      ({ name, weight }): CSS.FontFace => ({
        src: [
          `url("/fonts/LatoLatin-${name}.woff2") format("woff2")`,
          `url("/fonts/LatoLatin-${name}.woff") format("woff")`,
        ].join(","),
        fontFamily: "Lato",
        fontStyle: "normal",
        fontDisplay: "swap",
        fontWeight: weight,
      })
    ),
  },
};

const Lato: React.FC<{}> = () => (
  <Head>
    {WEIGHTS.map(({ name }) => (
      <link
        key={name}
        rel="preload"
        href={`/fonts/LatoLatin-${name}.woff2`}
        as="font"
        crossOrigin=""
      />
    ))}
  </Head>
);

export default withStyles(styles)(Lato);
