import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CompraService } from '../compra.service';
import { first, map, tap } from 'rxjs/operators';

@Injectable()
export class SacolaActivatedService implements CanActivate {
    constructor(
        private readonly service: CompraService,
        private readonly router: Router
    ) { }

    canActivate() {
        return this.service.totalItens()
            .pipe(first())
            .pipe(map((total) => total > 0))
            .pipe(tap((result) => {
                if (!result) {
                    this.router.navigate(['/']);
                }
            }));
    }
}
