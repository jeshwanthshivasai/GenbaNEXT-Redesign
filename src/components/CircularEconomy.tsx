'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/CircularEconomy.module.css';

const STATIONS = [
  { id: '01', title: 'Source', jp: '源', desc: 'Raw materials, virgin inputs, the place where things begin.' },
  { id: '02', title: 'Make', jp: '造', desc: 'Manufacturing, fabrication, assembly. The first life of an object.' },
  { id: '03', title: 'Use', jp: '用', desc: 'Distribution, retail, daily operation. Where value is delivered.' },
  { id: '04', title: 'Recover', jp: '回', desc: 'Collect at end-of-life. The hinge between linear and circular.' },
  { id: '05', title: 'Regenerate', jp: '再', desc: 'Refurbish, recycle, redistribute. Materials become themselves again.' },
  { id: '06', title: 'Return', jp: '還', desc: 'Back to source — closing the loop. The next first life begins.' },
];

export default function CircularEconomy() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.max(0, Math.min(1, -r.top / total));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rotation = progress * 360;
  const activeIdx = Math.min(STATIONS.length - 1, Math.floor(progress * STATIONS.length));
  const active = STATIONS[activeIdx];

  return (
    <section className={styles.circular} ref={ref} id="loop" data-screen-label="03 Circular Economy">
      <div className={styles.circularSticky}>
        <div className={styles.circularHead}>
          <span className="mono opacity-70">CIRCULAR ECONOMY · 循环经济</span>
        </div>

        <div className={styles.circularStage}>
          <div className={styles.circularDialWrap}>
            <div className={styles.circularDial} style={{ transform: `rotate(${-rotation}deg)` }}>
              <svg viewBox="-200 -200 400 400">
                <circle cx="0" cy="0" r="180" fill="none" stroke="var(--ink)" strokeWidth="0.6" />
                <circle
                  cx="0"
                  cy="0"
                  r="140"
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth="0.4"
                  strokeDasharray="2 4"
                  opacity="0.4"
                />
                <circle cx="0" cy="0" r="100" fill="none" stroke="var(--ink)" strokeWidth="0.4" opacity="0.3" />

                {Array.from({ length: 60 }).map((_, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="-180"
                    x2="0"
                    y2={i % 5 === 0 ? -170 : -175}
                    stroke="var(--ink)"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 6})`}
                    opacity={i % 5 === 0 ? 1 : 0.4}
                  />
                ))}

                {STATIONS.map((s, i) => {
                  const angle = (i / STATIONS.length) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 140;
                  const y = Math.sin(rad) * 140;
                  const isActive = i === activeIdx;
                  return (
                    <g key={s.id} transform={`translate(${x}, ${y})`}>
                      <circle
                        r={isActive ? 12 : 6}
                        fill={isActive ? 'var(--blue)' : 'var(--paper)'}
                        stroke="var(--ink)"
                        strokeWidth="1"
                      />
                      {isActive && (
                        <circle r="22" fill="none" stroke="var(--blue)" strokeWidth="0.8" opacity="0.5" />
                      )}
                      <g transform={`rotate(${rotation})`}>
                        <text
                          x="0"
                          y="4"
                          textAnchor="middle"
                          fontFamily="var(--mono)"
                          fontSize="10"
                          fill={isActive ? 'var(--paper)' : 'var(--ink)'}
                        >
                          {s.id}
                        </text>
                      </g>
                    </g>
                  );
                })}

                <g transform={`rotate(${rotation})`}>
                  <text
                    x="0"
                    y="20"
                    textAnchor="middle"
                    fontFamily="var(--sans)"
                    fontSize="80"
                    fontWeight="500"
                    fill="var(--ink)"
                    opacity="0.9"
                  >
                    {active.jp}
                  </text>
                </g>

                <g transform={`rotate(${rotation})`}>
                  <line x1="0" y1="-180" x2="0" y2="-200" stroke="var(--blue)" strokeWidth="2" />
                  <polygon points="0,-200 -4,-192 4,-192" fill="var(--blue)" />
                </g>
              </svg>

              <div className={styles.circularCenterMark} />
            </div>

            <div className={styles.circularStaticLabels}>
              {STATIONS.map((s, i) => {
                const angle = (i / STATIONS.length) * 360 - 90 + rotation;
                const rad = (angle * Math.PI) / 180;
                const r = 220;
                return (
                  <span
                    key={s.id}
                    className={`${styles.circularStaticLabel} ${
                      i === activeIdx ? styles.circularStaticLabelActive : ''
                    }`}
                    style={{
                      transform: `translate(${Math.cos(rad) * r}px, ${Math.sin(rad) * r}px) translate(-50%, -50%)`,
                    }}
                  >
                    {s.title}
                  </span>
                );
              })}
            </div>
          </div>

          <div className={styles.circularContent}>
            <div className={styles.circularCounter}>
              <span className={`${styles.circularCounterNum} display`}>{active.id}</span>
              <span className="mono">/ 06</span>
            </div>

            <h2 className={`${styles.circularTitle} display`}>
              {active.title} <em className="italic" style={{ fontWeight: 300 }}>—</em>{' '}
              <span className="opacity-50">{active.jp}</span>
            </h2>

            <p className={styles.circularDesc}>{active.desc}</p>

            <div className={styles.circularProgress}>
              <span className="mono opacity-70">CYCLE</span>
              <div className={styles.circularProgressBar}>
                <div style={{ width: `${progress * 100}%` }} />
              </div>
              <span className="mono">{Math.round(progress * 100)}%</span>
            </div>

            <div className={styles.circularMeta}>
              <div>
                <span className="mono opacity-70">Linear loss</span>
                <span className={`${styles.metaValue} display`}>
                  92<span className="opacity-50">%</span>
                </span>
              </div>
              <div>
                <span className="mono opacity-70">Circular recovery</span>
                <span className={`${styles.metaValue} display`}>
                  87<span className="opacity-50">%</span>
                </span>
              </div>
              <div>
                <span className="mono opacity-70">Verticals integrated</span>
                <span className={`${styles.metaValue} display`}>14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
