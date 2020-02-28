import * as React from "react";
import styles from "./Header.module.css";

const Header: React.SFC<{ className?: string }> = ({ children, className }) => (
  <header className={className}>
    <nav>
      <ul className={styles.ul}>
        <li>
          <a href="/">
            <img
              src="/images/missionbit-logo-horizontal.svg"
              className={styles.logo}
            />
          </a>
        </li>
        <li>About</li>
        <li>Programs</li>
        <li>Events</li>
        <li>Get Involved</li>
        <li>Donate</li>
        <li>Get Updates</li>
      </ul>
    </nav>
    {children}
  </header>
);

export default Header;
