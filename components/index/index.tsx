import * as React from "react";
import Stats from "./Stats";
import Events from "./Events";
import Students from "./Students";
import Social from "./Social";
import Supporters from "../Supporters";
import styles from "./index.module.css";

const Index: React.FC<{}> = () => (
  <main id="main" className={styles.main}>
    <Stats />
    <Events />
    <Students />
    <Social />
    <Supporters />
  </main>
);

export default Index;
