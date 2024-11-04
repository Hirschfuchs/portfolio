import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MarkdownComponent, provideMarkdown } from 'ngx-markdown';
import { PortfolioTitelComponent } from './components/portfolio-titel/portfolio-titel.component';
import { portfolioSektionen } from './data/sektionen/portfolio-sektionen';
import { PortfolioSektion } from './model/portfolio-sektion';

/**
 * Die Portfoliokomponente hat die Aufgabe, eine schicke, moderne und grafische
 * Darstellung meiner Fähigkeiten und Qualitäten bereitzustellen.
 */
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MarkdownComponent, NgOptimizedImage, PortfolioTitelComponent],
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

    if (background.type === 'class') {
      return background.class;
    }

    return '';
  }
}
