"use client";

import styles from "./Landing.module.scss";
import Tagline from "../Tagline";
import addEmailToSheet from "@/app/sheets";
import toast from "react-hot-toast";

type LandingProps = {};

export default function Landing({}: LandingProps) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const email = e.target.email.value;

    if (!mailFormat.test(email)) {
      toast.error("Enter a valid email address", {
        style: {
          fontFamily: "DM Sans",
          fontWeight: "500",
        },
      });
      return;
    }

    toast.promise(
      addEmailToSheet(email),
      {
        loading: "Saving...",
        success: <b>Thanks for joining the waitlist!</b>,
        error: "Error adding email",
      },
      {
        style: {
          fontFamily: "DM Sans",
          fontWeight: "500",
        },
      }
    );
    e.target.reset();
  };

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
            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <button type="submit">Join In</button>
            </form>
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
