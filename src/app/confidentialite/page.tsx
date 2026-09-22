import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { site } from '@/config/site'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Politique de confidentialité',
  description: `Traitement des données personnelles sur le site ${site.name} : ce site ne dépose aucun cookie de mesure d'audience ni de publicité.`,
  alternates: { canonical: '/confidentialite' },
  robots: { index: true, follow: true },
}

export default function ConfidentialitePage() {
  return (
    <>
      <a href="#contenu" className="skipLink">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className={styles.legalContainer}>
        <Link href="/" className={styles.backLink}>
          ← Retour à l&rsquo;accueil
        </Link>

        <h1 className={styles.title}>Politique de confidentialité</h1>
        <p className={styles.subtitle}>
          Comment vos données sont traitées lorsque vous consultez ce site.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. En résumé</h2>
          <p className={styles.sectionText}>
            Ce site est un site vitrine. Il ne contient aucun formulaire, aucun
            compte utilisateur, aucun outil de mesure d&rsquo;audience et aucune
            régie publicitaire. Aucune donnée n&rsquo;est collectée à des fins
            commerciales et aucune donnée n&rsquo;est revendue.
          </p>
          <p className={styles.sectionText}>
            Les polices de caractères sont hébergées sur le même serveur que le
            site : leur affichage n&rsquo;entraîne aucune requête vers un
            service tiers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Responsable du traitement</h2>
          <p className={styles.sectionText}>
            {site.editor.name}, {site.editor.legalForm}, exploitant le fonds de
            commerce « {site.editor.tradeName} », {site.address.street},{' '}
            {site.address.postalCode} {site.address.city}.
          </p>
          <p className={styles.sectionText}>
            Contact : <a href={`mailto:${site.email}`}>{site.email}</a> ou{' '}
            <a href={`tel:${site.phone.href}`}>{site.phone.display}</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Données traitées</h2>
          <p className={styles.sectionText}>
            La seule donnée traitée est celle inscrite automatiquement dans les
            journaux de connexion du serveur par l&rsquo;hébergeur :
          </p>
          <ul className={styles.list}>
            <li>adresse IP&nbsp;;</li>
            <li>date et heure de la requête&nbsp;;</li>
            <li>page demandée, navigateur et système d&rsquo;exploitation.</li>
          </ul>
          <p className={styles.sectionText}>
            <strong>Finalité :</strong> assurer le fonctionnement technique et la
            sécurité du site.{' '}
            <strong>Base légale :</strong> intérêt légitime de l&rsquo;éditeur à
            maintenir un service disponible et sécurisé (article 6.1.f du
            RGPD).{' '}
            <strong>Durée de conservation :</strong> ces journaux sont conservés
            par l&rsquo;hébergeur pour une durée n&rsquo;excédant pas douze
            mois.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Destinataires et hébergement</h2>
          <p className={styles.sectionText}>
            Les données sont traitées par {site.host.name} ({site.host.address}),
            hébergeur du site, agissant en qualité de sous-traitant au sens du
            RGPD. Les données restent hébergées au sein de l&rsquo;Union
            européenne. Aucune donnée n&rsquo;est transmise à un autre tiers.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Cookies</h2>
          <p className={styles.sectionText}>
            Ce site ne dépose aucun cookie de mesure d&rsquo;audience, de
            personnalisation ou de publicité. Aucun consentement n&rsquo;est
            donc requis et aucune bannière n&rsquo;est affichée.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Liens vers des sites tiers</h2>
          <p className={styles.sectionText}>
            La page de contact propose un lien vers Google Maps. Si vous
            l&rsquo;ouvrez, vous quittez ce site et les conditions de Google
            s&rsquo;appliquent alors à votre navigation. Aucun contenu Google
            n&rsquo;est chargé tant que vous ne cliquez pas sur ce lien.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Vos droits</h2>
          <p className={styles.sectionText}>
            Vous disposez d&rsquo;un droit d&rsquo;accès, de rectification,
            d&rsquo;effacement, de limitation et d&rsquo;opposition sur les
            données vous concernant. Ces droits s&rsquo;exercent auprès du
            responsable du traitement, aux coordonnées indiquées à
            l&rsquo;article 2.
          </p>
          <p className={styles.sectionText}>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont
            pas respectés, vous pouvez adresser une réclamation à la CNIL —
            3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{' '}
            <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
              www.cnil.fr
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Modification</h2>
          <p className={styles.sectionText}>
            Cette politique peut être mise à jour pour tenir compte
            d&rsquo;évolutions du site ou de la réglementation. Voir également
            les <Link href="/mentions-legales">mentions légales</Link>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
