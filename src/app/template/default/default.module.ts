import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [ DefaultComponent ],
    exports: [ DefaultComponent ],
    providers: [ CompraService ]
})
export class DefaultModule {  }
