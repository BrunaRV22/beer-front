
export class Endereco {
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
}


export class CompraEndereco extends Endereco {
    active: boolean;

    constructor(e: Endereco) {
        super();

        if (e) {
            this.logradouro = e.logradouro;
            this.numero = e.numero;
            this.bairro = e.bairro;
            this.cep = e.cep;
            this.cidade = e.cidade;
            this.complemento = e.complemento;
            this.estado = e.estado;
        }
    }
}
