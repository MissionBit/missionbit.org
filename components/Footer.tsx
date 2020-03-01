import * as React from "react";
import clsx from "clsx";
import Subscribe from "./Subscribe";
import styles from "./Footer.module.css";

const Footer: React.SFC<{ className?: string }> = ({ className }) => (
  <footer className={clsx(styles.footer, className)}>
    <Subscribe />
    <nav>
      <ul className={styles.ul}>
        <li>about</li>
        <li>programs</li>
        <li>events</li>
        <li>get involved</li>
        <li>jobs</li>
        <li>donate</li>
        <li>contact</li>
      </ul>
    </nav>
    <section>
      <span>
        2020 © Mission Bit. A 501(c)3 Non-Profit. ALL Rights Reserved.
        <br />
      </span>
      <address className={styles.address}>
        Mission Bit, 101 A Clay St #121, San Francisco, CA 94111
        <br />
        EIN: 46-0945785, Phone: <a href="tel:+14158795380">(415) 879-5380</a>
      </address>
    </section>
  </footer>
);

export default Footer;
