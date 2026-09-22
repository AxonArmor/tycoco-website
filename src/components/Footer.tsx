'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, legalNotices } from '@/config/site';
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
              <h3 className={styles.brandTitle}>{site.name}</h3>
            </Link>
            <p className={styles.brandDescription}>
              Bar, tabac, presse et jeux au bourg de {site.city}, dans le Finistère.
              Le comptoir, la presse du jour et une salle de billard au fond.
            </p>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li><a href={isHome ? '#bar' : '/#bar'}>Le Lieu</a></li>
              <li><a href={isHome ? '#services' : '/#services'}>Nos Services</a></li>
              <li><a href={isHome ? '#jeux' : '/#jeux'}>L&rsquo;Espace Jeux</a></li>
              <li><a href={isHome ? '#contact' : '/#contact'}>Horaires & Contact</a></li>
            </ul>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.linkList}>
              <li>{site.address.street}</li>
              <li>{site.address.postalCode} {site.address.city}</li>
              <li><a href={`tel:${site.phone.href}`}>{site.phone.display}</a></li>
            </ul>
          </div>

        </div>

        {/* Mentions obligatoires : loi Évin (alcool, tabac) et réglementation
            des jeux d'argent et de hasard. */}
        <div className={styles.noticeBand}>
          <p>{legalNotices.alcohol}</p>
          <p>{legalNotices.gambling}</p>
          <p>{legalNotices.minors}</p>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {site.name} - {site.editor.name}.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/mentions-legales">Mentions Légales</Link>
            <span className={styles.separator}>-</span>
            <Link href="/confidentialite">Confidentialité</Link>
            <span className={styles.separator}>-</span>
            <Link href="https://axon-armor.fr" target='_blank'>Site réalisé par {site.builder.brand}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
