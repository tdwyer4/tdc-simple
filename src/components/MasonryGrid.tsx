"use client";

import Image from "next/image";
import styles from "./MasonryGrid.module.css";
import { projects, ProjectItem } from "@/data/projects";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/lib/useIsomorphicLayoutEffect";
import Modal from "./Modal";

gsap.registerPlugin(ScrollTrigger);

export default function MasonryGrid() {
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
          stagger: { each: 0.06 },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const renderItem = (item: ProjectItem) => {
    const onClick = () => setActive(item);

    if (item.type === "image") {
      return (
        <a
          className={styles.itemInner}
          onClick={onClick}
          role="button"
          tabIndex={0}
        >
          <Image
            src={item.src}
            alt={item.title}
            width={item.width || 1600}
            height={item.height || 900}
            sizes="(max-width: 520px) 100vw, (max-width: 1100px) 50vw, 33vw"
            style={{ width: "100%", height: "auto" }}
            loading="lazy"
          />
          <div className={styles.itemOverlay}>
            <div className={styles.caption}>{item.title}</div>
          </div>
        </a>
      );
    }
    // video
    return (
      <a
        className={styles.itemInner}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <video
          src={item.src}
          poster={item.poster}
          preload="none"
          playsInline
          autoPlay={true}
          muted
          loop
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className={styles.itemOverlay}>
          <div className={styles.caption}>{item.title}</div>
        </div>
      </a>
    );
  };

  return (
    <div ref={gridRef} className={styles.grid}>
      {projects.map((p) => (
        <div key={p.id} className={styles.item}>
          {renderItem(p)}
        </div>
      ))}

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title || ""}
        description={active?.description || ""}
        thumb={active?.thumb}
        src={active?.src}
      />
    </div>
  );
}
