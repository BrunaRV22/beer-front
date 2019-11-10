import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService extends Global {
    constructor(
        private readonly http: HttpClient
    ) {
        super();
    }

    cadastro(usuario: Usuario) {
        return this.http.post(`${this.url}/usuario/novo`, usuario, {
            withCredentials: false
        });
    }

    getEndereco() {
        return this.http.get(`${this.url}/usuario/endereco`);
    }
}
