import { Component, Renderer2 } from '@angular/core';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { CompraEndereco } from 'src/app/model/endereco';

@Component({
    selector: 'app-endereco',
    templateUrl: './endereco.component.html',
    styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent {
    enderecos: CompraEndereco[] = [
        {
            active: true,
            tipo: 'Residencial',
            logradouro: 'Rua Nuporanga',
            numero: '147',
            bairro: 'Vila Perracine',
            cidade: 'Poá',
            estado: 'SP',
            complemento: null,
            cep: '08552-500'
        },
        {
            active: false,
            tipo: 'Residencial',
            logradouro: 'Rua Nuporanga',
            numero: '147',
            bairro: 'Vila Perracine',
            cidade: 'Poá',
            estado: 'SP',
            complemento: null,
            cep: '12321-233'
        },
        {
            active: false,
            tipo: 'Comercial',
            logradouro: 'Rua Nuporanga',
            numero: '147',
            bairro: 'Vila Perracine',
            cidade: 'Poá',
            estado: 'SP',
            complemento: null,
            cep: '17373-182'
        }
    ];

    constructor(
        private readonly renderer: Renderer2,
        private readonly modal: ModalService,
        private readonly service: CompraService,
        private readonly router: Router
    ) { }

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
