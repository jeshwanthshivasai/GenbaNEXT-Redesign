'use client';

import styles from '../styles/Footer.module.css';

const INDEX_LINKS = [
  { n: '01', label: 'About',    href: '#about' },
  { n: '02', label: 'The Loop', href: '#loop' },
  { n: '03', label: 'Verticals',href: '#verticals' },
  { n: '04', label: 'Network',  href: '#network' },
  { n: '05', label: 'For Whom', href: '#for-whom' },
  { n: '06', label: 'Future',   href: '#future' },
  { n: '07', label: 'Contact',  href: '#contact' },
];

const VERTICALS = [
  'RefNEXT', 'MatNEXT', 'EduNEXT', 'AirNEXT',
  'GroNEXT', 'ReNEXT',  'RetNEXT', 'FoodNEXT',
  'ChemNEXT','BatNEXT', 'SolNEXT', 'ForNEXT',
  'TexNEXT', 'HOST',
];

export default function FooterSection() {
  return (
    <footer className={styles.footer} id="footer" data-screen-label="07 Footer">

      {/* ── CTA header — unchanged ── */}
      <div className={styles.footerCta}>
        <div className={styles.footerCtaMark}>
          <span className={`${styles.footerCtaMarkTitle} display`}>
            Genba<em className="italic" style={{ fontWeight: 300 }}>NEXT.</em>
          </span>
          <span className="mono opacity-70">現場 · ON-SITE · आगे</span>
        </div>
        <div className={styles.footerCtaRow}>
          {/* href wired to email — no visible address */}
          <a className="btn btn-ink" href="mailto:info@genbanext.com">
            <span>Talk to us</span>
            <span className="arrow"></span>
          </a>
          <a className="btn" href="#">
            <span>Investor brief</span>
            <span className="arrow"></span>
          </a>
        </div>
      </div>

      {/* ── Middle section — new composition ── */}
      <div className={styles.footerCols}>

        {/* Tier 1: Hubs full-width, side by side */}
        <div className={styles.hubsRow}>
          <div className={styles.hubEntry}>
            <span className={styles.hubDot} />
            <div className={styles.hubCityRow}>
              <span className={styles.hubCityName}>Tokyo</span>
              <span className={styles.hubCityScript}>東京</span>
            </div>
            <span className={styles.hubCoords}>N 35.6762° · E 139.6503°</span>
          </div>

          <div className={`${styles.hubEntry} ${styles.hubEntryRight}`}>
            <span className={styles.hubDot} />
            <div className={styles.hubCityRow}>
              <span className={styles.hubCityName}>Mumbai</span>
              <span className={styles.hubCityScript}>मुंबई</span>
            </div>
            <span className={styles.hubCoords}>N 19.0760° · E 72.8777°</span>
          </div>
        </div>

        {/* Tier 2: Index | divider | Verticals */}
        <div className={styles.bottomRow}>
          {/* Index */}
          <div className={styles.indexCol}>
            <span className="mono opacity-70">— Index</span>
            {INDEX_LINKS.map(({ n, label, href }) => (
              <a key={n} href={href} className={styles.indexRow}>
                <span className={styles.indexNum}>{n}</span>
                <span className={styles.indexLabel}>{label}</span>
                <span className={styles.indexArrow}>→</span>
              </a>
            ))}
          </div>

          {/* Verticals — 2-col grid */}
          <div className={styles.verticalsCol}>
            <span className="mono opacity-70">— Verticals</span>
            <div className={styles.verticalsGrid}>
              {VERTICALS.map((v, i) => (
                <a key={v} href="#" className={styles.indexRow}>
                  <span className={styles.indexNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.indexLabel}>{v}</span>
                  <span className={styles.indexArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── Baseline — unchanged ── */}
      <div className={styles.footerBaseline}>
        <span className="mono opacity-70">© 2026 GenbaNEXT · All rights reserved</span>
        <span className="mono opacity-70">A B2B SaaS network for the circular economy</span>
        <span className="mono opacity-70">v 1.0.0 · 2026.05.04</span>
      </div>

    </footer>
  );
}
