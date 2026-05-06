'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/TopNav.module.css';

export default function TopNav() {
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

  return (
    <>
      <div className={styles.scrollProgress} style={{ width: `${scrollPct}%` }} />

      <nav className={styles.topnav}>
        <a href="#" className={styles.brandMark} aria-label="GenbaNEXT — home">
          <Image
            src="/logo.png"
            alt="GenbaNEXT"
            width={140}
            height={32}
            priority
            className={styles.logo}
          />
        </a>
        <div className={styles.right}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#loop" className={styles.navLink}>The Loop</a>
          <a href="#verticals" className={styles.navLink}>Verticals</a>
          <a href="#network" className={styles.navLink}>Network</a>
          <a href="#customer" className={styles.navLink}>Customers</a>
          <a href="#future" className={styles.navLink}>Future</a>
          <a href="#footer" className={styles.navLink}>Contact</a>
        </div>
      </nav>
    </>
  );
}
