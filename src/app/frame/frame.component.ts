import { Component } from '@angular/core';
import { ConfigurationService } from '../lebenslauf/configuration.service';

@Component({
  selector: 'app-frame',
  imports: [],
  templateUrl: './frame.component.html',
})
export class FrameComponent {
  constructor(private readonly configurationService: ConfigurationService) {}

  protected primaryColor = this.configurationService.getPrimaryColor();
}
