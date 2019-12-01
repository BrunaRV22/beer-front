import { Component, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
    selector: 'app-promocao',
    templateUrl: './promocao.component.html',
    styleUrls: ['./promocao.component.scss']
})
export class PromocaoComponent implements OnDestroy {
    produtos: Produto[];

    constructor(
        private readonly image: ImageService,
        readonly route: ActivatedRoute
    ) {
        image.setImage('fundo_05');
        route.data.subscribe((params) => {
            this.produtos = params.produtos;
        });
    }

    ngOnDestroy() {
        this.image.setImage('fundo_01');
    }
}
