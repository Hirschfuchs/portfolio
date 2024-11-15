import { LebenslaufKontakt } from './lebenslaufKontakt';
import { LebenslaufPersonenmeta } from './lebenslaufPersonenmeta';
import { LebenslaufSkill } from './lebenslaufSkill';
import { LebenslaufSonstiges } from './lebenslaufSonstiges';
import { LebenslaufStationBildung } from './lebenslaufStationBildung';
import { LebenslaufStationKarriere } from './lebenslaufStationKarriere';

/**
 * Zusammengetragene Daten zur Befüllung des Lebenslaufs
 */
export interface Lebenslaufdaten {
  meta: LebenslaufPersonenmeta;
  kontakt: LebenslaufKontakt;
  sprachen: ReadonlyArray<LebenslaufSkill>;
  weitereInfos: LebenslaufSonstiges;

  karriere: ReadonlyArray<LebenslaufStationKarriere>;
  bildung: ReadonlyArray<LebenslaufStationBildung>;

  hardskills: ReadonlyArray<LebenslaufSkill>;
  softskills: ReadonlyArray<string>;
}
