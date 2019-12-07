import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

@Injectable()
export class PedidosResolverService implements Resolve<any> {
    constructor(
        private readonly api: PedidosService
    ) { }

    async resolve(route: ActivatedRouteSnapshot) {
        const page = route.queryParams.page || 1;
        const pedidos = await this.api.getPedidos(page).toPromise();
        return pedidos;
    }
}
