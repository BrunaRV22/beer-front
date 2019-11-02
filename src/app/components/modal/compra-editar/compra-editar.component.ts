import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { CompraService } from 'src/app/services/compra.service';
import { Produto } from 'src/app/model/produto';

@Component({
    selector: 'app-editar-produto',
    templateUrl: './compra-editar.component.html',
    styleUrls: [ './compra-editar.component.scss' ]
})
export class CompraEditarComponent {
    produto: Produto;
    quantidade = 1;

    constructor(
        private readonly modal: ModalService,
        private readonly comprarService: CompraService
    ) {
        comprarService.buscaEditar()
            .subscribe((params) => {
                this.produto = params.produto;
                this.quantidade = params.quantidade;
            });
    }

    adicionar() {
        this.comprarService.editar(this.produto, this.quantidade);
        this.close();
    }

    close() {
        this.modal.close();
    }
}
