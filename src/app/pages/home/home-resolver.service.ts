import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Injectable()
export class HomeResolverService implements Resolve<any> {
    constructor(
        private readonly service: ProdutoService
    ) {  }

    resolve() {
        return this.service.listar();
    }
}
