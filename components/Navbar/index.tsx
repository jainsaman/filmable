"use client";

import { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navbarLogo}>
          <Link href="/" passHref>
            <img src="Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className={open ? styles.navbarCollapse : styles.navbarMenu}>
          <div className={styles.navbarLinks}>
            <div className={styles.navbarLink}>
              <Link href="/about" passHref>
                About Us
              </Link>
            </div>
            <div className={styles.navbarLink}>
              <Link href="/about" passHref>
                Features
              </Link>
            </div>
            <div className={styles.navbarLink}>
              <Link href="/about" passHref>
                Screens
              </Link>
            </div>
            <div className={styles.navbarLink}>
              <Link href="/about" passHref>
                Team
              </Link>
            </div>
          </div>
          <div className={styles.navbarButton}>
            <Link href="/about" passHref>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.navbarHamburger} onClick={() => setOpen(!open)}>
          {open ? <MdClose size={22} /> : <FiMenu size={22} />}
        </div>
      </div>
    </div>
  );
}
