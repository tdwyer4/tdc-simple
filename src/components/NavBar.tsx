"use client";

import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const logoText = "Tim Dwyer";
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
          <Link className={styles.link} href="https://youtube.com/@timmydwyer" target="_blank">
            Tutorials
          </Link>
          <Link className={styles.link} href="https://radloops.com" target="_blank">
            Store
          </Link>
        </nav>
      </div>
    </header>
  );
}
