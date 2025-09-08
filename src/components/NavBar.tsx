"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const logoText = "TIM DWYER"; // edit this
  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">{logoText}</Link>
        </div>
        <nav className={styles.nav}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
