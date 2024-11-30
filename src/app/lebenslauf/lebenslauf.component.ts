import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';
import { Split2Component } from '../split-2/split-2.component';
import { ConfigurationService } from './configuration.service';
import { irgendwelcheLebenslaufdaten } from './data/irgendwelcheLebenslaufdaten';
import { KeyValuePairComponent } from './key-value-pair/key-value-pair.component';
import { lebenslaufZertifikatTypToString } from './model/lebenslaufZertifikat';

@Component({
  selector: 'app-lebenslauf',
  imports: [
    FrameComponent,
    Split2Component,
    NgOptimizedImage,
    KeyValuePairComponent,
  ],
  templateUrl: './lebenslauf.component.html',
  styleUrl: './lebenslauf.component.scss',
})
export class LebenslaufComponent {
  protected readonly lebenslaufdaten = irgendwelcheLebenslaufdaten;

  constructor(private readonly configurationService: ConfigurationService) {}

  protected primaryColor = this.configurationService.getPrimaryColor();

  getShortName() {
    const nameData = this.lebenslaufdaten.meta.name;

    return `${nameData.vorname} ${nameData.nachname}`;
  }

  getGeburtsdaten() {
    const geburtsdaten = this.lebenslaufdaten.meta.geboren;

    return `${geburtsdaten.date.toLocaleDateString()} / ${geburtsdaten.ort.stadt}`;
  }

  getAdressdaten() {
    const adressdaten = this.lebenslaufdaten.kontakt.adresse;

    let ortsteil = '';
    if (adressdaten.ortsteil !== undefined) {
      ortsteil = ` ${adressdaten.ortsteil}`;
    }

    return `${adressdaten.strasse} ${adressdaten.hausnummer}\n${adressdaten.plz} ${adressdaten.ort} ${ortsteil}`;
  }

  protected readonly lebenslaufZertifikatTypToString =
    lebenslaufZertifikatTypToString;
}
