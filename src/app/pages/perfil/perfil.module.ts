import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ PerfilComponent ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PerfilComponent
            }
        ])
    ]
})
export class PerfilModule {  }
