"use client";

import styles from "./Signup.module.scss";
import addEmailToSheet from "@/app/sheets";
import toast from "react-hot-toast";

type SignupProps = {};

export default function Signup({}: SignupProps) {
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
    <div className={styles.signup}>
      <div className={styles.container}>
        <div className={styles.signupContent}>
          <p className={styles.subtitle}>Your Fans are waiting!</p>
          <p className={styles.title}>Signup for the App & become a Star</p>
          <div className={styles.waitlist}>
            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
              <input type="email" name="email" placeholder="Your Email" />
              <button type="submit">Join In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
