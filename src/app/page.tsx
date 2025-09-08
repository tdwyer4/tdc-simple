import Image from "next/image";
import styles from "./page.module.css";
import MasonryGrid from "@/components/MasonryGrid";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        {/* <h1 className={styles.title}>SELECTED WORKS</h1>
        <p className={styles.subtitle}>
          Images and videos in a responsive masonry grid.
        </p> */}
      </section>
      <MasonryGrid />
    </main>
  );
}
