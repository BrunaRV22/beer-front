import { NgModule } from '@angular/core';
import { PedidosComponent } from './pedidos.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidosResolverService } from './pedidos-resolver.service';

@NgModule({
    declarations: [ PedidosComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PedidosComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    pedidos: PedidosResolverService
                }
            }
        ])
    ],
    providers: [
        ImageService,
        PedidosService,
        PedidosResolverService
    ]
})
export class PedidosModule {  }
