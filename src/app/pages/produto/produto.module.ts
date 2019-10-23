import { NgModule } from '@angular/core';
import { ProdutoComponent } from './produto.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ ProdutoComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProdutoComponent,
                data: {
                    title: 'Beer - Produto'
                }
            }
        ])
    ]
})
export class ProdutoModule {  }
