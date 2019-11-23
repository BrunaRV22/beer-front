
export class Endereco {
    id?: string;
    tipo: 'Residencial' | 'Comercial';

    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;

    complemento: string;
    cep: string;
}


export class CompraEndereco extends Endereco {
    active: boolean;

    constructor(e: Endereco) {
        super();
        this.active = false;

        if (e) {
            this.id = (e as any)._id || e.id || null;
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
