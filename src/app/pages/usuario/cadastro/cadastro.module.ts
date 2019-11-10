import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { UsuarioService } from 'src/app/services/usuario.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: CadastroComponent
            }
        ])
    ],
    declarations: [ CadastroComponent ],
    providers: [ UsuarioService ]
})
export class CadastroModule {  }
