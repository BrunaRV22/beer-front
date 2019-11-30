import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from 'src/app/services/images.service';

@Component({
    selector: 'app-motoboy',
    templateUrl: './motoboy.component.html',
    styles: [`
        .col-12,
        h1 {
            text-align: center;
        }

        img {
            margin-top: 30px;
        }
    `]
})
export class MotoboyComponent {
    compra: { status: number };

    constructor(
        readonly image: ImagesService,
        readonly route: ActivatedRoute
    ) {
        image.setImage();
        route.data.subscribe((params) => this.compra = params.compra);
    }
}
