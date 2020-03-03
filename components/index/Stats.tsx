import * as React from "react";
import clsx from "clsx";
import styles from "./Stats.module.css";

const Stats: React.FC<{}> = () => (
  <section className={styles.section}>
    <div className={styles.line}>
      Over <span className={clsx(styles.value, styles.color1)}>3,800</span>{" "}
      students have realized their potential
    </div>
    <div className={styles.line}>
      Over <span className={clsx(styles.value, styles.color2)}>2,500</span>{" "}
      volunteer hours dedicated
    </div>
    <div className={styles.line}>
      <span className={clsx(styles.value, styles.color3)}>54</span> student
      showcase events
    </div>
  </section>
);

export default Stats;
