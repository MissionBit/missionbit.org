import * as React from "react";
import Typography from "@material-ui/core/Typography";
/*
import AboutUs from "./AboutUs";
import Values from "./Values";
import Team from "./Team";
import Supporters from "./Supporters";
*/

const Main: React.SFC<{}> = () => (
  <main id="main">
    <section id="about-us">
      <Typography variant="h4" component="h1" align="center">
        About Us
      </Typography>
    </section>
    <section id="values">
      <Typography variant="h4" component="h2" align="center">
        Our Values
      </Typography>
    </section>
    <section id="team">
      <Typography variant="h4" component="h2" align="center">
        Our Team
      </Typography>
    </section>
    <section id="supporters">
      <Typography variant="h4" component="h2" align="center">
        Our Supporters
      </Typography>
    </section>
  </main>
);

export default Main;
