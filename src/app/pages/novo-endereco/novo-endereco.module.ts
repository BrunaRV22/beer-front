import { NgModule } from '@angular/core';
import { NovoEnderecoComponent } from './novo-endereco.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorModule } from 'src/app/directives/validator/validator.module';
import { ErrorControlModule } from 'src/app/directives/error-control/error-control.module';
import { EnderecoService } from 'src/app/services/endereco.service';
import { ImageService } from 'src/app/services/image.service';

@NgModule({
    declarations: [ NovoEnderecoComponent ],
    imports: [
        CommonModule,
        FormsModule,
        ValidatorModule,
        ErrorControlModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',
                component: NovoEnderecoComponent
            }
        ])
    ],
    providers: [
        EnderecoService,
        ImageService
    ]
})
export class NovoEnderecoModule {  }
