"use client";

import styles from "./Footer.module.scss";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src="Logo.png" alt="Logo" />
          </div>
          <div className={styles.footerLinks}>
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="#About" passHref>
              About Us
            </Link>
            <Link href="#Features" passHref>
              Features
            </Link>
            <Link href="#Screens" passHref>
              Screens
            </Link>
            <Link href="#Team" passHref>
              Team
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialLink}>
              <Link
                href="https://www.facebook.com/people/FilmableOnline/100088845230272/?mibextid=LQQJ4d"
                passHref
              >
                <FaFacebookF size={20} />
              </Link>
            </div>
            <div className={styles.socialLink}>
              <Link href="https://www.instagram.com/filmable.online/" passHref>
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.footerDivider}></div>
        <div className={styles.footerBottom}>
          Copyright © 2022 Filmable All Rights Reserved
        </div>
      </div>
    </div>
  );
}
