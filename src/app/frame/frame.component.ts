import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigurationService } from '../lebenslauf/configuration.service';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss',
})
export class FrameComponent {
  constructor(private readonly configurationService: ConfigurationService) {}

  protected primaryColor = this.configurationService.getPrimaryColor();
}
