export class Produto {
    id: string;
    foto: string;
    nome: string;
    preco: number;
    descricao: string;
}


export class Sacola extends Produto {
    quantidade: number;
}
