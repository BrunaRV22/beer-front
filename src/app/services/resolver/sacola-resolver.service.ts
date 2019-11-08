import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { groupBy, switchMap, mergeMap, toArray, reduce, map, take } from 'rxjs/operators';
import { from } from 'rxjs';
import { Sacola } from 'src/app/model/produto';

@Injectable()
export class SacolaResolverService implements Resolve<any> {
    constructor(
        private readonly service: CompraService
    ) { }

    resolve() {
        return this.service.itens()
            .pipe(take(1))
            .pipe(switchMap((data) => from(data)))
            .pipe(groupBy((p) => p.id))
            .pipe(mergeMap((group) => group.pipe(toArray())))
            .pipe(map((produtos) => new Sacola(produtos[0], produtos.length)))
            .pipe(reduce((total, produto: Sacola) => [...total, produto], [] as Sacola[]))
            .pipe(map((produtos) => ({
                produtos,
                total: produtos.reduce((valor, el) => valor += el.preco * el.quantidade, 0)
            })));
    }
}
