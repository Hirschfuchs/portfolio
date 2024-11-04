import { NgOptimizedImage } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { PortfolioTexteMitBildernSektion } from '../../model/portfolio-sektion';

@Component({
  selector: 'app-portfolio-texte-mit-bildern',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './portfolio-texte-mit-bildern.component.html',
  styleUrl: './portfolio-texte-mit-bildern.component.scss',
})
export class PortfolioTexteMitBildernComponent {
  public sektion: InputSignal<PortfolioTexteMitBildernSektion> =
    input.required<PortfolioTexteMitBildernSektion>();
}
