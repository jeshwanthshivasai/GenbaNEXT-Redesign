'use client';

import { useEffect, useState } from 'react';
import styles from '../styles/TopNav.module.css';

export type Lang = 'EN' | 'JP' | 'HI';

const ORDER: Lang[] = ['EN', 'JP', 'HI'];

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function TopNav({ lang, setLang }: Props) {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cycleLang = () => {
    const idx = ORDER.indexOf(lang);
    setLang(ORDER[(idx + 1) % ORDER.length]);
  };

  return (
    <>
      <div className={styles.scrollProgress} style={{ width: `${scrollPct}%` }} />

      <nav className={styles.topnav}>
        <a href="#" className={styles.brandMark}>
          <span className={styles.brandGlyph} />
          <span>GenbaNEXT</span>
        </a>
        <div className={styles.right}>
          <a href="#manifesto" className={styles.navLink}>Thesis</a>
          <a href="#platforms" className={styles.navLink}>Platforms</a>
          <a href="#geography" className={styles.navLink}>Network</a>
          <a href="#footer" className={styles.navLink}>Contact</a>
          <button onClick={cycleLang} className={`${styles.navLink} ${styles.langDivider}`}>
            {lang}
          </button>
        </div>
      </nav>

      <div className={`${styles.chromeRail} ${styles.chromeRailLeft}`}>
        <span className={styles.railText}>CIRCULAR ECONOMY · 14 PLATFORMS</span>
        <span className={styles.railText}>
          {Math.round(scrollPct).toString().padStart(3, '0')} / 100
        </span>
      </div>
      <div className={`${styles.chromeRail} ${styles.chromeRailRight}`}>
        <span className={styles.railText}>TOKYO · MUMBAI</span>
        <span className={styles.railText}>v 1.0.0</span>
      </div>
    </>
  );
}
