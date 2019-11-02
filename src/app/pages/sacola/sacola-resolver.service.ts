import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { groupBy, first, switchMap, mergeMap, toArray, reduce, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable()
export class SacolaResolverService implements Resolve<any> {
    constructor(
        private readonly service: CompraService
    ) { }

    resolve() {
        return this.service.itens()
            .pipe(first())
            .pipe(switchMap((data) => from(data)))
            .pipe(groupBy((p) => p.id))
            .pipe(mergeMap((group) => group.pipe(toArray())))
            .pipe(map((produtos) => {
                const produto = produtos[0];
                return Object.assign(produto, { quantidade: produtos.length });
            }))
            .pipe(reduce((total, produtos: any) => [...total, produtos], []));
    }
}
