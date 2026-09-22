'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/config/site';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Accueil', id: 'accueil' },
  { label: 'Le Lieu', id: 'bar' },
  { label: 'Services', id: 'services' },
  { label: 'Espace Jeux', id: 'jeux' },
  { label: 'Contact', id: 'contact' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState<string | null>(isHome ? 'accueil' : null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 60) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let currentSection = 'accueil';

      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && scrollPosition >= el.offsetTop) {
          currentSection = link.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.leftGroup}>
          <Link href={isHome ? '#accueil' : '/#accueil'} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.logo}>
              <img src="/logoTyCoco.svg" alt="Le Ty Coco" />
            </div>
          </Link>
          <span className={styles.subtitle}>Bar-Tabac</span>
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

          <a href={`tel:${site.phone.href}`} className={styles.phoneBtn}>
            Nous appeler
          </a>

          {/* Visible uniquement en dessous de 640px, là où la nav est masquée. */}
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav id="menu-mobile" className={styles.mobileNav} hidden={!menuOpen}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={isHome ? `#${link.id}` : `/#${link.id}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
