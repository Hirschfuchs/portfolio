import { Component, input } from '@angular/core';

@Component({
  selector: 'app-key-value-pair',
  standalone: true,
  imports: [],
  templateUrl: './key-value-pair.component.html',
  styleUrl: './key-value-pair.component.scss',
})
export class KeyValuePairComponent {
  public readonly key = input.required<string>();
  public readonly value = input.required<string>();
}
