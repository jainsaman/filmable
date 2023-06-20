"use client";

import styles from "./Partners.module.scss";
import Tagline from "../Tagline";
import ClientLogo from "../ClientLogo";
import Marquee from "react-fast-marquee";

type PartnersProps = {};

export default function Partners({}: PartnersProps) {
  return (
    <div className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.partnersContent}>
          <Tagline content="our partners" />
          <p className={styles.title}>We are backed by the Greats</p>
        </div>
        <div className={styles.clientsContainer}>
          <Marquee pauseOnHover={true} speed={32}>
            <ClientLogo src="dharma" />
            <ClientLogo src="excel" />
            <ClientLogo src="yrf" />
            <ClientLogo src="mx" />
            <ClientLogo src="rhf" />
            <ClientLogo src="netflix" />
            <ClientLogo src="prime" />
            <ClientLogo src="zee" />
            <ClientLogo src="lionsgate" />
            <ClientLogo src="zeestudio" />
            <ClientLogo src="bbc" />
            <ClientLogo src="sonyliv" />
            <ClientLogo src="aamir" />
            <ClientLogo src="redchillies" />
            <ClientLogo src="agppl" />
            <ClientLogo src="pjp" />
            <ClientLogo src="junglee" />
            <ClientLogo src="anurag" />
            <ClientLogo src="paramount" />
            <ClientLogo src="madras" />
            <ClientLogo src="lyca" />
            <ClientLogo src="friday" />
            <ClientLogo src="essel" />
            <ClientLogo src="endemol" />
            <ClientLogo src="tvf" />
          </Marquee>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
}
