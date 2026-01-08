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
          Design That Moves Brands Forward
        </h1>
        <p className={styles.subtitle}>
          Elevating digital experiences through creative direction, design, and visual storytelling.
        </p>
      </section>
      <SectionTitle title="Selects" />
      <Showcase />
      <SectionTitle title="Favorites" />
      <MasonryGrid />
      <section className={styles.hero}>
        <p className={styles.createdWith}>
          This site was made with <span className={styles.heart}>&hearts;</span> using NextJS, TypeScript, CSS and GSAP
        </p>
      </section>
    </main>
  );
}
