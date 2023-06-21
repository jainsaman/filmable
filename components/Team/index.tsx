"use client";

import styles from "./Team.module.scss";
import Tagline from "../Tagline";

type TeamProps = {};

export default function Team({}: TeamProps) {
  return (
    <div className={styles.team}>
      <div className={styles.container}>
        <div className={styles.teamContent}>
          <Tagline content="our team" />
          <p className={styles.title}>The Team behind Filmable</p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="CEO.png" alt="CEO" />
            </div>
            <div className={styles.cardName}>Syed Zaid Ali</div>
            <div className={styles.cardTitle}>Co-founder, CEO</div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="CMO.png" alt="CMO" />
            </div>
            <div className={styles.cardName}>Zeeshan Khan</div>
            <div className={styles.cardTitle}>Co-founder, CMO</div>
          </div>
          {/* <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="CF.png" alt="Co-founder" />
            </div>
            <div className={styles.cardName}>Aquib Khan</div>
            <div className={styles.cardTitle}>Co-founder</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
