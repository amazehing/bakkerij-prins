// foto: zet je eigen foto's in /public/fotos/ en vul het pad in, bijv. 'fotos/broodje-kip.jpg'
export interface Item { naam: string; prijs: number; foto?: string }
export interface Categorie { id: string; titel: string; emoji: string; items: Item[] }
const i = (naam: string, prijs: number, foto?: string): Item => ({ naam, prijs, foto });
export const MENU: Categorie[] = [
 { id: 'broodjes', titel: 'Broodjes', emoji: '🥙', items: [i('Broodje Kip',7),i('Broodje Kalfs',7),i('Broodje Kaas',4),i('Broodje Falafel',7),i('Broodje Kaas & Sucuk',6),i('Broodje Kaas & Kip',8.5),i('Broodje Kaas & Kalfs',8.5)] },
 { id: 'wraps', titel: 'Wraps', emoji: '🌯', items: [i('Wrap Kip',7.5),i('Wrap Kalfs',7.5),i('Wrap Kaas & Kip',9),i('Wrap Kaas & Kalfs',9),i('Wrap Falafel',7.5),i('Wrap Kaas',4.5),i('Wrap Prins V.I.P.',10)] },
 { id: 'kapsalon', titel: 'Kapsalon', emoji: '🍟', items: [i('Kapsalon Groot Kalfs',10),i('Kapsalon Klein Kalfs',8),i('Kapsalon Groot Kip',10),i('Kapsalon Klein Kip',8),i('Kapsalon Vegetarisch',8),i('Kapsalon Falafel',10)] },
 { id: 'pizza', titel: "Turkse Pizza's", emoji: '🍕', items: [i('Turkse Pizza',4),i('Turkse Pizza Kip',8),i('Turkse Pizza Kalfs',8),i('Turkse Pizza Kaas',5.5),i('Turkse Pizza Patat',5.5),i('Turkse Pizza Kaas & Kip',9.5),i('Turkse Pizza Kaas & Kalfs',9.5),i('Turkse Pizza Kaas & Patat',7),i('Turkse Pizza Prins V.I.P.',11)] },
 { id: 'vlees', titel: 'Vlees', emoji: '🍖', items: [i('Groot Kalfs',18),i('Groot Kip',18),i('Klein Kip',10),i('Klein Kalfs',10)] },
 { id: 'snacks', titel: 'Snacks', emoji: '🍗', items: [i('Kipnuggets 6 st.',6),i('Kipnuggets 9 st.',7.5),i('Kipnuggets 12 st.',9)] },
 { id: 'schotels', titel: 'Schotels', emoji: '🍽️', items: [i('Schotel Kip',17.5),i('Schotel Kalfs',17.5),i('Schotel Falafel',17.5)] },
 { id: 'patat', titel: 'Patat', emoji: '🍟', items: [i('Patat Klein',4.5),i('Patat Normaal',5),i('Patat Groot',5.5)] },
 { id: 'soep', titel: 'Soep', emoji: '🍲', items: [i('Linzensoep',6)] },
];
