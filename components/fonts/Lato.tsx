import * as React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

const WEIGHTS = [
  { weight: 300, name: "Light" },
  { weight: 400, name: "Regular" },
  { weight: 500, name: "Bold" },
  { weight: 700, name: "Black" },
] as const;

const useStyles = makeStyles({
  "@global": {
    "@font-face": WEIGHTS.map(({ name, weight }) => ({
      src: [
        `url("/fonts/LatoLatin-${name}.woff2") format("woff2")`,
        `url("/fonts/LatoLatin-${name}.woff") format("woff")`,
      ].join(","),
      fontFamily: "Lato",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: weight,
    })),
  },
});

export default function Lato(): JSX.Element {
  useStyles();
  return (
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
}
