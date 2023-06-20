"use client";

import styles from "./ClientLogo.module.scss";

type ClientLogoProps = {
  src?: string;
};

export default function ClientLogo({ src }: ClientLogoProps) {
  return (
    <div className={styles.clientLogo}>
      <img src={`Clients/${src}.svg`} alt={src} />
    </div>
  );
}
