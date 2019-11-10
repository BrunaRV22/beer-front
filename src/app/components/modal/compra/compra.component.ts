import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { CompraService } from 'src/app/services/compra.service';
import { Produto } from 'src/app/model/produto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-comprar-produto',
    templateUrl: './compra.component.html',
    styleUrls: [ './compra.component.scss' ]
})
export class CompraComponent {
    produto: Produto;
    quantidade = 1;

    constructor(
        private readonly modal: ModalService,
        private readonly comprarService: CompraService,
        private readonly router: Router
    ) {
        comprarService.buscar()
            .subscribe((produto) => this.produto = produto);
    }

    adicionar() {
        this.comprarService.adicionar(this.produto, this.quantidade);
        this.close();
    }

    finalizar() {
        this.adicionar();
        this.router.navigate(['/sacola']);
    }

    close() {
        this.modal.close();
    }
}
