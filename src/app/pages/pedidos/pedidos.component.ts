import { Component, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-pedidos',
    templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnDestroy {
    pedidos: any;

    constructor(
        private readonly image: ImageService,
        readonly route: ActivatedRoute
    ) {
        image.setImage('fundo_02');
        route.data
            .pipe(tap((params) => console.log('Params', params)))
            .subscribe((params) => this.pedidos = params.pedidos);
    }

    ngOnDestroy() {
        this.image.setImage('fundo_01');
    }
}
