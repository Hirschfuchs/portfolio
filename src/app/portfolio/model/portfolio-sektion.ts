interface PortfolioSektionColorBackground {
  type: 'color';
  color: `#${string}`;
}

interface PortfolioSektionImageBackground {
  type: 'image';
  imageUrl: string;
}

type PortfolioSektionBackground =
  | PortfolioSektionColorBackground
  | PortfolioSektionImageBackground;

interface PortfolioSektionBase {
  domId: `sektion-${string}`;
  background: PortfolioSektionBackground;
}

export interface PortfolioHeadlineSektion extends PortfolioSektionBase {
  sektionsart: 'titel';
  titel: string;
  subtitle?: string;
}

export type PortfolioSektion = PortfolioHeadlineSektion;
