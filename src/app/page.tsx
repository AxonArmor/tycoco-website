import Header from '@/components/Header';
import HeroAccueil from '@/components/HeroAccueil';
import BarSection from '@/components/BarSection';
import ServicesSection from '@/components/ServicesSection';
import EspaceJeuxSection from '@/components/EspaceJeuxSection';
import HorairesContactSection from '@/components/HorairesContactSection';
import Footer from '@/components/Footer';
import { site, isClosedDay } from '@/config/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: site.name,
  description: `Bar, tabac, presse et Française des Jeux à ${site.city} (Finistère).`,
  url: site.url,
  telephone: site.phone.href,
  icons: {
    icon: '/logoTyCoco.svg'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: 'FR',
  },
  openingHoursSpecification: site.schedule
    .filter((day) => !isClosedDay(day))
    .flatMap((day) =>
      day.ranges.map(([opens, closes]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${day.iso}`,
        opens,
        closes,
      })),
    ),
  ...(site.google.maps ? { hasMap: site.google.maps } : {}),
};

export default function Home() {
  return (
    <main>
      
      <a href="#accueil" className="skipLink">Aller au contenu</a>
      <Header />
      <HeroAccueil />
      <BarSection />
      <ServicesSection />
      <EspaceJeuxSection />
      <HorairesContactSection />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
