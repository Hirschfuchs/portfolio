import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig, LightboxModule } from 'ngx-lightbox';
import { PortfolioTexteMitBildernSektion } from '../../model/portfolio-sektion';

@Component({
  selector: 'app-portfolio-texte-mit-bildern',
  standalone: true,
  imports: [NgOptimizedImage, LightboxModule],
  templateUrl: './portfolio-texte-mit-bildern.component.html',
  styleUrl: './portfolio-texte-mit-bildern.component.scss',
})
export class PortfolioTexteMitBildernComponent {
  public sektion: InputSignal<PortfolioTexteMitBildernSektion> =
    input.required<PortfolioTexteMitBildernSektion>();

  // Array, da von Library mutable Array verlangt wird
  private readonly grafiken: Signal<Array<IAlbum>> = computed(() =>
    this.sektion().textBildKombinationen.map((textBildKombination) => {
      const grafik = textBildKombination.grafik;
      const grafikSource = this.resolveImagePath(grafik.src);

      return {
        src: grafikSource,
        thumb: grafikSource,
        caption: grafik.beschreibungstext,
      };
    }),
  );

  constructor(
    private readonly lightbox: Lightbox,
    private readonly lightboxConfig: LightboxConfig,
  ) {
    lightboxConfig.centerVertically = true;
  }

  openInLightbox(grafikNr: number) {
    this.lightbox.open(this.grafiken(), grafikNr);
  }

  protected resolveImagePath(path: string) {
    return `data/assets/${path}`;
  }
}
