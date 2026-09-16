'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.topGrid}>

          <div className={styles.brandCol}>
            <Link href={isHome ? '#accueil' : '/#accueil'}>
              <h3 className={styles.brandTitle}>Le Ty Coco</h3>
            </Link>
            <p className={styles.brandDescription}>
              Votre bar-tabac PMU incontournable au cœur de Plougourvest.
              Convivialité, partage et authenticité bretonne tous les jours de la semaine.
            </p>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><a href={isHome ? '#bar' : '/#bar'}>Le Lieu</a></li>
              <li><a href={isHome ? '#services' : '/#services'}>Nos Services</a></li>
              <li><a href={isHome ? '#jeux' : '/#jeux'}>L'Espace Jeux</a></li>
              <li><a href={isHome ? '#contact' : '/#contact'}>Horaires & Contact</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Services officiels</h4>
            <ul className={styles.linkList}>
              <li><a href={isHome ? '#services' : '/#services'}>PMU & Paris</a></li>
              <li><a href={isHome ? '#services' : '/#services'}>Française des Jeux</a></li>
              <li><a href={isHome ? '#services' : '/#services'}>Presse Régionale</a></li>
              <li><a href={isHome ? '#services' : '/#services'}>Tabac & Cigares</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Le Ty Coco - Bar Tabac PMU Plougourvest. Tous droits réservés.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/mentions-legales">Mentions Légales</Link>
            <span className={styles.separator}>-</span>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
