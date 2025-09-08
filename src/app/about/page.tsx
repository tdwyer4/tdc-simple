import Image from "next/image";
import styles from "./page.module.css";
import { about } from "@/data/about";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <section className={styles.wrap}>
        <div>
          <Image
            src={about.image}
            alt={about.title}
            width={1200}
            height={1200}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 0,
              border: "1px solid rgba(255,255,255,0.08)",
              filter: "grayscale(1)",
            }}
            priority
          />
        </div>
        <div>
          <h1 className={styles.title}>{about.title}</h1>
          <p className={styles.desc}>{about.description}</p>
        </div>
      </section>
    </main>
  );
}
