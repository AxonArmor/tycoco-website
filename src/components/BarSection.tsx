import React from 'react';
import styles from './BarSection.module.css';

export default function BarSection() {
  return (
    <section id="bar" className={styles.barSection}>
      <div className={styles.container}>

        <div className={styles.imageWrapper}>
          <img
            src="/imgBar.png"
            alt="Devanture Le Ty Coco"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.badge}>
            UNE AMBIANCE AUTHENTIQUE
          </div>

          <h2 className={styles.title}>
            Un bistrot de quartier,<br />populaire et breton
          </h2>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Plougourvest</span>
              <span className={styles.statLabel}>Ancré dans le Finistère</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Convivial & Local</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>6 / 7j</span>
              <span className={styles.statLabel}>Toujours ouvert exepté le dimanche</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
