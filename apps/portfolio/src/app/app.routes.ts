import { Route } from '@angular/router';
import { LebenslaufComponent } from '../lebenslauf/components/lebenslauf/lebenslauf.component';
import { PortfolioComponent } from '../portfolio/components/portfolio/portfolio.component';

export const appRoutes: Route[] = [
  { path: '', component: PortfolioComponent },
  {
    path: 'cv',
    component: LebenslaufComponent,
  },
];
