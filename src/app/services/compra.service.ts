import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { BehaviorSubject, from } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CompraService {
    private sacola: Produto[];
    private produto: BehaviorSubject<Produto>;

    private sacolaRx: BehaviorSubject<Produto[]>;
    private sacolaTotalRx: BehaviorSubject<number>;

    constructor() {
        this.produto = new BehaviorSubject(null);
        this.sacolaRx = new BehaviorSubject(null);
        this.sacolaTotalRx = new BehaviorSubject(0);

        this.sacola = [];
    }

    comprar(produto: Produto) {
        this.produto.next(produto);
    }

    buscar() {
        return this.produto;
    }

    adicionar(produto: Produto, quantidade: number = 1) {
        for (let i = 1; i < quantidade; i++) {
            this.sacola.push(produto);
        }

        const index = this.sacola.push(produto) - 1;
        this.sacolaRx.next(this.sacola);
        this.sacolaTotalRx.next(this.sacola.length);

        return index;
    }

    remover(index: number) {
        const sacola = this.sacola.filter((_, i) => index !== i);
        this.sacola = sacola;

        this.sacolaTotalRx.next(sacola.length);

        this.sacolaRx.next(sacola);
    }

    itens() {
        return this.sacolaRx
            .pipe(filter((data) => data !== null));
    }

    totalItens() {
        return this.sacolaTotalRx;
    }
}
