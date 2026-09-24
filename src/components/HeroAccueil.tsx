import React from 'react';
import styles from './HeroAccueil.module.css';

export default function HeroAccueil() {
  return (
    <section id="accueil" className={styles.heroSection}>
      <div className={styles.contentCol}>
        <div className={styles.badge}>
          CAFÉ, TABAC & FDJ
        </div>

        <h1 className={styles.title}>
          Le bar du bourg<br />de Plougourvest
        </h1>

        <p className={styles.description}>
          Le Ty Coco, c&rsquo;est un bar-tabac de village : le comptoir, la presse
          du jour, les jeux FDJ, et une salle de billard au fond.
          On y passe pour cinq minutes ou pour l&rsquo;après-midi.
        </p>

        <div>
          <a href="#contact" className={styles.ctaBtn}>
            Horaires & Infos Pratiques
          </a>
        </div>
      </div>

      <div className={styles.imageCol}>
        <div className={styles.parallaxImage} role="img" aria-label="Intérieur Le Ty Coco" />
      </div>
    </section>
  );
}
