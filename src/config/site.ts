/** Une plage d'ouverture : heure d'ouverture, heure de fermeture. */
export type OpeningRange = readonly [open: string, close: string]

export type ScheduleDay = {
  /** Libellé affiché, en français. */
  readonly day: string
  /** Jour au format Schema.org (Monday, Tuesday…). */
  readonly iso: string
  /** Plages d'ouverture ; tableau vide = jour fermé. */
  readonly ranges: readonly OpeningRange[]
}

export const site = {
  name: 'Le Ty Coco',
  activity: 'Bar, tabac, presse et jeux',
  city: 'Plougourvest',

  url: 'https://www.le-ty-coco.fr',

  address: {
    street: '1 rue de la Fontaine',
    postalCode: '29400',
    city: 'Plougourvest',
    region: 'Finistère',
    country: 'France',
  },

  phone: {
    display: '02 98 68 57 10',
    href: '+33298685710',
  },

  email: 'letycoco29400@gmail.com',

  google: {
    maps: 'https://maps.app.goo.gl/nBQmf3HnoTjvpy2n8',
    review: '',
  },

  schedule: [
    { day: 'Lundi', iso: 'Monday', ranges: [['07:30', '19:00']] },
    { day: 'Mardi', iso: 'Tuesday', ranges: [['07:30', '19:00']] },
    { day: 'Mercredi', iso: 'Wednesday', ranges: [['07:30', '19:00']] },
    { day: 'Jeudi', iso: 'Thursday', ranges: [['07:30', '13:30']] },
    { day: 'Vendredi', iso: 'Friday', ranges: [['07:30', '20:00']] },
    { day: 'Samedi', iso: 'Saturday', ranges: [['08:00', '20:00']] },
    { day: 'Dimanche', iso: 'Sunday', ranges: [] },
  ] as ScheduleDay[],
  
  editor: {
    name: 'Corinne Levacher',
    legalForm: 'Entrepreneur individuel',
    tradeName: 'LE TY COCO',
    activity:
      "Bar, presse et jeux, auquel est annexée la gérance d’un débit de tabac",
    siren: '940 235 005',
    siret: '940 235 005 00011',
    rcs: '',

    vat: 'TVA FR26 940 235 005',
  },

  host: {
    name: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France',
    phone: '1007',
    website: 'https://www.ovhcloud.com',
    rcs: 'RCS Lille Métropole 424 761 419',
  },

  /**
   * Médiateur de la consommation.
   * Tout professionnel vendant à des consommateurs doit adhérer à un
   * dispositif de médiation et en communiquer les coordonnées
   * (art. L612-1 et L616-1 du code de la consommation).
   * À COMPLÉTER une fois l'adhésion souscrite ; laisser `name` vide masque
   * la section correspondante dans les mentions légales.
   */
  mediator: {
    name: '',
    address: '',
    website: '',
  },

  builder: {
    brand: 'Axon Armor',
    name: 'Ethan Levacher',
    legalForm: 'Entrepreneur individuel',
    siren: '109 422 824',
    website: 'https://axon-armor.fr',
  },
} as const

export const legalNotices = {
  gambling:
    'Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75 13 13 (appel non surtaxé).',
  alcohol:
    "L’abus d’alcool est dangereux pour la santé. À consommer avec modération.",
  minors:
    "La vente d’alcool, de tabac et de jeux d’argent est interdite aux mineurs de moins de 18 ans.",
} as const

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`

export function isClosedDay(day: ScheduleDay): boolean {
  return day.ranges.length === 0
}

export function formatHours(day: ScheduleDay): string {
  if (isClosedDay(day)) return 'Fermé'

  return day.ranges
    .map(([opens, closes]) => `${opens} – ${closes}`)
    .join(' et ')
}

export function openDaysSummary(): { value: string; label: string } {
  const closed = site.schedule.filter(isClosedDay)

  if (closed.length === 0) {
    return { value: '7j/7', label: 'Dimanche compris' }
  }

  const closedLabel = closed
    .map((day) => `le ${day.day.toLowerCase()}`)
    .join(' et ')

  return {
    value:
      closed.length === 1
        ? '6 / 7 jours'
        : `${site.schedule.length - closed.length}j / 7`,
    label: `Fermé ${closedLabel}`,
  }
}
