import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  produtos: Produto[];

  constructor(
    readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    route.data
      .subscribe((params) => this.produtos = params.produtos);
  }

  comprar(id: string) {
    this.router.navigate(['/produtos/compra'], {
      queryParams: { id }
    });
  }
}
