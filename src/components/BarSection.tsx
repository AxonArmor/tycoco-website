import React from 'react';
import { site, openDaysSummary } from '@/config/site';
import styles from './BarSection.module.css';

export default function BarSection() {
  // Déduit des horaires : ce bloc ne peut pas contredire le tableau d'ouverture.
  const openDays = openDaysSummary();

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
            LE LIEU
          </div>

          <h2 className={styles.title}>
            Un bistrot de village,<br />au bourg de {site.city}
          </h2>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{site.address.street}</span>
              <span className={styles.statLabel}>Dans le Finistère</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>{site.editor.name}</span>
              <span className={styles.statLabel}>Vous accueille au comptoir</span>
            </div>

            <div className={styles.statItem}>
              <span className={styles.statNumber}>{openDays.value}</span>
              <span className={styles.statLabel}>{openDays.label}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
