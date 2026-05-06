'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/TopNav.module.css';

const NAV_LINKS = [
  { href: '#about',     label: '/About' },
  { href: '#loop',      label: '/Loop' },
  { href: '#verticals', label: '/Verticals' },
  { href: '#network',   label: '/Network' },
  { href: '#customer',  label: '/Customers' },
  { href: '#future',    label: '/Future' },
  { href: '#footer',    label: '/Contact' },
];

export default function TopNav() {
  const [scrollPct, setScrollPct]   = useState(0);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [hidden, setHidden]         = useState(false);
  const lastScrollY                 = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y   = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      // progress bar
      setScrollPct(max > 0 ? (y / max) * 100 : 0);

      // hide/show logic — always visible within first 80px
      if (y < 80) {
        setHidden(false);
      } else if (y > lastScrollY.current + 4) {
        // scrolling down — hide
        setHidden(true);
        setMenuOpen(false);   // also close mobile menu if open
      } else if (y < lastScrollY.current - 4) {
        // scrolling up — reveal
        setHidden(false);
      }

      lastScrollY.current = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className={styles.scrollProgress} style={{ width: `${scrollPct}%` }} />

      <nav className={`${styles.topnav} ${hidden ? styles.topnavHidden : ''}`}>
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

        {/* Desktop nav */}
        <div className={styles.right}>
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink}>{label}</a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuVisible : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuInner}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className={styles.mobileMenuLink}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
