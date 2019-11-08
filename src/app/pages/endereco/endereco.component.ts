import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';

@Component({
    selector: 'app-endereco',
    templateUrl: './endereco.component.html',
    styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {
    enderecos = [
        {
            active: true,
            logradouro: 'Rua Nuporanga',
            numero: '147',
            bairro: 'Vila Perracine',
            cidade: 'Poá',
            estado: 'SP',
            complemento: null
        },
        {
            active: false,
            logradouro: 'Rua Nuporanga',
            numero: '147',
            bairro: 'Vila Perracine',
            cidade: 'Poá',
            estado: 'SP',
            complemento: null
        },
        {
            active: false,
            logradouro: 'Rua Nuporanga',
            numero: '147',
            bairro: 'Vila Perracine',
            cidade: 'Poá',
            estado: 'SP',
            complemento: null
        }
    ];

    constructor(
        private readonly renderer: Renderer2,
        private readonly modal: ModalService,
        private readonly service: CompraService,
        private readonly router: Router
    ) {  }

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
