import React from 'react';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.badge}>
            À VOTRE SERVICE
          </div>
          <h2 className={styles.title}>
            Tout ce dont vous avez besoin,<br />sous un même toit
          </h2>
        </div>

        <div className={styles.cardsGrid}>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                <path d="M9 12v6"></path>
                <path d="M13 12v6"></path>
                <path d="M14 7.5c-1 0-1.44.5-2.5.5s-1.5-.5-2.5-.5-1.5.5-2.5.5-1.5-.5-2.5-.5"></path>
                <path d="M5 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Bar & Comptoir</h3>
            <p className={styles.cardDescription}>
              Café expresso le matin, bières pression sélectionnées, cidre breton et boissons fraîches à toute heure dans une ambiance chaleureuse.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"></path>
                <path d="M13 5v14"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>PMU & FDJ Jeux</h3>
            <p className={styles.cardDescription}>
              Tentez votre chance ! Borne PMU pour vos paris hippiques en direct, tickets à gratter Illiko, Loto et EuroMillions de la Française des Jeux.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Tabac & Presse</h3>
            <p className={styles.cardDescription}>
              Espace tabac complet, cigares, e-cigarettes et liquides. Retrouvez également la presse quotidienne régionale et magazines.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
