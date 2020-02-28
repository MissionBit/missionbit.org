import * as React from "react";
import styles from "./Events.module.css";

const Events: React.SFC<{}> = () => (
  <section className={styles.section}>
    <div className={styles.copy}>
      <div className={styles.copyText}>
        The Mission Bit Gala was a success! Thank you to everyone who
        participated!
        <br />
        <br />
      </div>
      <div>
        <a className={styles.button} href="#">
          See More
        </a>
      </div>
    </div>
    <div>
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube-nocookie.com/embed/oTSNS227No4?rel=0&modestbranding=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </section>
);

export default Events;
