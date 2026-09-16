import React from 'react';
import styles from './HeroAccueil.module.css';

export default function HeroAccueil() {
  return (
    <section id="accueil" className={styles.heroSection}>
      <div className={styles.contentCol}>
        <div className={styles.badge}>
          CAFÉ, TABAC, PMU & ÉVÉNEMENTS
        </div>

        <h1 className={styles.title}>
          Le cœur battant et<br />convivial de Plougourvest
        </h1>

        <p className={styles.description}>
          Bienvenue au Ty Coco ! Que ce soit pour votre café du matin, un pari PMU,
          faire vos jeux FDJ ou partager un moment chaleureux autour de nos événements,
          notre bistrot de quartier contemporain vous ouvre grand ses portes.
        </p>

        <div>
          <a href="#contact" className={styles.ctaBtn}>
            Infos Pratiques & Horaires
          </a>
        </div>
      </div>

      <div className={styles.imageCol}>
        <div className={styles.parallaxImage} role="img" aria-label="Intérieur Le Ty Coco" />
      </div>
    </section>
  );
}
