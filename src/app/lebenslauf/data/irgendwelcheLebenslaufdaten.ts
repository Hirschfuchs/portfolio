import { Lebenslaufdaten } from '../model/lebenslaufdaten';
import { LebenslaufKontakt } from '../model/lebenslaufKontakt';
import { LebenslaufPersonenmeta } from '../model/lebenslaufPersonenmeta';
import { LebenslaufSkill } from '../model/lebenslaufSkill';
import { LebenslaufStationBildung } from '../model/lebenslaufStationBildung';
import { LebenslaufStationKarriere } from '../model/lebenslaufStationKarriere';

/**
 * Diese Datei gibt irgendwelche Lebenslaufdaten vor, um Doxxing zu verhindern.
 * Die Daten sind bis auf die Skills von Bono unabhängig und frei erfunden.
 */

const meta: LebenslaufPersonenmeta = {
  name: {
    vorname: 'Max',
    zweitname: 'Emilian',
    nachname: 'Mustermann',
  },
  geboren: {
    date: new Date('2000-01-01'),
    ort: {
      stadt: 'Stuttgart',
      land: 'Deutschland',
    },
  },
  staatsangehoerigkeit: 'deutsch',
  familienstand: 'ledig',
};

const kontakt: LebenslaufKontakt = {
  adresse: {
    strasse: 'Bonolzhof',
    hausnummer: '3',
    ort: 'Frankenhardt',
    plz: '74586',
  },
  telefon: {
    mobil: '+49 123 4567890',
  },
};

const sprachen: ReadonlyArray<LebenslaufSkill> = [
  { bezeichnung: 'Deutsch', level: '5' },
  { bezeichnung: 'Englisch', level: '4' },
  { bezeichnung: 'Spanisch', level: '2.5' },
];

const weitereInfos = {
  weitereBoni: ['Führerschein Klasse C'],
  hobbys: ['Shopping', 'Zeitung lesen'],
};

const bildungJetzt: LebenslaufStationBildung = {
  station: {
    bildungseinrichtung: 'Online-Kurs',
    beschreibung: 'Onlinekurs zur Züchtung von Wachteln',
  },
  abschluss: {
    abgeschlossen: false,
    bisherigeDurchschnittsnote: '4,7',
    zeitraum: 'seit 01/2024',
    abschlusstitel: 'Wachtelzüchter',
  },
};

const bildungDamals: LebenslaufStationBildung = {
  station: {
    bildungseinrichtung: 'Baumschule',
    beschreibung:
      'Anzucht eines starken Stamms, Verbesserung der Wurzelstrukturen',
  },
  abschluss: {
    abgeschlossen: true,
    abschlussnote: '1,1',
    abschlusstitel: 'Bachelor „Photosynthese“',
    titel: 'B.Sc.',
    zeitraum: '05/2000–12/2023',
  },
};

const karriereIrgendwas1: LebenslaufStationKarriere = {
  arbeitgeber: 'Ein Arbeitgeber',
  jobtitel: 'Arbeiten an verschiedenen Arbeitstätigkeiten an der Arbeit',
  zeitraum: 'seit 01/2010',
  taetigkeiten: ['Abwarten', 'Tee trinken'],
};

const karriereIrgendwas2: LebenslaufStationKarriere = {
  arbeitgeber: 'Anderer Arbeitgeber',
  jobtitel: 'Arbeiten an noch mehr Arbeitstätigkeiten an der Arbeit',
  zeitraum: 'seit 11/2024',
  taetigkeiten: ['Hobeln', 'Späne aufsammeln'],
};

export const irgendwelcheLebenslaufdaten: Lebenslaufdaten = {
  meta,
  kontakt,
  sprachen,
  weitereInfos,
  bildung: [bildungJetzt, bildungDamals],
  karriere: [karriereIrgendwas1, karriereIrgendwas2],
  hardskills: [
    { bezeichnung: 'Angular', level: '4.5' },
    { bezeichnung: 'Asciidoc & JasperReports', level: '4.5' },
    { bezeichnung: 'Playwright, JUnit & Jasmine', level: '4' },
    { bezeichnung: 'Java & Springboot', level: '2' },
  ],
  softskills: [
    'Führungs-/Organisationsfähigkeiten',
    'Kreativität',
    'Qualitätsbestreben',
    'Selbstverwirklichung',
    'Kommunikationsfähigkeit',
  ],
};
