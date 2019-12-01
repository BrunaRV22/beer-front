import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ImagesService {
    private readonly renderer: Renderer2;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        readonly factory: RendererFactory2
    ) {
        this.renderer = factory.createRenderer(null, null);
    }

    setImage() {
        this.renderer.addClass(document.body, 'bg-image');
        // const id = Math.ceil(Math.random() * 3);
        this.renderer.addClass(this.document.body, `fundo_01`);
    }
}
