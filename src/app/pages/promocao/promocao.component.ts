import { Component, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { tap } from 'rxjs/operators';
import { CompraService } from 'src/app/services/compra.service';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { CompraComponent } from 'src/app/components/modal/compra/compra.component';

@Component({
    selector: 'app-promocao',
    templateUrl: './promocao.component.html',
    styleUrls: ['./promocao.component.scss']
})
export class PromocaoComponent implements OnDestroy {
    produtos: Produto[];

    constructor(
        private readonly image: ImageService,
        private readonly comprarService: CompraService,
        private readonly modalService: ModalService,
        readonly route: ActivatedRoute
    ) {
        image.setImage('fundo_05');
        route.data
            .pipe(tap((params) => console.log('Params', params)))
            .subscribe((params) => this.produtos = params.produtos);
    }

    adicionar(produto: Produto) {
        this.comprarService.comprar(produto);
        this.modalService.open(CompraComponent);
      }

    ngOnDestroy() {
        this.image.setImage('fundo_01');
    }
}
