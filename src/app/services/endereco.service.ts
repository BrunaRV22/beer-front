import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../model/endereco';

@Injectable()
export class EnderecoService extends Global {
    constructor(
        private readonly http: HttpClient
    ) {
        super();
    }

    adicionar(endereco: Endereco) {
        return this.http.post(`${this.url}/endereco`, endereco, {
            withCredentials: true
        });
    }
}
