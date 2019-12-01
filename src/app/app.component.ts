import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    readonly renderer: Renderer2,
    @Inject(DOCUMENT) readonly document: Document,
    readonly router: Router
  ) {
    renderer.addClass(document.body, 'bg-image');
    renderer.addClass(document.body, 'fundo_01');
  }
}
