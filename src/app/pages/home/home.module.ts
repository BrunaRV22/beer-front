import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomeResolverService } from './home-resolver.service';
import { HomeComponent } from './home.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { ModalModule } from 'src/app/services/custom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          produtos: HomeResolverService
        },
        data: { title: 'Beer - Home' }
      }
    ]),
  ],
  declarations: [ HomeComponent ],
  providers: [
    ProdutoService,
    HomeResolverService
  ]
})
export class HomePageModule { }
