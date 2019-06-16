import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class EnderecoResolverService implements Resolve<any> {
    constructor(
        private readonly service: UsuarioService
    ) {  }

    resolve() {
        this.service.getEndereco();
    }
}
