import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PromocaoComponent } from './promocao.component';

@NgModule({
    declarations: [ PromocaoComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PromocaoComponent
            }
        ])
    ]
})
export class PromocaoModule {  }
