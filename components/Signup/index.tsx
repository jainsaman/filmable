"use client";

import styles from "./Signup.module.scss";

type SignupProps = {};

export default function Signup({}: SignupProps) {
  return (
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.signupContent}>
          <p className={styles.subtitle}>Your Fans are waiting!</p>
          <p className={styles.title}>Signup for the App & become a Star</p>
          <div className={styles.waitlist}>
            <input type="text" placeholder="Your Email" />
            <button type="submit">Join In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
