import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private readonly primaryColor = signal('#E839F2');

  getPrimaryColor() {
    return this.primaryColor();
  }

  setPrimaryColor(newColor: `#${string}`) {
    this.primaryColor.set(newColor);
  }
}
