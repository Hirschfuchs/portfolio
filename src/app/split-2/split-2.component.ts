import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-split-2',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './split-2.component.html',
  styleUrl: './split-2.component.scss',
})
export class Split2Component {
  contentLeft = contentChild<TemplateRef<any> | undefined>('contentLeft');
  contentRight = contentChild<TemplateRef<any> | undefined>('contentRight');
}
