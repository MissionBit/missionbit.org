import * as React from "react";
import About from "./About";
import Values from "./Values";
import Team from "./Team";
import Jobs from "./Jobs";
import Supporters from "../Supporters";

const Main: React.FC<{}> = () => (
  <main id="main">
    <About />
    <Values />
    <Team />
    <Jobs />
    <Supporters />
  </main>
);

export default Main;
