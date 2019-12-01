import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        readonly route: ActivatedRoute
    ) {
        route.data.subscribe((params) => this.compra = params.compra);
    }
}
