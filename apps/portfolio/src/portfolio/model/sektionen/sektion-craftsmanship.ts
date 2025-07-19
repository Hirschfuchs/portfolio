import { PortfolioTexteMitBildernSektion } from '../../model/portfolio-sektion';
import { metallguss } from '../images/metallguss';
import { schmied } from '../images/schmied';
import { tastatur } from '../images/tastatur';

export const sektionCraftsmanship: PortfolioTexteMitBildernSektion = {
  sektionsart: 'texte-mit-bildern',
  domId: 'sektion-craftsmanship',
  background: { type: 'class', class: 'bg-dunkel' },
  textBildKombinationen: [
    {
      ueberschrift: 'Software Craftsmanship',
      text: 'Das Konzept des „Software Craftsmanship“ (zu Deutsch Handwerkskunst) ist eine Bewegung, die die Entwicklung von Software mit klassischem Handwerk, wie etwa dem traditionellen Backen von Brot oder dem Gießen von Metall, vergleicht.',
      grafik: metallguss,
    },
    {
      ueberschrift: 'Craftsmanship over Execution',
      text: 'Hierin findet sich der Unterschied zwischen dem Programmieranfänger, bei dem die entwickelte Software Mittel zum Zweck ist, egal wie gut sie funktioniert oder wie wartbar sie ist und dem Profi, der sein Handwerk beherrscht und der viel Kreativität und Können in seinem Produkt verwirklicht.',
      grafik: schmied,
    },
    {
      ueberschrift: 'Herz & Kopf',
      text: 'In meiner Software kommen Herz und Kopf zusammen — mit Leidenschaft und Können entwickle ich professionelle Anwendungen.',
      grafik: tastatur,
    },
  ],
};
