import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PedidosService } from 'src/app/services/pedidos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class PedidosResolverService implements Resolve<any> {
    constructor(
        private readonly api: PedidosService,
        private readonly toastr: ToastrService,
        private readonly router: Router
    ) { }

    async resolve(route: ActivatedRouteSnapshot) {
        try {
            const page = route.queryParams.page || 1;
            const pedidos = await this.api.getPedidos(page).toPromise();
            return pedidos;
        } catch (error) {
            if (error instanceof HttpErrorResponse) {
                if (error.status === 401) {
                    this.toastr.warning('Seu tempo logado expirou ou você não tem permissão, logue novamente para acessar o sistema',
                        'Login expirado');
                    this.router.navigate(['/login'], {
                        queryParams: {
                            navigate: '/pedidos'
                        }
                    });
                }
            }
        }
    }
}
