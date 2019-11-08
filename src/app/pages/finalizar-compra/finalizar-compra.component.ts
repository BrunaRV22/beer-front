import { Component } from '@angular/core';
import { Sacola } from 'src/app/model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CompraService } from 'src/app/services/compra.service';
import { ModalService } from 'src/app/services/custom/modal/modal.service';

@Component({
    selector: 'app-finalizar-compra',
    templateUrl: './finalizar-compra.component.html',
    styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent {
    sacola: {
        produtos: Sacola[],
        total: number
    };

    constructor(
        readonly route: ActivatedRoute,
        readonly meta: Meta,
        private readonly service: CompraService,
        private readonly router: Router,
        private readonly modal: ModalService
    ) {
        meta.addTags([
            {
                name: 'robots',
                content: 'noindex'
            },
            {
                name: 'googlebot',
                content: 'noindex'
            }
        ]);

        route.data
            .subscribe((params) => this.sacola = params.sacola);
    }
}
