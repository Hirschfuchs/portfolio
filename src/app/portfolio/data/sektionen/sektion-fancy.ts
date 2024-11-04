import { PortfolioTexteMitBildernSektion } from '../../model/portfolio-sektion';
import { featureToggles } from '../images/feature-toggles';
import { leslie } from '../images/leslie';
import { miro } from '../images/miro';
import { wunderkerze } from '../images/wunderkerze';

export const sektionFancy: PortfolioTexteMitBildernSektion = {
  sektionsart: 'texte-mit-bildern',
  domId: 'sektion-fancy',
  background: { type: 'class', class: 'bg-dunkel' },
  head: {
    titel: 'Time to get fancy ✨',
  },
  textBildKombinationen: [
    {
      ueberschrift: 'Fancyyy',
      text:
        'Neben der Arbeit muss auch Platz für ein bisschen Funkeln sein. Den Wasserhahn zumindest auf hochglanz polieren. \n\n' +
        'Einige Beispiele aus meiner bisherigen Arbeit folgen.',
      grafik: wunderkerze,
    },
    {
      ueberschrift: 'Fancy Friday',
      text:
        'Gemeinsam im Team haben wir einen Chatbot hochgezogen, der bei uns beispielsweise Testabweichungen oder neue Anforderungen meldet und uns über neue Pull Requests in Kenntnis setzt.\n\n' +
        'Und ja, man kann auch direkt mit ihm schreiben ;)',
      grafik: featureToggles,
    },
    {
      ueberschrift: 'ChatOps',
      text: 'In meiner Software kommen Herz und Kopf zusammen — mit Leidenschaft und Können entwickle ich professionelle Anwendungen.',
      grafik: leslie,
    },
    {
      ueberschrift: 'Miro',
      text:
        'Für verschiedene Aufgaben der täglichen Zusammenarbeit haben wir ein gemeinsames Miroboard genutzt, welches ich entworfen habe. Hier waren alle wichtigen Infos, wie Abwesenheiten, Tagesthemen usw. zusammengeführt.\n\n' +
        'Auf dem Board wurde vieles automatisiert, sodass beispielsweise neue Abwesenheiten in die Liste einsortiert oder die Sticky Notes wöchentlich aufgefüllt werden.',
      grafik: miro,
    },
  ],
};
