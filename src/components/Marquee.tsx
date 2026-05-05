import styles from '../styles/Marquee.module.css';

const ITEMS = [
  'Refrigerant',
  'Materials',
  'Education',
  'Air',
  'Healthcare',
  'Real Estate',
  'Retail',
  'Food',
  'Chemicals',
  'Batteries',
  'Solar',
  'Forests',
  'Textiles',
  'Hostels',
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        {all.map((t, i) => (
          <span key={i} className={styles.marqueeItem}>
            {t}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
