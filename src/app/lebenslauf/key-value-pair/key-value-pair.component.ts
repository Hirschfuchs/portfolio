import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

enum IconState {
  EMPTY,
  HALF,
  FULL,
}

@Component({
  selector: 'app-key-value-pair',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './key-value-pair.component.html',
  styleUrl: './key-value-pair.component.scss',
})
export class KeyValuePairComponent {
  public readonly key = input.required<string>();
  public readonly textValue = input<string | undefined>();
  public readonly levelValue = input<string | undefined>();

  protected getLevelStars() {
    let stars: IconState[] = [];
    if (this.levelValue()?.startsWith('1')) {
      stars.push(IconState.FULL);
    }
    if (this.levelValue()?.startsWith('2')) {
      stars.push(IconState.FULL, IconState.FULL);
    }
    if (this.levelValue()?.startsWith('3')) {
      stars.push(IconState.FULL, IconState.FULL, IconState.FULL);
    }
    if (this.levelValue()?.startsWith('4')) {
      stars.push(
        IconState.FULL,
        IconState.FULL,
        IconState.FULL,
        IconState.FULL,
      );
    }
    if (this.levelValue()?.startsWith('5')) {
      return [
        IconState.FULL,
        IconState.FULL,
        IconState.FULL,
        IconState.FULL,
        IconState.FULL,
      ];
    }

    if (this.levelValue()?.endsWith('5')) {
      stars.push(IconState.HALF);
    }

    while (stars.length < 5) {
      stars.push(IconState.EMPTY);
    }

    return stars;
  }

  protected IconState = IconState;
}
