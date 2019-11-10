import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export class EnderecoActivatedService implements CanActivate {
    constructor(
        private readonly auth: AuthService,
        private readonly router: Router
    ) { }

    canActivate() {
        if (this.auth.isLogged()) {
            return true;
        } else {
            // Modal informando que não está logado
            this.router.navigate(['/login'], {
                queryParams: {
                    navigate: '/sacola/endereco'
                }
            });
            return false;
        }
    }
}
