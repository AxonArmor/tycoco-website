import React from 'react';
import styles from './EspaceJeuxSection.module.css';

export default function EspaceJeuxSection() {
  return (
    <section id="jeux" className={styles.espaceJeuxSection}>
      <div className={styles.contentCol}>
        <div className={styles.badge}>
          DÉTENTE & LOISIRS
        </div>

        <h2 className={styles.title}>
          Un espace jeux,<br />avec billard et fléchettes
        </h2>

        <p className={styles.description}>
          Installez-vous confortablement dans notre salle de jeux équipée. Défiez
          vos amis lors d'une partie de billard ou de fléchettes électroniques. Avec
          nos tables nappées et notre éclairage tamisé, c'est l'endroit parfait pour
          passer une excellente fin d'après-midi ou une soirée animée en sirotant
          votre verre.
        </p>

        <ul className={styles.featureList}>
          <li className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            Table de billard américain entretenue
          </li>

          <li className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            Cible de fléchettes électronique moderne
          </li>

          <li className={styles.featureItem}>
            <span className={styles.checkIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </span>
            Ambiance bistrot feutrée avec écran géant TV
          </li>
        </ul>
      </div>

      <div className={styles.imageCol}>
        <div className={styles.parallaxImage} role="img" aria-label="Espace Jeux Le Ty Coco" />
      </div>
    </section>
  );
}
