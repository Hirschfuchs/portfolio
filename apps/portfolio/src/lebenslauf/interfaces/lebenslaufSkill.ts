/**
 * Allgemeine Abstraktion eines sprachlichen oder handwerklichen Skills
 */
export interface LebenslaufSkill {
  bezeichnung: string;
  level:
    | '0'
    | '0.5'
    | '1'
    | '1.5'
    | '2'
    | '2.5'
    | '3'
    | '3.5'
    | '4'
    | '4.5'
    | '5';
}
