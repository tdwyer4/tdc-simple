'use client';

import styles from './Modal.module.css';
import Image from 'next/image';

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  thumb?: string;
  src?: string;
};

export default function Modal({ open, onClose, title, description, thumb, src }: Props) {
  if (!open) return null;
  const thumbSrc = thumb || src || 'https://placehold.co/320x200/png';

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button className={styles.close} aria-label="Close" onClick={onClose}>×</button>
        </div>
        <div className={styles.body}>
          <Image className={styles.thumb} src={thumbSrc} alt={title} width={320} height={200} />
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
    </div>
  );
}
