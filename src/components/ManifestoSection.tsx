'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Manifesto.module.css';

const LINES = [
  { en: 'Genba ', em: 'is the actual place.', jp: '現場' },
  { en: 'Where ', em: 'things are made,', jp: '造' },
  { en: 'where ', em: 'things are unmade,', jp: '解' },
  { en: 'where ', em: 'things begin again.', jp: '再' },
];

export default function ManifestoSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.manifesto} id="manifesto" ref={ref} data-screen-label="02 Manifesto">
      <div className={styles.manifestoSticky}>
        <div className={styles.manifestoHead}>
          <span className="mono opacity-70">現場 GENBA · ON-SITE</span>
        </div>

        <div className={styles.manifestoBody}>
          {LINES.map((l, i) => {
            const start = i / LINES.length;
            const end = (i + 1) / LINES.length;
            const local = (progress - start) / (end - start);
            const v = Math.max(0, Math.min(1, local));
            const active = v > 0.05 && v < 1.1;
            const done = v >= 1;
            return (
              <div
                key={i}
                className={`${styles.manifestoLine} ${active ? styles.isActive : ''} ${done ? styles.isDone : ''}`}
              >
                <span className={`${styles.manifestoNum} mono`}>0{i + 1}</span>
                <span className={`${styles.manifestoJp} display`}>{l.jp}</span>
                <span className={`${styles.manifestoEn} display`}>
                  {l.en}
                  <em className="italic" style={{ fontWeight: 300 }}>{l.em}</em>
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.manifestoFoot}>
          <div className={styles.manifestoFootCol}>
            <span className="mono opacity-70">— Genba (現場)</span>
            <p className={styles.manifestoNote}>
              The Japanese principle of going to the source — to where the work is happening — to understand it.
              GenbaNEXT extends the principle to digital: software that lives where the materials, the machines, the
              people are.
            </p>
          </div>
          <div className={`${styles.manifestoFootCol} ${styles.manifestoFootColRight}`}>
            <span className="mono opacity-70">— Output</span>
            <p className={styles.manifestoNote}>
              Fourteen platforms, one operating thesis: the linear economy ends. Materials, products and infrastructure
              are recovered, refurbished, redistributed — at the source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
