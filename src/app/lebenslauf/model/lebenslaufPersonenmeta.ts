/**
 * Metadaten zur Person
 */
export interface LebenslaufPersonenmeta {
  name: {
    vorname: string;
    zweitname?: string;
    nachname: string;
  };
  geboren: {
    date: Date;
    ort: {
      stadt: string;
      land: 'Deutschland';
    };
  };
  staatsangehoerigkeit: 'deutsch';
  familienstand:
    | 'ledig'
    | 'verheiratet'
    | 'verwitwet'
    | 'geschieden'
    | 'eingetragene Lebenspartnerschaft';
}
