import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';

@Injectable()
export class PedidosResolverService implements Resolve<any> {
    constructor(
        private readonly api: PedidosService
    ) { }

    resolve() {
        return this.api.getPedidos();
    }
}
