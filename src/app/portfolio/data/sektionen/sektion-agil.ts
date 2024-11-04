import { PortfolioTexteMitBildernSektion } from '../../model/portfolio-sektion';
import { platzhalterBild } from '../images/platzhalter';

export const sektionAgil: PortfolioTexteMitBildernSektion = {
  sektionsart: 'texte-mit-bildern',
  domId: 'sektion-agil-scrum',
  background: { type: 'class', class: 'bg-weiss' },
  head: {
    titel: 'Agilität & Scrum',
    text:
      'Schon während meines Bachelorstudiums eröffnete sich mir die Möglichkeit, den agilen Entwicklungsprozess in der Theorie kennenzulernen.\n\n' +
      'Doch erst in der Praxis — von außen gezwungen seinen agilen Prozess durch ein klassisches Wasserfallprinzip zu ersetzen — wurde mir so wirklich klar, dass ein agiles Vorgehen, eine direkte Zusammenarbeit mit dem Kunden und mit Fachlern in kurzen Abständen keine Selbstverständlichkeit ist.',
  },
  textBildKombinationen: [
    {
      ueberschrift: 'Das agile Manifest',
      text: 'Bevor das Projekt überhaupt losgeht, bevor auch nur eine Zeile Code geschrieben ist, jede Feinheit bis ins letzte Detail durchgeplant zu haben, was den Fortschritt zwar messbarer macht und einfacher in eine traditionelle Rollenverteilung einzubauen ist, geht man einen anderen Weg. Denn klassisches Projektmanagement ist unflexibel.',
      grafik: platzhalterBild,
    },
    {
      ueberschrift: 'Wasserfälle und Stolperfallen',
      text:
        'Natürlich kann ich versuchen, vorab alle Randfälle zu betrachten, alle Details auszuarbeiten. Aber irgendetwas wird fehlen. Möchte ich das Produkt erweitern, beginnt ein erneuter, langer und bürokratischer Änderungsprozess, in dem fachliche Anforderungen geklärt werden müssen.\n\n' +
        'Und wie viel Zeit ging in die Ausarbeitung, in den Vertragsschluss und in die Dokumentation der Fachinhalte?',
      grafik: platzhalterBild,
    },
    // TODO
  ],
};
