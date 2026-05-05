'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

const fmt = (d: Date) => d.toTimeString().slice(0, 8);

export default function HeroSection() {
  const [time, setTime] = useState<Date | null>(null);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setTime(new Date());
    const i = setInterval(() => setTime(new Date()), 1000);
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearInterval(i);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const tokyo = time
    ? new Date(time.getTime() + (9 * 60 + time.getTimezoneOffset()) * 60000)
    : null;
  const mumbai = time
    ? new Date(time.getTime() + (5.5 * 60 + time.getTimezoneOffset()) * 60000)
    : null;

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

      <div className={`${styles.heroMeta} ${styles.heroMetaTl}`}>
        <span className="mono opacity-70">[ N 35.6762° E 139.6503° ] TOKYO</span>
        <span className="mono">{tokyo ? `${fmt(tokyo)} JST` : '—— JST'}</span>
      </div>
      <div className={`${styles.heroMeta} ${styles.heroMetaTr}`}>
        <span className="mono opacity-70">[ N 19.0760° E 72.8777° ] MUMBAI</span>
        <span className="mono">{mumbai ? `${fmt(mumbai)} IST` : '—— IST'}</span>
      </div>

      <div
        className={styles.heroKanji}
        style={{
          transform: `translate(-50%, calc(-50% + ${heroY * 0.5}px))`,
          opacity: heroOpacity * 0.18,
        }}
        aria-hidden="true"
      >
        現場
      </div>

      <div
        className={styles.heroStack}
        style={{ transform: `translateY(${-heroY}px)`, opacity: heroOpacity }}
      >
        <div className={styles.heroEyebrow}>
          <span className="mono">— Index 00 / Hero</span>
          <span className="mono">A Corporate Hub for the Circular Economy</span>
        </div>

        <h1 className={`${styles.heroTitle} display`}>
          <span className={styles.line}>Always be</span>
          <span className={styles.line}>
            ahead <em className="italic" style={{ fontWeight: 300 }}>on-site.</em>
          </span>
        </h1>

        <div className={styles.heroFoot}>
          <div className="col gap-1">
            <span className="mono opacity-70">A B2B SaaS network</span>
            <span className={styles.heroTag}>14 verticals · 2 hubs · 1 loop.</span>
          </div>
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
      </div>

      <div className={`${styles.heroMeta} ${styles.heroMetaBl}`}>
        <span className="mono opacity-70">FR/2026.05.04</span>
        <span className="mono opacity-70">v 1.0.0</span>
      </div>
      <div className={`${styles.heroMeta} ${styles.heroMetaBr}`}>
        <a className={`mono ${styles.heroScrollCue}`} href="#manifesto">
          SCROLL · 滚动 · スクロール ↓
        </a>
      </div>

      <div className={styles.heroRing} aria-hidden="true">
        <svg viewBox="-100 -100 200 200">
          <circle cx="0" cy="0" r="92" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
          <circle cx="0" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
          <circle cx="0" cy="0" r="68" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.2" />
          <g className={styles.ringSpin}>
            {Array.from({ length: 36 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="-92"
                x2="0"
                y2="-86"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 10})`}
              />
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
}
