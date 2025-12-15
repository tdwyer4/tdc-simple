import Image from "next/image";
import styles from "./page.module.css";
import MasonryGrid from "@/components/MasonryGrid";
import SectionTitle from "@/components/SectionTitle";
import Showcase from "./showcase/page";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Visual Design Crafted in Tulsa, Oklahoma
        </h1>
        <p className={styles.subtitle}>
          Motion Graphics / Graphic Design / Video Editing / UI-UX / Creative
          Direction
        </p>
        <p className={styles.createdWith}>
          This site was built with <span className={styles.heart}>&hearts;</span> using NextJS, TypeScript, CSS Modules and GSAP
        </p>
      </section>
      <SectionTitle title="Selects" />
      <Showcase />
      <SectionTitle title="Favorites" />
      <MasonryGrid />
    </main>
  );
}
