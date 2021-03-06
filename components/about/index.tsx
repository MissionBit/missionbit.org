import * as React from "react";
import About from "./About";
import CoreValues from "components/index/CoreValues";
import Team from "./Team";
import Jobs from "./Jobs";
import Publications from "./Publications";
import Supporters from "components/Supporters";

const Main: React.FC<{}> = () => (
  <main id="main">
    <About />
    <CoreValues />
    <Team />
    <Jobs />
    <Supporters />
    <Publications />
  </main>
);

export default Main;
