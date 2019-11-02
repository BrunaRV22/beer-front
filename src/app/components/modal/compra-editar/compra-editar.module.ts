import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'src/app/services/custom';
import { FormsModule } from '@angular/forms';
import { CompraEditarComponent } from './compra-editar.component';

@NgModule({
    declarations: [ CompraEditarComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    exports: [ CompraEditarComponent ]
})
export class CompraEditarModule {  }
