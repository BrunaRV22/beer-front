import { NgModule } from '@angular/core';
import { CompraComponent } from './compra.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'src/app/services/custom';

@NgModule({
    declarations: [ CompraComponent ],
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ],
    exports: [ CompraComponent ]
})
export class CompraModule {  }
