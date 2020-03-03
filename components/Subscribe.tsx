import * as React from "react";
import styles from "./Subscribe.module.css";

const Subscribe: React.FC<{}> = () => (
  <section className={styles.subscribe} id="get-updates">
    <div>
      Stay up-to-date on Mission Bit news and events!
      <br />
      Subscribe to our mailing list below:
    </div>
    <form>
      <input type="email" name="email" />
      <br />
      <button type="submit">Subscribe</button>
    </form>
  </section>
);

export default Subscribe;
