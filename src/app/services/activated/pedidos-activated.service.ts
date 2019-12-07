import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class PedidosActivatedService implements CanActivate {
    constructor(
        private readonly auth: AuthService,
        private readonly router: Router,
        private readonly toaster: ToastrService
    ) { }

    canActivate() {
        if (this.auth.isLogged()) {
            return true;
        } else {
            this.toaster.warning('Você não está logado, efetue login para visualizar seus pedidos', 'Aviso');
            // Modal informando que não está logado
            this.router.navigate(['/login'], {
                queryParams: {
                    navigate: '/pedidos'
                }
            });
            return false;
        }
    }
}
