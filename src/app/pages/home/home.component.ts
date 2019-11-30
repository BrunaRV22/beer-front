import { Component, Renderer2, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { Title } from '@angular/platform-browser';
import { CompraComponent } from 'src/app/components/modal/compra/compra.component';
import { ModalService } from 'src/app/services/custom/modal/modal.service';
import { CompraService } from 'src/app/services/compra.service';
import { DOCUMENT } from '@angular/common';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  produtos: Produto[];

  constructor(
    readonly route: ActivatedRoute,
    readonly title: Title,
    private readonly modalService: ModalService,
    private readonly comprarService: CompraService,
    readonly image: ImagesService
  ) {
    image.setImage();

    route.data
      .subscribe((params) => {
        if (params.title) {
          title.setTitle(params.title);
        }

        this.produtos = params.produtos;
      });
  }

  adicionar(produto: Produto) {
    this.comprarService.comprar(produto);
    this.modalService.open(CompraComponent);
  }
}
