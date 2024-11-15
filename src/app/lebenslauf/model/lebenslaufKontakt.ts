/**
 * Kontaktdaten einer Person
 */
export interface LebenslaufKontakt {
  adresse: {
    strasse: string;
    hausnummer: string;
    ort: string;
    ortsteil?: string;
    plz: string;
  };
  mail?: string;
  telefon?: {
    mobil?: string;
    festnetz?: string;
  };
}
