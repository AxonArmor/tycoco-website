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

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.leftGroup}>
          <Link href={isHome ? '#accueil' : '/#accueil'} className={styles.logoLink}>
            <div className={styles.logo}>
              <img src="/logoTyCoco.svg" alt="Le Ty Coco" width={186} height={32} />
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
            <svg className={styles.phoneIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className={styles.phoneLabel}>Nous appeler</span>
          </a>

          {/* Visible uniquement en dessous de 1100px, là où la nav est masquée. */}
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
            className={isHome && activeSection === link.id ? styles.activeLink : ''}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`tel:${site.phone.href}`}
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Appeler le {site.phone.display}
        </a>
      </nav>
    </header>
  );
}
