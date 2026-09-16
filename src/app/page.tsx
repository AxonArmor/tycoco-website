import Header from '@/components/Header';
import HeroAccueil from '@/components/HeroAccueil';
import BarSection from '@/components/BarSection';
import ServicesSection from '@/components/ServicesSection';
import EspaceJeuxSection from '@/components/EspaceJeuxSection';
import HorairesContactSection from '@/components/HorairesContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroAccueil />
      <BarSection />
      <ServicesSection />
      <EspaceJeuxSection />
      <HorairesContactSection />
      <Footer />
    </main>
  );
}
