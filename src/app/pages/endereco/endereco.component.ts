import { Component, Renderer2, Inject } from '@angular/core';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { CompraEndereco } from 'src/app/model/endereco';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-endereco',
    templateUrl: './endereco.component.html',
    styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {
    enderecos: CompraEndereco[];

    constructor(
        readonly route: ActivatedRoute,
        private readonly renderer: Renderer2,
        private readonly modal: ModalService,
        private readonly service: CompraService,
        private readonly router: Router,

        @Inject(DOCUMENT) readonly document: Document
      ) {
        this.renderer.addClass(document.body, 'bg-image');
        route.data.subscribe((params) => this.enderecos = params.enderecos);
    }

    selecionarEndereco(endereco: any) {
        this.enderecos.forEach((e) => e.active = false);
        endereco.active = true;
    }

    openModal(modal: any) {
        this.modal.open(modal);
    }

    closeModal() {
        this.modal.close();
    }

    finalizar() {
        const endereco = this.enderecos.find((e) => e.active);

        if (endereco) {
            this.service.adicionarEndereco(endereco);
            this.router.navigate(['/sacola/finalizar']);
        } else {
            alert('Escolha um endereço');
        }
    }

    redirecionarParaHome() {
        this.router.navigate(['/'], {
            preserveQueryParams: false,
            preserveFragment: false
        });

        this.modal.close();
    }

    limparComRedirecionar() {
        this.service.limparSacola();
        this.redirecionarParaHome();
    }
}
