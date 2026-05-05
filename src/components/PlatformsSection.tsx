'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Platforms.module.css';

type Status = 'LIVE' | 'BETA' | 'SOON';

interface Platform {
  id: string;
  code: string;
  domain: string;
  jp: string;
  desc: string;
  markets: string[];
  status: Status;
}

const PLATFORMS: Platform[] = [
  { id: '01', code: 'RefNEXT', domain: 'Refrigerant Lifecycle', jp: '冷媒', desc: 'AC + refrigerant lifecycle management. The first vertical, the deepest vertical.', markets: ['JP', 'VN', 'ID', 'IN', 'AE', 'KE', 'TZ', 'NG'], status: 'LIVE' },
  { id: '02', code: 'MatNEXT', domain: 'Materials', jp: '材', desc: 'Steel · aluminium · plastic · paper · glass · rubber. Circular, by default.', markets: ['GLOBAL'], status: 'LIVE' },
  { id: '03', code: 'EduNEXT', domain: 'Education', jp: '学', desc: 'Aggregation and management for the education domain.', markets: ['IN', 'JP'], status: 'LIVE' },
  { id: '04', code: 'AirNEXT', domain: 'Air Conditioners', jp: '空', desc: 'Complete AC lifecycle — install, service, recover, retire.', markets: ['GLOBAL'], status: 'LIVE' },
  { id: '05', code: 'GroNEXT', domain: 'Healthcare', jp: '医', desc: 'Aggregation and management in the healthcare domain.', markets: ['IN'], status: 'LIVE' },
  { id: '06', code: 'ReNEXT', domain: 'Real Estate', jp: '宅', desc: 'Aggregation and management for the real-estate domain.', markets: ['IN', 'JP'], status: 'BETA' },
  { id: '07', code: 'RetNEXT', domain: 'Retail', jp: '店', desc: 'Aggregation and management of retail stores.', markets: ['IN'], status: 'BETA' },
  { id: '08', code: 'FoodNEXT', domain: 'Food + Agriculture', jp: '食', desc: 'Circular economy of food and agriculture management.', markets: ['GLOBAL'], status: 'BETA' },
  { id: '09', code: 'ChemNEXT', domain: 'Chemicals', jp: '化', desc: 'Circular economy of chemicals.', markets: ['GLOBAL'], status: 'SOON' },
  { id: '10', code: 'BatNEXT', domain: 'Batteries', jp: '電', desc: 'Circular economy of batteries.', markets: ['GLOBAL'], status: 'SOON' },
  { id: '11', code: 'SolNEXT', domain: 'Solar', jp: '陽', desc: 'Circular economy of solar panels and solar products.', markets: ['GLOBAL'], status: 'SOON' },
  { id: '12', code: 'ForNEXT', domain: 'Forests + Wood', jp: '森', desc: 'Management of forests and the wood cycle.', markets: ['GLOBAL'], status: 'SOON' },
  { id: '13', code: 'TexNEXT', domain: 'Textiles', jp: '繊', desc: 'Circular economy in the textile industry.', markets: ['GLOBAL'], status: 'SOON' },
  { id: '14', code: 'HOST', domain: 'Hostel Oversight', jp: '宿', desc: 'Transforming Hostel Oversight & Supervision Digitally.', markets: ['IN'], status: 'LIVE' },
];

const statusClass = (s: Status) =>
  s === 'LIVE' ? styles.statusLIVE : s === 'BETA' ? styles.statusBETA : styles.statusSOON;

export default function PlatformsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [travel, setTravel] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const viewW = window.innerWidth;
      setTravel(Math.max(0, trackW - viewW + 40));
    };
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProgress(p);
    };
    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const translateXPx = progress * travel;
  const activeIdx = Math.min(PLATFORMS.length - 1, Math.floor(progress * PLATFORMS.length));

  return (
    <section className={styles.platforms} ref={ref} id="platforms" data-screen-label="04 Platforms">
      <div className={styles.platformsSticky}>
        <div className={styles.platformsHead}>
          <div className="col gap-2">
            <span className="section-label">Index 03 / Network</span>
            <h2 className={`${styles.platformsHeadTitle} display`}>
              Fourteen platforms.
              <br />
              <em className="italic" style={{ fontWeight: 300 }}>One loop.</em>
            </h2>
          </div>
          <div className={styles.platformsHeadRight}>
            <span className="mono opacity-70">
              {(activeIdx + 1).toString().padStart(2, '0')} / {PLATFORMS.length}
            </span>
            <div className={styles.platformsProgress}>
              <div style={{ width: `${progress * 100}%` }} />
            </div>
          </div>
        </div>

        <div className={styles.platformsTrackWrap}>
          <div
            className={styles.platformsTrack}
            ref={trackRef}
            style={{ transform: `translate3d(${-translateXPx}px, 0, 0)` }}
          >
            {PLATFORMS.map((p, i) => (
              <article
                key={p.code}
                className={`${styles.platformCard} ${i === activeIdx ? styles.isActive : ''}`}
              >
                <div className={styles.cardHead}>
                  <span className="mono">{p.id}</span>
                  <span className={`${styles.status} ${statusClass(p.status)}`}>{p.status}</span>
                </div>

                <div className={styles.platformJp} aria-hidden="true">
                  {p.jp}
                </div>

                <div className={styles.cardBody}>
                  <h3 className={`${styles.platformCode} display`}>{p.code}</h3>
                  <span className={`${styles.platformDomain} mono`}>{p.domain}</span>
                  <p className={styles.platformDesc}>{p.desc}</p>
                </div>

                <div className={styles.cardFoot}>
                  <div className={styles.markets}>
                    <span className="mono opacity-70">Markets</span>
                    <div className={styles.marketsList}>
                      {p.markets.map((m) => (
                        <span key={m} className={styles.market}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a className={`${styles.platformLink} mono`} href="#">
                    Visit ↗
                  </a>
                </div>
              </article>
            ))}
            <div className={`${styles.platformCard} ${styles.tail}`}>
              <div className={`${styles.tailNum} display`}>
                <em className="italic" style={{ fontWeight: 300 }}>+ ∞</em>
              </div>
              <p className="mono opacity-70" style={{ marginTop: 24 }}>
                NEXT VERTICAL · IN STUDY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
