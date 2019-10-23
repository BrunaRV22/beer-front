import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent {
  produtos: Produto[];

  constructor(
    readonly route: ActivatedRoute,
    private readonly router: Router,
    readonly title: Title
  ) {
    route.data
      .subscribe((params) => {
        if (params.title) {
          title.setTitle(params.title);
        }

        this.produtos = params.produtos;
      });
  }

  comprar(id: string) {
    this.router.navigate(['/produtos', id]);
  }
}
