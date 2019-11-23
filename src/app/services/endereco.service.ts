import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';

@Injectable()
export class EnderecoService extends Global {
    private readonly routeURL;
    constructor(
        private readonly http: HttpClient
    ) {
        super();
        this.routeURL = `${this.url}/endereco`;
    }

    adicionar(endereco: Endereco) {
        return this.http.post(this.routeURL, endereco, {
            withCredentials: true
        });
    }

    listar() {
        return this.http.get<any[]>(this.routeURL, {
            withCredentials: true
        });
    }
}
