import { Injectable, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class ImageService {
    private readonly renderer: Renderer2;

    constructor(
        @Inject(DOCUMENT) private readonly document: Document,
        readonly factory: RendererFactory2
    ) {
        this.renderer = factory.createRenderer(null, null);
    }

    setImage(image: string) {
        this.renderer.removeClass(this.document.body, 'fundo_01');
        this.renderer.removeClass(this.document.body, 'fundo_02');
        this.renderer.removeClass(this.document.body, 'fundo_03');
        this.renderer.removeClass(this.document.body, 'fundo_04');
        this.renderer.removeClass(this.document.body, 'fundo_05');

        this.renderer.addClass(this.document.body, image);
    }
}
