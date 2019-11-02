import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SacolaComponent } from './sacola.component';
import { SacolaResolverService } from './sacola-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SacolaComponent,
                runGuardsAndResolvers: 'always',
                resolve: {
                    sacola: SacolaResolverService
                }
            }
        ])
    ],
    declarations: [ SacolaComponent ],
    providers: [ SacolaResolverService ]
})
export class SacolaModule {  }
