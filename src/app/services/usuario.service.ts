import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService extends Global {
    constructor(
        private readonly http: HttpClient
    ) {
        super();
    }

    getEndereco() {
        return this.http.get(`${this.url}/usuario/endereco`);
    }
}
