import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PedidosService extends Global {
    private readonly routeURL;

    constructor(
        private readonly http: HttpClient
    ) {
        super();
        this.routeURL = `${this.url}/pedidos`;
    }

    getPedidos() {
        return this.http.get(this.routeURL, {
            withCredentials: true
        });
    }
}
