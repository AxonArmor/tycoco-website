import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Politique de Confidentialité - Le Ty Coco',
  description: 'Politique de confidentialité et protection des données personnelles de Le Ty Coco.',
};

export default function ConfidentialitePage() {
  return (
    <main>
      <Header />
      <div className={styles.legalContainer}>
        <Link href="/" className={styles.backLink}>
          ← Retour à l'accueil
        </Link>
        
        <h1 className={styles.title}>Politique de Confidentialité</h1>
        <p className={styles.subtitle}>Protection de vos données personnelles</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Collecte des données</h2>
          <p className={styles.sectionText}>
            Le Ty Coco s'engage à respecter la vie privée de ses utilisateurs et à protéger les données à caractère personnel qui lui sont transmises conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Cookies</h2>
          <p className={styles.sectionText}>
            Ce site utilise uniquement des cookies strictement nécessaires au bon fonctionnement technique et à l'ergonomie de la navigation. Aucun cookie de suivi publicitaire tiers n'est déposé sans votre accord.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Vos droits</h2>
          <p className={styles.sectionText}>
            Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant l'ensemble de vos données personnelles.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
