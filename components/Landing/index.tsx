import styles from "./Landing.module.scss";
import Tagline from "../Tagline";

type LandingProps = {};

export default function Landing({}: LandingProps) {
  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.landingContent}>
          <div className={styles.title}>
            <Tagline content="Your film school in your pocket" />
            <p>
              Become a<br />
              Filmmaking Pro
            </p>
          </div>
          <div className={styles.content}>
            Filmable is a film education platform for aspiring filmmakers &
            actors. With expert-led courses and workshops. Join Filmable Beta
            today to unleash your true potential and take your skills to the
            next level.
          </div>
          <div className={styles.waitlist}>
            <input type="text" placeholder="Your Email" />
            <button type="submit">Join In</button>
          </div>
        </div>
        <div className={styles.landingImage}>
          <img src="Landing.png" alt="Mobile Mock" />
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}
