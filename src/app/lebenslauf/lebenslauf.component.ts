import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';
import { Split2Component } from '../split-2/split-2.component';
import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [FrameComponent, Split2Component, NgOptimizedImage],
  templateUrl: './lebenslauf.component.html',
  styleUrl: './lebenslauf.component.scss',
})
export class LebenslaufComponent {
  constructor(private readonly configurationService: ConfigurationService) {}

  protected primaryColor = this.configurationService.getPrimaryColor();
}
