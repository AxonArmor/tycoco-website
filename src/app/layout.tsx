import type { Metadata } from 'next'
import { Inter, Young_Serif } from 'next/font/google'
import { site, fullAddress } from '@/config/site'
import './globals.css'

// Polices auto-hébergées par Next : aucune requête du navigateur vers Google,
// donc aucune adresse IP transmise à un tiers.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const youngSerif = Young_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.activity} à ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description: `Bar, tabac, presse, PMU et Française des Jeux à ${site.city} (29). ${fullAddress}. Billard et fléchettes sur place.`,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: site.name,
    title: `${site.name} — ${site.activity} à ${site.city}`,
    description: `Bar, tabac, presse, PMU et Française des Jeux à ${site.city} (29).`,
    url: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${youngSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
