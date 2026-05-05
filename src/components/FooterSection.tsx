'use client';

import styles from '../styles/Footer.module.css';

const INDEX_LINKS = [
  { n: '01', label: 'Thesis',    href: '#manifesto' },
  { n: '02', label: 'Loop',      href: '#loop' },
  { n: '03', label: 'Network',   href: '#platforms' },
  { n: '04', label: 'Geography', href: '#geography' },
  { n: '05', label: 'For Whom',  href: '#audience' },
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
      <div className={styles.footerCta}>
        <div className={styles.footerCtaMark}>
          <span className={`${styles.footerCtaMarkTitle} display`}>
            Genba<em className="italic" style={{ fontWeight: 300 }}>NEXT.</em>
          </span>
          <span className="mono opacity-70">現場 · ON-SITE · आगे</span>
        </div>

        <div className={styles.footerCtaRow}>
          <a className="btn btn-ink" href="#">
            <span>Talk to us</span>
            <span className="arrow"></span>
          </a>
          <a className="btn" href="#">
            <span>Investor brief</span>
            <span className="arrow"></span>
          </a>
        </div>
      </div>

      <div className={styles.footerCols}>
        {/* ── Index ── */}
        <div className={styles.footerCol}>
          <span className="mono opacity-70">— Index</span>
          {INDEX_LINKS.map(({ n, label, href }) => (
            <a key={n} href={href} className={styles.indexRow}>
              <span className={styles.indexNum}>{n}</span>
              <span className={styles.indexLabel}>{label}</span>
              <span className={styles.indexArrow}>→</span>
            </a>
          ))}
        </div>

        {/* ── Verticals ── */}
        <div className={styles.footerCol}>
          <span className="mono opacity-70">— Verticals</span>
          <div className={styles.footerVerticals}>
            {VERTICALS.map((v) => (
              <a key={v} href="#" className={styles.verticalRow}>
                {v}
              </a>
            ))}
          </div>
        </div>

        {/* ── Hubs — dominant feature column ── */}
        <div className={styles.footerHubCol}>
          <span className="mono opacity-70">— Hubs</span>

          <div className={styles.hubEntry}>
            <span className={styles.hubDot} />
            <div className={styles.hubCityRow}>
              <span className={styles.hubCityName}>Tokyo</span>
              <span className={styles.hubCityScript}>東京</span>
            </div>
            <span className={styles.hubCoords}>N 35.6762° · E 139.6503°</span>
          </div>

          <div className={styles.hubRule} />

          <div className={styles.hubEntry}>
            <span className={styles.hubDot} />
            <div className={styles.hubCityRow}>
              <span className={styles.hubCityName}>Mumbai</span>
              <span className={styles.hubCityScript}>मुंबई</span>
            </div>
            <span className={styles.hubCoords}>N 19.0760° · E 72.8777°</span>
          </div>

          <a href="mailto:info@genbanext.com" className={styles.hubEmail}>
            info@genbanext.com
          </a>
        </div>
      </div>

      <div className={styles.footerBaseline}>
        <span className="mono opacity-70">© 2026 GenbaNEXT · All rights reserved</span>
        <span className="mono opacity-70">A B2B SaaS network for the circular economy</span>
        <span className="mono opacity-70">v 1.0.0 · 2026.05.04</span>
      </div>
    </footer>
  );
}
