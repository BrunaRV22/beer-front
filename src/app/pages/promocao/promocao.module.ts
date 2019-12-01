import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromocaoComponent } from './promocao.component';
import { ImageService } from 'src/app/services/image.service';
import { PromocaoResolverService } from './promocao-resolver.service';
import { ProdutoService } from 'src/app/services/produto.service';

@NgModule({
    declarations: [PromocaoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PromocaoComponent,
                resolve: {
                    produtos: PromocaoResolverService
                },
            }
        ])
    ],
    providers: [
        ImageService,
        ProdutoService,
        PromocaoResolverService
    ]
})
export class PromocaoModule { }
