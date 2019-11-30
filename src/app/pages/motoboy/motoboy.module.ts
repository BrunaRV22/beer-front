import { NgModule } from '@angular/core';
import { MotoboyComponent } from './motoboy.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckCompraResolverService } from 'src/app/services/resolver/check-compra-resolver.service';

@NgModule({
    declarations: [ MotoboyComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MotoboyComponent,
                runGuardsAndResolvers: 'paramsChange',
                resolve: {
                    compra: CheckCompraResolverService
                }
            }
        ])
    ],
    providers: [ CheckCompraResolverService ]
})
export class MotoboyModule {  }
