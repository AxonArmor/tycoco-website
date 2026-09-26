import React from 'react';
import { legalNotices } from '@/config/site';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>

        <div className={styles.header}>
          <div className={styles.badge}>
            SERVICES
          </div>
          <h2 className={styles.title}>
            Ce que vous trouvez<br />sur place
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
              Café, thé et boissons fraîches au comptoir ou en salle. Bières à la pression et en bouteille, cidres de Bretagne.
            </p>
            <p className={styles.cardNotice}>{legalNotices.alcohol}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"></path>
                <path d="M13 5v14"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Française des Jeux</h3>
            <p className={styles.cardDescription}>
              Loto, EuroMillions, Keno et jeux à gratter de la Française des Jeux.
            </p>
            <p className={styles.cardNotice}>{legalNotices.gambling}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#841B2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Presse & Tabac</h3>
            <p className={styles.cardDescription}>
              La presse quotidienne régionale. L&rsquo;établissement assure également la gérance d&rsquo;un débit de tabac.
            </p>
            <p className={styles.cardNotice}>Vente de tabac interdite aux mineurs de moins de 18 ans.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
