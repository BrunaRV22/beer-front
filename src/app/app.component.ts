import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    readonly renderer: Renderer2,
    @Inject(DOCUMENT) readonly document: Document
  ) {
    renderer.addClass(document.body, 'bg-image');
    // const id = Math.ceil(Math.random() * 3);
    renderer.addClass(document.body, `fundo_01`);
  }
}
