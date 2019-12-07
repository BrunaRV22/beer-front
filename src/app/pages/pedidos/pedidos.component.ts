import { Component, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Endereco } from 'src/app/model/endereco';
import { Produto } from 'src/app/model/produto';

@Component({
    selector: 'app-pedidos',
    templateUrl: './pedidos.component.html',
    styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnDestroy {
    page: number;

    pedidos: {
        page: number,
        total: number,
        quantidade: number,
        compras: {
            createdAt: string,
            updatedAt: string,

            endereco: Endereco,
            total: number,
            frete: number,
            produtos: { descricao: string, nome: string, preco: number, quantidade: number }[],
            status: number // 0 para em andamento e 1 para concluído
        }[];
    };

    constructor(
        private readonly image: ImageService,
        private readonly router: Router,
        readonly route: ActivatedRoute
    ) {

        image.setImage('fundo_02');
        route.data
            .pipe(tap((params) => console.log('Params', params)))
            .subscribe((params) => {
                this.pedidos = params.pedidos;
                this.page = params.pedidos.page - 1;
            });
    }

    changePage(changes: { length: number, pageIndex: number, pageSize: number, previousPageIndex: number }) {
        this.router.navigate(['/pedidos'], {
            queryParams: {
                page: changes.pageIndex + 1
            }
        });
    }

    ngOnDestroy() {
        this.image.setImage('fundo_01');
    }
}
