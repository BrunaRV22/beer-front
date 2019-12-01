import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';

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
    ],
    providers: [ ImageService ]
})
export class PerfilModule {  }
