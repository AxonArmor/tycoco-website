import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { site, legalNotices } from '@/config/site'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Mentions légales',
  description: `Mentions légales du site ${site.name}, bar-tabac à ${site.city} : éditeur, hébergeur et informations réglementaires.`,
  alternates: { canonical: '/mentions-legales' },
  robots: { index: true, follow: true },
}

export default function MentionsLegalesPage() {
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

        <h1 className={styles.title}>Mentions légales</h1>
        <p className={styles.subtitle}>
          Informations publiées en application de l&rsquo;article 6 III de la loi
          n° 2004-575 du 21 juin 2004 pour la confiance dans l&rsquo;économie
          numérique.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Éditeur du site</h2>
          <p className={styles.sectionText}>
            Le présent site est édité par l&rsquo;exploitant du fonds de
            commerce « {site.editor.tradeName} ».
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Exploitant :</strong> {site.editor.name}
            </li>
            <li>
              <strong>Forme juridique :</strong> {site.editor.legalForm}
            </li>
            <li>
              <strong>Nom commercial :</strong> {site.editor.tradeName}
            </li>
            <li>
              <strong>Activité :</strong> {site.editor.activity}
            </li>
            <li>
              <strong>Adresse de l&rsquo;établissement :</strong>{' '}
              {site.address.street}, {site.address.postalCode}{' '}
              {site.address.city}, {site.address.country}
            </li>
            <li>
              <strong>Téléphone :</strong>{' '}
              <a href={`tel:${site.phone.href}`}>{site.phone.display}</a>
            </li>
            <li>
              <strong>Courriel :</strong>{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <strong>SIREN :</strong> {site.editor.siren}
            </li>
            <li>
              <strong>SIRET :</strong> {site.editor.siret}
            </li>
            {site.editor.rcs && (
              <li>
                <strong>Immatriculation :</strong> {site.editor.rcs}
              </li>
            )}
            {site.editor.vat && (
              <li>
                <strong>TVA intracommunautaire :</strong> {site.editor.vat}
              </li>
            )}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Directeur de la publication</h2>
          <p className={styles.sectionText}>
            {site.editor.name}, en qualité d&rsquo;exploitant de
            l&rsquo;établissement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Hébergeur</h2>
          <p className={styles.sectionText}>
            Le site est hébergé par&nbsp;:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>{site.host.name}</strong>
            </li>
            <li>{site.host.address}</li>
            <li>{site.host.rcs}</li>
            <li>
              <strong>Téléphone :</strong> {site.host.phone}
            </li>
            <li>
              <a href={site.host.website} target="_blank" rel="noreferrer">
                {site.host.website}
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Conception du site</h2>
          <p className={styles.sectionText}>
            Conception et réalisation : <Link className="link" href="https://axon-armor.fr" target='_blank'>Site réalisé par {site.builder.brand}</Link> —{' '}
            {site.builder.name}, {site.builder.legalForm}, SIREN{' '}
            {site.builder.siren}.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Propriété intellectuelle</h2>
          <p className={styles.sectionText}>
            Les textes, photographies, éléments graphiques et le logo présents
            sur ce site sont protégés par le droit d&rsquo;auteur. Toute
            reproduction ou représentation, totale ou partielle, sans
            autorisation écrite préalable de l&rsquo;éditeur est interdite.
          </p>
          <p className={styles.sectionText}>
            Les marques et logos des partenaires cités (PMU, Française des Jeux)
            appartiennent à leurs titulaires respectifs et sont mentionnés à
            titre d&rsquo;information sur les services disponibles dans
            l&rsquo;établissement.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Responsabilité</h2>
          <p className={styles.sectionText}>
            Les informations publiées sur ce site sont fournies à titre
            indicatif. Les horaires et les services proposés sont susceptibles
            d&rsquo;être modifiés, notamment les jours fériés. Pour toute
            information à jour, il est recommandé de contacter directement
            l&rsquo;établissement par téléphone.
          </p>
          <p className={styles.sectionText}>
            Ce site peut renvoyer vers des sites tiers. L&rsquo;éditeur
            n&rsquo;exerce aucun contrôle sur leur contenu et ne saurait en être
            tenu responsable.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Données personnelles</h2>
          <p className={styles.sectionText}>
            Ce site ne comporte ni formulaire, ni compte utilisateur, ni outil de
            mesure d&rsquo;audience. Le détail des traitements est décrit dans
            la{' '}
            <Link href="/confidentialite">politique de confidentialité</Link>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>8. Mentions réglementaires</h2>
          <p className={styles.sectionText}>
            <strong>Jeux d&rsquo;argent et de hasard.</strong>{' '}
            {legalNotices.gambling} Les jeux d&rsquo;argent et de hasard sont
            interdits aux mineurs (article L. 320-8 du code de la sécurité
            intérieure).
          </p>
          <p className={styles.sectionText}>
            <strong>Alcool.</strong> {legalNotices.alcohol} La vente
            d&rsquo;alcool à des mineurs de moins de 18 ans est interdite
            (article L. 3342-1 du code de la santé publique).
          </p>
          <p className={styles.sectionText}>
            <strong>Tabac.</strong> La vente de tabac aux mineurs de moins de 18
            ans est interdite (article L. 3512-12 du code de la santé publique).
            Conformément aux articles L. 3512-4 et L. 3513-4 du même code, ce
            site ne comporte aucune publicité ni propagande, directe ou
            indirecte, en faveur du tabac ou des produits de vapotage&nbsp;: la
            mention de l&rsquo;activité de débit de tabac y est purement
            informative.
          </p>
        </section>

        {site.mediator.name && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              9. Médiation de la consommation
            </h2>
            <p className={styles.sectionText}>
              Conformément à l&rsquo;article L. 612-1 du code de la
              consommation, tout consommateur a le droit de recourir
              gratuitement à un médiateur de la consommation en vue de la
              résolution amiable d&rsquo;un litige, après avoir tenté de le
              résoudre directement auprès de l&rsquo;établissement.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Médiateur :</strong> {site.mediator.name}
              </li>
              {site.mediator.address && <li>{site.mediator.address}</li>}
              {site.mediator.website && (
                <li>
                  <a
                    href={site.mediator.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {site.mediator.website}
                  </a>
                </li>
              )}
            </ul>
          </section>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {site.mediator.name ? '10.' : '9.'} Droit applicable
          </h2>
          <p className={styles.sectionText}>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, et à défaut de résolution amiable, les tribunaux
            français sont seuls compétents.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
