"use client";

import styles from "./Navigation.module.scss";

type NavigationProps = {
  navId: string;
};

export default function Navigation({ navId }: NavigationProps) {
  return <div className={styles.navigation} id={navId}></div>;
}
