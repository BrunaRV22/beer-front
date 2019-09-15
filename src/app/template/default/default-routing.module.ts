import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { ProdutoService } from 'src/app/services/produto.service';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DefaultComponent,
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        loadChildren: () => import('../../pages/home/home.module').then((m) => m.HomePageModule)
                    }
                ]
            }
        ])
    ],
    exports: [ RouterModule ],
    providers: [ ProdutoService ]
})
export class DefaultRoutingModule {  }
