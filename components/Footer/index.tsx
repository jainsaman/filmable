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
            <Link href="/" passHref>
              About Us
            </Link>
            <Link href="/" passHref>
              Features
            </Link>
            <Link href="/" passHref>
              Screens
            </Link>
            <Link href="/" passHref>
              Team
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialLink}>
              <Link href="/" passHref>
                <FaFacebookF size={20} />
              </Link>
            </div>
            <div className={styles.socialLink}>
              <Link href="/" passHref>
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
