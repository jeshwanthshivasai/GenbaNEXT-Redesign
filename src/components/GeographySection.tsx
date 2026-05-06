import styles from '../styles/Geography.module.css';

interface Market {
  code: string;
  name: string;
  lat: number;
  lon: number;
  hub?: boolean;
  label?: string;
}

// These are the specific coordinates and projection math that generated the "spider web" effect
// you liked. We keep them frozen here so the web background never changes.
const FROZEN_WEB_MARKETS = [
  { lat: 10.0583, lon: 95.2772 },
  { lat: -0.7893, lon: 113.9213 },
  { lat: 25.276987, lon: 55.296249 },
  { lat: -0.0236, lon: 37.9062 },
  { lat: -6.369, lon: 34.8888 },
  { lat: 9.082, lon: 8.6753 },
];

const frozenProject = (lat: number, lon: number) => ({
  x: ((lon + 180) / 360) * 100,
  y: ((90 - lat) / 180) * 100,
});

const MARKETS: Market[] = [
  { code: 'JP', name: 'Japan', lat: 40.6762, lon: 125.6503, hub: true, label: 'Tokyo · 東京' },
  { code: 'IN', name: 'India', lat: 25.076, lon: 65.8777, hub: true, label: 'Mumbai · मुंबई' },
  { code: 'VN', name: 'Vietnam', lat: 20.0583, lon: 96.2772 },
  { code: 'ID', name: 'Indonesia', lat: -0.7893, lon: 113.9213 },
  { code: 'MY', name: 'Malaysia', lat: 7.2105, lon: 99.9758 },
  { code: 'TH', name: 'Thailand', lat: 25.8700, lon: 88.9925 },
  { code: 'SG', name: 'Singapore', lat: -2.5, lon: 105.8198 },
  { code: 'US', name: 'USA', lat: 39.8283, lon: -98.5795 },
];

// SVG covers ~83.5°N to ~-60°S (Antarctica clipped)
const LAT_NORTH = 83.5;
const LAT_SOUTH = -60;
const LAT_RANGE = LAT_NORTH - LAT_SOUTH; // 143.5

const project = (lat: number, lon: number) => ({
  x: ((lon + 180) / 360) * 100,
  y: ((LAT_NORTH - lat) / LAT_RANGE) * 100,
});

export default function GeographySection() {
  return (
    <section className={styles.geography} id="geography" data-screen-label="05 Geography">
      <div className={styles.geographyHead}>
        <h2 className={`${styles.geographyHeadTitle} display`}>
          Two hubs.
          <br />
          <em className="italic" style={{ fontWeight: 300 }}>
            Eight active markets.
          </em>
        </h2>
      </div>

      <div className={styles.geographyStage}>
        <div className={styles.geographyMap}>
          <img
            src="/world-map.svg"
            alt=""
            aria-hidden="true"
            className={styles.geographyWorldImg}
          />

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.geographyGridSvg}>
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={'h' + i}
                x1="0"
                y1={i * 12.5}
                x2="100"
                y2={i * 12.5}
                stroke="var(--ink)"
                strokeWidth="0.1"
                opacity="0.15"
              />
            ))}
            {Array.from({ length: 13 }).map((_, i) => (
              <line
                key={'v' + i}
                x1={i * 8.33}
                y1="0"
                x2={i * 8.33}
                y2="100"
                stroke="var(--ink)"
                strokeWidth="0.05"
                opacity="0.15"
              />
            ))}
            <line x1="0" y1="50" x2="100" y2="50" stroke="var(--ink)" strokeWidth="0.15" opacity="0.4" strokeDasharray="0.6 0.6" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="var(--ink)" strokeWidth="0.07" opacity="0.4" strokeDasharray="1.25 1.25" />
          </svg>

          {/* STATIC WEB LAYER - Frozen to the exact visual you liked */}
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className={styles.geographyLinesSvg}>
            {FROZEN_WEB_MARKETS.map((m, i) => {
              const a = frozenProject(35.6762, 139.6503);
              const b = frozenProject(m.lat, m.lon);
              const c = frozenProject(19.076, 72.8777);
              return (
                <g key={i}>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="var(--blue)" strokeWidth="0.1" opacity="0.4" />
                  <line x1={c.x} y1={c.y} x2={b.x} y2={b.y} stroke="var(--blue)" strokeWidth="0.1" opacity="0.4" />
                </g>
              );
            })}
            <line
              x1={frozenProject(35.6762, 139.6503).x}
              y1={frozenProject(35.6762, 139.6503).y}
              x2={frozenProject(19.076, 72.8777).x}
              y2={frozenProject(19.076, 72.8777).y}
              stroke="var(--ink)"
              strokeWidth="0.15"
            />
          </svg>

          {MARKETS.map((m) => {
            const p = project(m.lat, m.lon);
            return (
              <div
                key={m.code}
                className={`${styles.geoMarker} ${m.hub ? styles.hub : ''}`}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              >
                <span className={styles.geoMarkerDot} />
                <span className={styles.geoMarkerLabel}>
                  {m.code}
                  {m.hub ? ' · HUB' : ''}
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.geographyLegend}>
          <div className={styles.legendCol}>
            <span className="mono opacity-70">— Hubs</span>
            {MARKETS.filter((m) => m.hub).map((m) => (
              <div key={m.code} className={styles.legendRow}>
                <span className={`${styles.legendRowLabel} display`}>{m.label}</span>
                <span className="mono opacity-70">
                  [ {m.lat.toFixed(4)}°, {m.lon.toFixed(4)}° ]
                </span>
              </div>
            ))}
          </div>
          <div className={styles.legendCol}>
            <span className="mono opacity-70">— RefNEXT Markets</span>
            <div className={styles.legendGrid}>
              {MARKETS.filter((m) => (!m.hub && m.code !== 'US') || m.code === 'IN').map((m) => (
                <div key={m.code} className={styles.legendItem}>
                  <span className="mono">{m.code}</span>
                  <span>{m.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.legendGrid} style={{ alignItems: 'start', gap: '32px 16px' }}>
            <div className={styles.legendCol}>
              <span className="mono opacity-70">— MatNEXT Market</span>
              <div className={styles.legendItem}>
                <span className="mono">IN</span>
                <span>India</span>
              </div>
            </div>
            <div className={styles.legendCol}>
              <span className="mono opacity-70">— RetNEXT Market</span>
              <div className={styles.legendItem}>
                <span className="mono">US</span>
                <span>USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
