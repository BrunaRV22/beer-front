import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnderecoComponent } from './endereco.component';
import { EnderecosResolverService } from 'src/app/services/resolver/enderecos-resolver.service';
import { EnderecoService } from 'src/app/services/endereco.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: EnderecoComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    enderecos: EnderecosResolverService
                }
            }
        ])
    ],
    declarations: [EnderecoComponent],
    providers: [
        EnderecoService,
        EnderecosResolverService
    ]
})
export class EnderecoModule { }
