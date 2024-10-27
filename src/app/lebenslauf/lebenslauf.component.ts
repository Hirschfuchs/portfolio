import { Component } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [FrameComponent],
  templateUrl: './lebenslauf.component.html',
  styleUrl: './lebenslauf.component.scss',
})
export class LebenslaufComponent {}
