import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CompraService {
    private sacola: Produto[];
    private produto: BehaviorSubject<Produto>;

    private sacolaRx: BehaviorSubject<Produto[]>;
    private sacolaTotalRx: BehaviorSubject<number>;

    private quantidade: number;

    constructor() {
        this.produto = new BehaviorSubject(null);
        this.sacolaRx = new BehaviorSubject(null);
        this.sacolaTotalRx = new BehaviorSubject(0);

        this.sacola = [];
    }

    comprar(produto: Produto) {
        this.produto.next(produto);
    }

    compraEditar(produto: Produto, quantidade: number = 1) {
        this.produto.next(produto);
        this.quantidade = quantidade;
    }

    buscaEditar() {
        return this.produto
            .pipe(map((produto) => ({
                produto,
                quantidade: this.quantidade
            })));
    }

    buscar() {
        return this.produto;
    }

    adicionar(produto: Produto, quantidade: number = 1) {
        for (let i = 1; i <= quantidade; i++) {
            this.sacola.push(produto);
        }

        this.sacolaRx.next(this.sacola);
        this.sacolaTotalRx.next(this.sacola.length);
    }

    editar(produto: Produto, quantidade: number = 1) {
        this.remover(produto.id);
        this.adicionar(produto, quantidade);
    }

    remover(id: string) {
        const sacola = this.sacola.filter((el) => el.id !== id);
        this.sacola = sacola;

        this.sacolaRx.next(sacola);
        this.sacolaTotalRx.next(sacola.length);
    }

    itens() {
        return this.sacolaRx
            .pipe(filter((data) => data !== null));
    }

    totalItens() {
        return this.sacolaTotalRx;
    }
}
