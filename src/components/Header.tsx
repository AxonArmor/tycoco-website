'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState<string | null>(isHome ? 'accueil' : null);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const sections = ['accueil', 'bar', 'services', 'jeux', 'contact'];

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let currentSection = 'accueil';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'Le Lieu', id: 'bar' },
    { label: 'Services', id: 'services' },
    { label: 'Espace Jeux', id: 'jeux' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <Link href={isHome ? '#accueil' : '/#accueil'} style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.logo}>
            <img src="/logoTyCoco.svg" alt="Le Ty Coco" />
          </div>
        </Link>
        <span className={styles.subtitle}>Bar- Tabac</span>
      </div>

      <div className={styles.rightGroup}>
        <nav className={styles.nav}>
          {navLinks.map((link) => {
            const href = isHome ? `#${link.id}` : `/#${link.id}`;
            const isActive = isHome && activeSection === link.id;

            return (
              <a
                key={link.id}
                href={href}
                className={isActive ? styles.activeLink : ''}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a href={isHome ? '#contact' : '/#contact'} className={styles.phoneBtn}>
          Nous appeler
        </a>
      </div>
    </header>
  );
}
