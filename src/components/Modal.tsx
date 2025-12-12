// components/Modal.tsx
"use client";

import { useEffect } from "react";
import styles from "./Modal.module.css";
import Image from "next/image";
import { ProjectItem } from "../data/selects";

type Props = {
  open: boolean;
  onClose: () => void;
  data: ProjectItem | null;
};

export default function Modal({ open, onClose, data }: Props) {
  // 1. Handle Scroll Locking
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !data) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.scrollContainer}>
        <div className={styles.card} onClick={(e) => e.stopPropagation()}>
          <div className={styles.closeButtonContainer}>
          <button
              className={styles.close}
              aria-label="Close"
              onClick={onClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            </div>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h2 className={styles.title}>{data.title}</h2>
              <p className={styles.desc}>{data.description}</p>
              <p className={styles.roleTags}>{data.roleTags}</p>
            </div>
            
          </div>

          <div className={styles.body}>
            {/* 3. Main Video */}
            <div className={styles.videoWrapper}>
              <video
                src={data.mainVideo}
                className={styles.mainVideo}
                controls
                autoPlay
                muted
                loop
              />
            </div>

            {/* 3. Gallery Grid (2-6 Photos) */}
            {data.gallery && data.gallery.length > 0 && (
              <div className={styles.gallery}>
                {data.gallery.map((imgSrc, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <Image
                      src={imgSrc}
                      alt={`Gallery ${i}`}
                      width={800}
                      height={600}
                      className={styles.galleryImg}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
