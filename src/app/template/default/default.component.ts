import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CompraService } from 'src/app/services/compra.service';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: [ './default.component.scss' ]
})
export class DefaultComponent {
    constructor(
        private readonly auth: AuthService,
        private readonly compraService: CompraService
    ) {  }

    total() {
        return this.compraService.totalItens();
    }

    get getAuth() {
        return this.auth.getAuth;
    }

    logout() {
        return this.auth.clearAuth();
    }
}
