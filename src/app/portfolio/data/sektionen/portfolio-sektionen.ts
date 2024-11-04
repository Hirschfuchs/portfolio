import { PortfolioSektion } from '../../model/portfolio-sektion';
import { sektionCraftsmanship } from './sektion-craftsmanship';
import { sektionExtraMeile } from './sektion-extra-meile';
import { sektionFancy } from './sektion-fancy';
import { sektionIntro } from './sektion-intro';

export const portfolioSektionen: ReadonlyArray<PortfolioSektion> = [
  sektionIntro,
  sektionCraftsmanship,
  sektionFancy,
  sektionExtraMeile,
];
