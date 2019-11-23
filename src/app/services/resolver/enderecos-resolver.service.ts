import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { CompraEndereco } from 'src/app/model/endereco';
import { Observable, from } from 'rxjs';
import { switchMap, map, toArray, filter, tap, isEmpty, defaultIfEmpty } from 'rxjs/operators';
import { CompraService } from '../compra.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class EnderecosResolverService implements Resolve<Observable<CompraEndereco[]>> {
    constructor(
        private readonly api: EnderecoService,
        private readonly router: Router,
        private readonly service: CompraService,
        private readonly toastr: ToastrService
    ) { }

    resolve() {
        return this.api.listar()
            .pipe(
                filter((enderecos) => enderecos && enderecos.length > 0),
                switchMap((enderecos) => from(enderecos)),
                map((e) => new CompraEndereco(e)),
                toArray(),
                tap((enderecos) => {
                    if (enderecos.length === 1) {
                        const endereco = enderecos[0];
                        this.service.adicionarEndereco(endereco);
                        this.router.navigate(['/sacola/finalizar']);
                    }
                }),
                defaultIfEmpty([]),
                tap((enderecos) => {
                    if (enderecos.length === 0) {
                        this.toastr.warning('Cadastre um endereço para efetuar a entrega', 'Endereço não cadastrado');
                        this.router.navigate(['/cadastro/endereco'], {
                            queryParams: {
                                navigate: '/sacola/endereco'
                            }
                        });
                    }
                })
            );
    }
}
