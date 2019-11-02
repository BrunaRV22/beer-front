import { Component } from '@angular/core';
import { Sacola } from 'src/app/model/produto';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { CompraEditarComponent } from 'src/app/components/modal/compra-editar/compra-editar.component';

@Component({
     selector: 'app-sacola',
     templateUrl: './sacola.component.html',
     styleUrls: ['./sacola.component.scss']
})
export class SacolaComponent {
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

    editar(item: Sacola) {
        this.service.compraEditar(item, item.quantidade);
        this.modal.open(CompraEditarComponent);

        this.modal.onClose()
            .subscribe(() => this.router.navigate(['/sacola']));
    }

    remover(item: Sacola) {
        this.service.remover(item.id);
        this.router.navigate(['/sacola']);
    }
}
