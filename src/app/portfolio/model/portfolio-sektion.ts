import { PortfolioImage } from './portfolio-image';

interface PortfolioSektionColorBackground {
  type: 'color';
  color: `#${string}`;
}

interface PortfolioSektionImageBackground {
  type: 'image';
  image: PortfolioImage;
}

interface PortfolioSektionStyleclassBackground {
  type: 'class';
  class: `bg-${string}`;
}

type PortfolioSektionBackground =
  | PortfolioSektionColorBackground
  | PortfolioSektionImageBackground
  | PortfolioSektionStyleclassBackground;

interface PortfolioSektionBase {
  domId: `sektion-${string}`;
  background: PortfolioSektionBackground;
}

export interface PortfolioHeadlineSektion extends PortfolioSektionBase {
  sektionsart: 'titel';
  titel: string;
  subtitle?: string;
}

interface TextMitBild {
  ueberschrift: string;
  text: string;
  grafik: PortfolioImage;
}

export interface PortfolioTexteMitBildernSektion extends PortfolioSektionBase {
  sektionsart: 'texte-mit-bildern';
  head?: {
    titel: string;
    text?: string;
  };
  textBildKombinationen: ReadonlyArray<TextMitBild>;
}

export type PortfolioSektion =
  | PortfolioHeadlineSektion
  | PortfolioTexteMitBildernSektion;
