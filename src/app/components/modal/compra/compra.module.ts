import { NgModule } from '@angular/core';
import { CompraComponent } from './compra.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'src/app/services/custom';
import { CompraService } from 'src/app/services/compra.service';

@NgModule({
    declarations: [ CompraComponent ],
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ],
    exports: [ CompraComponent ],
    providers: [ CompraService ]
})
export class CompraModule {  }
