import { NgModule } from '@angular/core';
import { PedidosComponent } from './pedidos.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { ImageService } from 'src/app/services/image.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { PedidosResolverService } from './pedidos-resolver.service';
import { DatexModule } from '../../pipe';
import { CustomPaginator } from 'src/app/translate/custom-paginator';

@NgModule({
    declarations: [PedidosComponent],
    imports: [
        CommonModule,
        DatexModule,
        MatPaginatorModule,
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
        PedidosResolverService,
        {
            provide: MatPaginatorIntl,
            useClass: CustomPaginator
        }
    ]
})
export class PedidosModule { }
