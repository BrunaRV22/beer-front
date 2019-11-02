import { NgModule } from '@angular/core';
import { CompraComponent } from './compra.component';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'src/app/services/custom';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ CompraComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    exports: [ CompraComponent ]
})
export class CompraModule {  }
