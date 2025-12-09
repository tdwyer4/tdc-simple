// page.tsx (Showcase)
"use client";

import Image from "next/image";
import styles from "./Showcase.module.css";
import { projects, ProjectItem } from "../../data/selects";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import Modal from "../../components/Modal";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<ProjectItem | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${styles.item}`,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 0.6,
          stagger: { each: 0.05 },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridRef} className={styles.grid}>
      {projects.map((p) => (
        <div key={p.id} className={styles.item}>
          <a
            className={styles.itemInner}
            onClick={() => setActive(p)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={p.thumbnail}
                alt={p.title}
                width={1600}
                height={900}
                className={styles.thumbImage}
                sizes="(max-width: 520px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
            </div>

            <div className={styles.itemOverlay}>
              <div className={styles.content}>
                <span className={styles.label}>View Project</span>
                <div className={styles.title}>{p.title}</div>
              </div>
            </div>
          </a>
        </div>
      ))}

      <Modal open={!!active} onClose={() => setActive(null)} data={active} />
    </div>
  );
}
