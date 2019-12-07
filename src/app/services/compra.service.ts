import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { BehaviorSubject } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { Endereco } from '../model/endereco';
import { Global } from './global';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CompraService extends Global {
    private sacola: Produto[];
    private endereco: Endereco;

    private produto: BehaviorSubject<Produto>;

    private sacolaRx: BehaviorSubject<Produto[]>;
    private sacolaTotalRx: BehaviorSubject<number>;

    private quantidade: number;

    constructor(
        private readonly http: HttpClient
    ) {
        super();
        this.produto = new BehaviorSubject(null);
        this.sacolaRx = new BehaviorSubject(null);
        this.sacolaTotalRx = new BehaviorSubject(0);

        this.sacola = [];
    }

    adicionarEndereco(endereco: Endereco) {
        this.endereco = endereco;
    }

    getEndereco() {
        return this.endereco;
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

    limparSacola() {
        const sacola = this.sacola = [];
        this.sacolaRx.next(sacola);
        this.sacolaTotalRx.next(0);

        this.endereco = null;
    }

    finalizarCompra(data: { id_endereco: string, produtos: { id: string, quantidade: number }[] }) {
        return this.http.post<{ id: string, total: number }>(`${this.url}/compra`, data, { withCredentials: true })
            .pipe(shareReplay());
    }

    buscarCompra(id: string) {
        return this.http.get(`${this.url}/compra/${id}`, { withCredentials: true });
    }
}
