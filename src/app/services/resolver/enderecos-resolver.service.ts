import { Resolve, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { CompraEndereco } from 'src/app/model/endereco';
import { Observable, from } from 'rxjs';
import { switchMap, map, toArray, filter, tap, catchError } from 'rxjs/operators';
import { CompraService } from '../compra.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

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
                    if (enderecos.length === 0) {
                        this.toastr.warning('Cadastre um endereço para efetuar a entrega', 'Endereço não cadastrado');
                        this.router.navigate(['/cadastro/endereco'], {
                            queryParams: {
                                navigate: '/sacola/endereco'
                            }
                        });
                    }
                }),
                catchError((response) => {
                    if (response instanceof HttpErrorResponse) {
                        if (response.status === 401) {
                            this.toastr.warning('Precisa logar novamente para concluir a compra', 'Aviso');
                            this.router.navigate(['/login'], {
                                queryParams: {
                                    navigate: '/sacola/endereco'
                                }
                            });
                        }
                    }

                    throw response;
                })
            );
    }
}
