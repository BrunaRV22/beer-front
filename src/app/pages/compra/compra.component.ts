import { Component } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-compra',
    templateUrl: './compra.component.html',
    styleUrls: ['compra.component.scss']
})
export class CompraComponent {
    produto: Produto;
    quantidade: FormControl;

    constructor(
        route: ActivatedRoute,
        private readonly router: Router
    ) {
        route.data
            .subscribe((params) => {
                this.produto = params.produto;
                this.quantidade = new FormControl(1, {
                    validators: [
                        Validators.required,
                        Validators.min(1)
                    ]
                });
            });
    }


    get total() {
        return of(this.quantidade.value)
            .pipe(map((quant) => this.produto.preco * quant));
    }

    cancelar() {
        this.router.navigate(['/produtos']);
    }

    enviarDados($event: Event) {
        $event.preventDefault();
        console.log('Compra, parte 2');
    }
}
