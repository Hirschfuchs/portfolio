import { Component } from '@angular/core';
import { FrameComponent } from '../frame/frame.component';
import { Split2Component } from '../split-2/split-2.component';

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [FrameComponent, Split2Component],
  templateUrl: './lebenslauf.component.html',
  styleUrl: './lebenslauf.component.scss',
})
export class LebenslaufComponent {}
