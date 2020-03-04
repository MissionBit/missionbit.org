import * as React from "react";

const WEIGHTS = [
  { weight: 300, name: "Light" },
  { weight: 400, name: "Regular" },
  { weight: 500, name: "Medium" },
  { weight: 700, name: "Bold" }
];

const Roboto: React.FC<{}> = () => (
  <React.Fragment>
    {WEIGHTS.map(({ weight, name }) => (
      <React.Fragment key={weight}>
        <link
          key={weight}
          rel="preload"
          href={`/fonts/roboto-latin-${weight}.woff2`}
          as="font"
          crossOrigin=""
        />
        <style jsx global>{`
          @font-face {
            src: local("Roboto ${name}"), local("Roboto-${name}"), url("/fonts/roboto-latin-${weight}.woff2") format("woff2"), url("/fonts/roboto-latin-${weight}.woff") format("woff");
            font-family: "Roboto";
            font-style: "normal";
            font-display: "swap";
            font-weight: ${weight};
          }
        `}</style>
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default Roboto;
