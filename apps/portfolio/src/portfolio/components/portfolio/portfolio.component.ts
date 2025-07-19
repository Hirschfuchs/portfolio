import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { PortfolioSektion } from '../../interfaces/portfolio-sektion';
import { portfolioSektionen } from '../../model/sektionen/portfolio-sektionen';
import { PortfolioTexteMitBildernComponent } from '../portfolio-texte-mit-bildern/portfolio-texte-mit-bildern.component';
import { PortfolioTitelComponent } from '../portfolio-titel/portfolio-titel.component';

/**
 * Die Portfoliokomponente hat die Aufgabe, eine schicke, moderne und grafische
 * Darstellung meiner Fähigkeiten und Qualitäten bereitzustellen.
 */
@Component({
  selector: 'app-portfolio',
  imports: [
    MarkdownComponent,
    NgOptimizedImage,
    PortfolioTitelComponent,
    PortfolioTexteMitBildernComponent,
  ],
  providers: [provideMarkdown({ loader: HttpClient })],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  protected readonly sektionen: ReadonlyArray<PortfolioSektion> =
    portfolioSektionen;

  sektionenHintergrund(sektion: PortfolioSektion) {
    const background = sektion.background;

    if (background.type === 'image') {
      return `url("/data/assets/${background.image.src}")`;
    }

    if (background.type === 'class') {
      return '';
    }

    return background.color;
  }

  sektionenHintergrundKlasse(sektion: PortfolioSektion) {
    const background = sektion.background;

    if (background.type === 'image') {
      return background.bgClass;
    }

    if (background.type === 'class') {
      return background.class;
    }

    return '';
  }
}
