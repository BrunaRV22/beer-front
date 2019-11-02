export class Produto {
    id: string;
    foto: string;
    nome: string;
    preco: number;
    descricao: string;
}


export class Sacola extends Produto {
    quantidade: number;

    constructor(produto?: Produto, quantidade?: number) {
        super();

        if (produto) {
            this.id = produto.id;
            this.foto = produto.foto;
            this.nome = produto.nome;
            this.preco = produto.preco;
            this.descricao = produto.descricao;

            this.quantidade = quantidade;
        }
    }
}
