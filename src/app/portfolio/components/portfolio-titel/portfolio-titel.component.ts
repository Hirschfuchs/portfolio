import { Component, input, InputSignal } from '@angular/core';
import { PortfolioHeadlineSektion } from '../../model/portfolio-sektion';

@Component({
    selector: 'app-portfolio-titel',
    imports: [],
    templateUrl: './portfolio-titel.component.html',
    styleUrl: './portfolio-titel.component.scss'
})
export class PortfolioTitelComponent {
  public sektion: InputSignal<PortfolioHeadlineSektion> =
    input.required<PortfolioHeadlineSektion>();
}
