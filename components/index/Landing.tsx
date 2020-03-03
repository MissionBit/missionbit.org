import * as React from "react";
import styles from "./Landing.module.css";

function smoothScroll(event: React.MouseEvent<HTMLAnchorElement>): void {
  const el = document.querySelector(event.currentTarget.hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
  }
}

const Landing: React.FC<{}> = () => (
  <section className={styles.section}>
    <div className={styles.bridge} />
    <div className={styles.content}>
      <div>
        <div className={styles.photoWrapper}>
          <img
            src="/images/landing/landing-photo.jpg"
            width="485"
            height="498"
            alt="Two students at a laptop"
          />
        </div>
      </div>
      <div className={styles.bridgeText}>
        <span className={styles.bridgeLine}>Bridging the Tech Divide.</span>
        <span className={styles.bridgeLine}>
          Empowering a New Generation of
        </span>
        <span className={styles.bridgeLine}>Innovators.</span>
        <div>
          <a
            href="#main"
            className={styles.arrowWrapper}
            onClick={smoothScroll}
          >
            <img
              src="/images/landing/down-arrow.svg"
              className={styles.verticalBounce}
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
