'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

export default function HeroSection() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scroll / 600);
  const heroY = scroll * 0.3;

  return (
    <section className={styles.hero} data-screen-label="01 Hero">
      <div className={styles.heroGrid} aria-hidden="true">
        <div className={styles.heroGridV} />
        <div className={styles.heroGridV} />
        <div className={styles.heroGridV} />
        <div className={styles.heroGridV} />
        <div className={styles.heroGridV} />
      </div>

      <div
        className={styles.heroKanji}
        style={{
          transform: `translate(var(--kanji-x, 0px), calc(-50% + ${heroY * 0.5}px))`,
          opacity: heroOpacity * 0.18,
        }}
        aria-hidden="true"
      >
        現<br />場
      </div>

      <div
        className={styles.heroStack}
        style={{ transform: `translateY(${-heroY}px)`, opacity: heroOpacity }}
      >
        <h1 className={`${styles.heroTitle} display`}>
          <span className={styles.line}>Always be</span>
          <span className={styles.line}>
            ahead <em className="italic" style={{ fontWeight: 300 }}>on-site.</em>
          </span>
        </h1>

        <div className={styles.heroActions}>
          <a className="btn btn-ink" href="#manifesto">
            <span>Enter Genba</span>
            <span className="arrow"></span>
          </a>
          <a className="btn" href="#platforms">
            <span>14 Platforms</span>
            <span className="arrow"></span>
          </a>
        </div>
      </div>

    </section>
  );
}
