import styles from '../styles/Audience.module.css';

const CARDS = [
  {
    n: '01',
    who: 'Investors',
    jp: '投',
    pitch:
      'An early-stage platform play across fourteen verticals, with revenue-generating refrigerant + AC + retail products already live across eight markets.',
    bullets: ['Live in 8 markets', '14 verticals', 'Tokyo + Mumbai HQ'],
  },
  {
    n: '02',
    who: 'Partners',
    jp: '結',
    pitch:
      'OEMs, recyclers, logistics, certification bodies — plug into a single SaaS layer that already speaks to the people doing the work, on-site.',
    bullets: ['API-first', 'Vertical SDKs', 'Co-branded deployments'],
  },
  {
    n: '03',
    who: 'Governments',
    jp: '政',
    pitch:
      'EPR, refrigerant compliance, urban infrastructure — reporting and traceability infrastructure designed for regulators, not retrofitted for them.',
    bullets: ['Audit trails', 'EPR-ready', 'Sovereign deployments'],
  },
];

export default function AudienceSection() {
  return (
    <section className={styles.audience} id="audience" data-screen-label="06 For Whom">
      <div className={styles.audienceHead}>
        <span className="section-label">Index 05 / For Whom</span>
        <h2 className={`${styles.audienceHeadTitle} display`}>
          Built for the
          <br />
          <em className="italic" style={{ fontWeight: 300 }}>three audiences</em>
          <br />
          that move first.
        </h2>
      </div>

      <div className={styles.audienceGrid}>
        {CARDS.map((c) => (
          <article key={c.n} className={styles.audienceCard}>
            <div className={styles.cardHead}>
              <span className="mono">{c.n}</span>
              <span className={`${styles.audienceJp} display`}>{c.jp}</span>
            </div>
            <h3 className={`${styles.audienceWho} display`}>{c.who}</h3>
            <p className={styles.audiencePitch}>{c.pitch}</p>
            <ul className={styles.audienceBullets}>
              {c.bullets.map((b) => (
                <li key={b}>
                  <span className="mono">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a className={`btn ${styles.audienceCta}`} href="#">
              <span>Open conversation</span>
              <span className="arrow"></span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
