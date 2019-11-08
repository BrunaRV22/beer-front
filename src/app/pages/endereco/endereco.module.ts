import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: EnderecoComponent
            }
        ])
    ],
    declarations: [ EnderecoComponent ]
})
export class EnderecoModule {  }
