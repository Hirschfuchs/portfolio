import { Component, inject } from '@angular/core';
import { ConfigurationService } from '../../../lebenslauf/services/configuration.service';

@Component({
  selector: 'app-frame',
  imports: [],
  templateUrl: './frame.component.html',
})
export class FrameComponent {
  protected primaryColor;
  private readonly configurationService = inject(ConfigurationService);

  constructor() {
    this.primaryColor = this.configurationService.getPrimaryColor();
  }
}
