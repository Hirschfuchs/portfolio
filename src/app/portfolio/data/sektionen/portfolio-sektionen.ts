import { PortfolioSektion } from '../../model/portfolio-sektion';
import { sektionAgil } from './sektion-agil';
import { sektionCraftsmanship } from './sektion-craftsmanship';
import { sektionExtraMeile } from './sektion-extra-meile';
import { sektionFancy } from './sektion-fancy';
import { sektionIntro } from './sektion-intro';
import { sektionOrganisation } from './sektion-organisation';

export const portfolioSektionen: ReadonlyArray<PortfolioSektion> = [
  sektionIntro,
  sektionCraftsmanship,
  sektionFancy,
  sektionExtraMeile,
  sektionAgil,
  sektionOrganisation,
];
