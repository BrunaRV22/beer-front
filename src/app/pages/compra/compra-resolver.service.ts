import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Injectable()
export class CompraResolverService implements Resolve<any> {
    constructor(
        private readonly service: ProdutoService
    ) {  }

    resolve(route: ActivatedRouteSnapshot) {
        // tslint:disable-next-line: no-string-literal
        const id = route.queryParams['id'];

        return this.service.buscar(id);
    }
}
