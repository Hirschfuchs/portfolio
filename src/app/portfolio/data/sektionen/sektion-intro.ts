import { PortfolioSektion } from '../../model/portfolio-sektion';
import { ideBackground } from '../images/ide-background';

export const sektionIntro: PortfolioSektion = {
  sektionsart: 'titel',
  domId: 'sektion-intro',
  background: { type: 'image', image: ideBackground, bgClass: 'bg-dunkel' },
  titel: 'Bono Fox',
  subtitle: 'Softwareentwicklung ist mein Handwerk.',
};
