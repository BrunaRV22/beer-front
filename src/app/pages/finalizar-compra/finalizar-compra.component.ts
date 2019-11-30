import { Component } from '@angular/core';
import { Sacola } from 'src/app/model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { CompraService } from 'src/app/services/compra.service';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { Endereco } from 'src/app/model/endereco';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-finalizar-compra',
    templateUrl: './finalizar-compra.component.html',
    styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent {
    submitted: boolean;
    sacola: {
        produtos: Sacola[],
        total: number
    };

    endereco: Endereco;

    constructor(
        readonly route: ActivatedRoute,
        readonly meta: Meta,
        private readonly service: CompraService,
        private readonly router: Router,
        private readonly modal: ModalService,
        private readonly toaster: ToastrService
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

        this.endereco = this.service.getEndereco();
    }

    finalizar() {
        this.submitted = true;
        const data = {
            id_endereco: this.endereco.id,
            produtos: [...this.sacola.produtos.map(({ id, quantidade }) => ({ id, quantidade }))]
        };

        this.service.finalizarCompra(data)
            .subscribe(
                ({ id }) => {
                    this.toaster.success('Compra efetuada com sucesso, aguarde a chegada do produto.', 'Dados salvos');
                    this.service.limparSacola();
                    this.router.navigate(['/motoboy', id]);
                },
                () => {
                    // tslint:disable-next-line: max-line-length
                    this.toaster.error('Falha ao tentar efetuar a compra, tente novamente e caso o erro persista, tente novamente mais tarde', 'Falha ao salvar dados');
                    this.submitted = false;
                }
            );
    }
}
