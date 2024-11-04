import { PortfolioTexteMitBildernSektion } from '../../model/portfolio-sektion';
import { aufraumaktion } from '../images/aufraumaktion';
import { platzhalterBild } from '../images/platzhalter';

export const sektionExtraMeile: PortfolioTexteMitBildernSektion = {
  sektionsart: 'texte-mit-bildern',
  domId: 'sektion-extra-meile',
  background: { type: 'class', class: 'bg-weiss' },
  head: {
    titel: 'Die extra Meile 🏃',
    text:
      'Mit mir kommt nicht nur ein kreativer und qualitätsbewusster Softwareentwickler ins Team. Auch rundherum engagiere ich mich gerne in verschiedensten Kompetenzteams und packe direkt an, wenn ich Verbesserungspotenzial oder Schwachstellen sehe.\n\n' +
      'Ich freue mich, wenn ich für mich und andere die Arbeit erleichtern und meinen kreativen Beitrag ins Große Ganze einbringen kann.',
  },
  textBildKombinationen: [
    {
      ueberschrift: 'Moderation',
      text:
        'Noch in meiner Studentenzeit — mein Arbeitsvertrag hatte noch nicht einmal begonnen — stellte ich das Thema meiner Bachelorarbeit vor 200 Mitarbeitern vor.\n\n' +
        'Und schon kurz nach Beginn meiner Arbeitstätigkeit moderierte ich teaminterne Sprinttermine, wie das Daily, aber auch das Review vor dem Kunden.\n\n' +
        'Und daran hat sich auch weiter nichts geändert…',
      grafik: platzhalterBild,
    },
    {
      ueberschrift: 'Kompetenzteams',
      text: '… Mit meinem Beitrag im zugehörigen, firmeninternen Kompetenzteam übernahm ich über mehrere Monate die Moderation des Mitarbeitermeetings vor der gesamten Belegschaft, inklusive der Vorbereitung der Präsentationsfolien und anschließender Retrospektive.',
      grafik: platzhalterBild,
    },
    {
      ueberschrift: 'Schulungen & Kolloquien',
      text:
        'Ich bilde mich immer gerne fort und lerne neue Themen kennen. Konferenzen und Schulungen nehme ich daher sehr gerne wahr.\n\n' +
        'Aber auch mein Wissen gebe ich gerne an andere weiter. So halte ich gerne Kolloquien, um anderen Themen, wie Styling in modernen Frameworks oder Accessibility, nahzubringen.',
      grafik: platzhalterBild,
    },
    {
      ueberschrift: 'Ordnung muss sein',
      text:
        //TODO
        '',
      grafik: aufraumaktion,
    },
  ],
};
