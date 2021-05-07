import * as React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

const WEIGHTS = [700] as const;

const useStyles = makeStyles({
  "@global": {
    "@font-face": WEIGHTS.map((weight) => ({
      src: [
        `url("/fonts/poppins-v9-latin-${weight}.woff2") format("woff2")`,
        `url("/fonts/poppins-v9-latin-${weight}.woff") format("woff")`,
      ].join(","),
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontDisplay: "swap",
      fontWeight: weight,
    })),
  },
});

export default function Poppins(): JSX.Element {
  useStyles();
  return (
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
}
