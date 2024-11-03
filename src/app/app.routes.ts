import { Routes } from '@angular/router';
import { LebenslaufComponent } from './lebenslauf/lebenslauf.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  {
    path: 'cv',
    component: LebenslaufComponent,
  },
];
