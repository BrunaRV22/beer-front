import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CompraService } from '../compra.service';

@Injectable()
export class CheckCompraResolverService implements Resolve<any> {
    constructor(
        private readonly api: CompraService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params.id;
        return this.api.buscarCompra(id);
    }
}
