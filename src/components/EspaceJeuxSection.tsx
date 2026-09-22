import React from 'react';
import styles from './EspaceJeuxSection.module.css';

const features = [
  'Billard américain',
  'Cible de fléchettes électronique',
  'Écran pour les retransmissions sportives',
];

export default function EspaceJeuxSection() {
  return (
    <section id="jeux" className={styles.espaceJeuxSection}>
      <div className={styles.contentCol}>
        <div className={styles.badge}>
          LA SALLE DU FOND
        </div>

        <h2 className={styles.title}>
          Un espace jeux,<br />avec billard et fléchettes
        </h2>

        <p className={styles.description}>
          Une salle séparée du comptoir, avec un billard américain et une cible
          de fléchettes électronique. Elle est accessible aux horaires
          d&rsquo;ouverture du bar, sans réservation &mdash; il suffit de demander
          au comptoir.
        </p>

        <ul className={styles.featureList}>
          {features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              <span className={styles.checkIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.imageCol}>
        <div className={styles.parallaxImage} role="img" aria-label="Espace Jeux Le Ty Coco" />
      </div>
    </section>
  );
}
