import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Mentions Légales - Le Ty Coco',
  description: 'Mentions légales et informations éditoriales du site Le Ty Coco à Plougourvest.',
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <Header />
      <div className={styles.legalContainer}>
        <Link href="/" className={styles.backLink}>
          ← Retour à l'accueil
        </Link>
        
        <h1 className={styles.title}>Mentions Légales</h1>
        <p className={styles.subtitle}>En vigueur au {new Date().toLocaleDateString('fr-FR')}</p>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Éditeur du site</h2>
          <p className={styles.sectionText}>
            Le présent site est édité par l'établissement <strong>Le Ty Coco</strong>, Bar-Tabac PMU.
          </p>
          <ul className={styles.list}>
            <li><strong>Adresse :</strong> Centre Bourg, 29400 Plougourvest, France</li>
            <li><strong>Responsable de la publication :</strong> Direction Le Ty Coco</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Hébergement</h2>
          <p className={styles.sectionText}>
            Le site est hébergé conformément aux normes de sécurité en vigueur.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Propriété intellectuelle</h2>
          <p className={styles.sectionText}>
            L'ensemble des contenus (textes, images, éléments graphiques, logo) figurant sur ce site est la propriété exclusive de Le Ty Coco ou de ses partenaires. Toute reproduction sans autorisation préalable est interdite.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Prévention et jeux de hasard (PMU & FDJ)</h2>
          <p className={styles.sectionText}>
            Les jeux d'argent et de hasard sont interdits aux mineurs. Jouer comporte des risques : isolement, endettement. Pour être aidé, vous pouvez contacter Joueurs Info Service au 09 74 75 13 13 (appel non surtaxé).
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
