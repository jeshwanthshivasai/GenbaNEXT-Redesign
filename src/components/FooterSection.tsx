'use client';

import type { Lang } from './TopNav';
import styles from '../styles/Footer.module.css';

const LANGS: Lang[] = ['EN', 'JP', 'HI'];

const VERTICALS = [
  'RefNEXT',
  'MatNEXT',
  'EduNEXT',
  'AirNEXT',
  'GroNEXT',
  'ReNEXT',
  'RetNEXT',
  'FoodNEXT',
  'ChemNEXT',
  'BatNEXT',
  'SolNEXT',
  'ForNEXT',
  'TexNEXT',
  'HOST',
];

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function FooterSection({ lang, setLang }: Props) {
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
        <div className={styles.footerCol}>
          <span className="mono opacity-70">— Index</span>
          <a href="#manifesto">01 / Thesis</a>
          <a href="#loop">02 / Loop</a>
          <a href="#platforms">03 / Network</a>
          <a href="#geography">04 / Geography</a>
          <a href="#audience">05 / For Whom</a>
        </div>

        <div className={styles.footerCol}>
          <span className="mono opacity-70">— Verticals</span>
          <div className={styles.footerVerticals}>
            {VERTICALS.map((v) => (
              <a key={v} href="#">
                {v}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerCol}>
          <span className="mono opacity-70">— Hubs</span>
          <div className={styles.footerHub}>
            <span className={styles.footerHubLabel}>Tokyo</span>
            <span className="mono opacity-70">N 35.6762° E 139.6503°</span>
          </div>
          <div className={styles.footerHub}>
            <span className={styles.footerHubLabel}>Mumbai</span>
            <span className="mono opacity-70">N 19.0760° E 72.8777°</span>
          </div>
          <a href="mailto:hello@genbanext.com" className="mt-2">
            hello@genbanext.com
          </a>
        </div>

        <div className={styles.footerCol}>
          <span className="mono opacity-70">— Language</span>
          <div className={styles.footerLangs}>
            {LANGS.map((l) => (
              <button
                key={l}
                className={`${styles.footerLang} ${lang === l ? styles.footerLangActive : ''}`}
                onClick={() => setLang(l)}
              >
                {l}
              </button>
            ))}
          </div>
          <span className="mono opacity-70 mt-3">— Subscribe</span>
          <form className={styles.footerSub} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="email@domain.com" />
            <button type="submit" className="mono">
              ↗
            </button>
          </form>
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
