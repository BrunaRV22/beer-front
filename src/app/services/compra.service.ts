import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { BehaviorSubject, from } from 'rxjs';
import { switchMap, filter, defaultIfEmpty, count } from 'rxjs/operators';

@Injectable()
export class CompraService {
    private sacola: Produto[];
    private produto: BehaviorSubject<Produto>;

    private sacolaRx: BehaviorSubject<Produto[]>;

    constructor() {
        this.produto = new BehaviorSubject(null);
        this.sacolaRx = new BehaviorSubject(null);
    }

    comprar(produto: Produto) {
        this.produto.next(produto);
    }

    buscar() {
        return this.produto;
    }

    adicionar(produto: Produto) {
        const index = this.sacola.push(produto) - 1;
        this.sacolaRx.next(this.sacola);
        return index;
    }

    remover(index: number) {
        const sacola = this.sacola.filter((_, i) => index !== i);
        this.sacola = sacola;
        this.sacolaRx.next(sacola);
    }

    itens() {
        return this.sacolaRx
            .pipe(switchMap((dados) => from(dados)));
    }

    totalItens() {
        return this.itens()
            .pipe(filter((data) => data !== null))
            .pipe(count())
            .pipe(defaultIfEmpty(0));
    }
}
