import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PedidosService extends Global {
    private readonly routeURL;

    constructor(
        private readonly http: HttpClient
    ) {
        super();
        this.routeURL = `${this.url}/pedidos`;
    }

    getPedidos(page: number = 1) {
        return this.http.get(this.routeURL, {
            withCredentials: true,
            params: new HttpParams().set('page', page.toString())
        });
    }
}
