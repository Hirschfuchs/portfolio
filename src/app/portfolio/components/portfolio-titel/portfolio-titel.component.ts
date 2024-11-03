import { Component, computed, input, InputSignal } from '@angular/core';
import { PortfolioSektion } from '../../model/portfolio-sektion';

@Component({
  selector: 'app-portfolio-titel',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-titel.component.html',
  styleUrl: './portfolio-titel.component.scss',
})
export class PortfolioTitelComponent {
  public sektion: InputSignal<PortfolioSektion> =
    input.required<PortfolioSektion>();

  protected readonly background = computed(() => {
    const background = this.sektion().background;

    if (background.type === 'image') {
      return `url("/data/assets/${background.image.src}")`;
    }

    return background.color;
  });
}
