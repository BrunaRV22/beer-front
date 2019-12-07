import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService extends Global {
    constructor(
        private readonly http: HttpClient
    ) {
        super();
    }

    listar() {
        return this.http.get(`${this.url}/produto`);
    }

    listarPromocao() {
        return this.http.get(`${this.url}/produto/promocao`);
    }

    buscar(id: string) {
        return this.http.get(`${this.url}/produto/${id}`);
    }
}
