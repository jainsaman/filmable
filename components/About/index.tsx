import styles from "./About.module.scss";
import Tagline from "../Tagline";
import Link from "next/link";

type AboutProps = {};

export default function About({}: AboutProps) {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutImage}>
          <img src="About.png" alt="About Us" />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.title}>
            <Tagline content="about us" />
            <p>Unleash your Filmmaking Potential with Filmable</p>
          </div>
          <div className={styles.content}>
            Filmable is a film education platform for aspiring filmmakers &
            actors. With expert-led courses and workshops. Join Filmable Beta
            today to unleash your true potential and take your skills to the
            next level.
          </div>
          <Link passHref href="/">
            <button>Learn more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
