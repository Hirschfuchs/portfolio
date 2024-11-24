import { PortfolioImage } from '../../portfolio/model/portfolio-image';

/**
 * Metadaten zur Person
 */
export interface LebenslaufPersonenmeta {
  name: {
    vorname: string;
    zweitname?: string;
    nachname: string;
  };
  bild: PortfolioImage;
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
