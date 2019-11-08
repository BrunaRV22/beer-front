import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SacolaComponent } from './sacola.component';
import { SacolaActivatedService } from 'src/app/services/activated/sacola.activated.service';
import { SacolaResolverService } from 'src/app/services/resolver/sacola-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SacolaComponent,
                runGuardsAndResolvers: 'always',
                canActivate: [ SacolaActivatedService ],
                resolve: {
                    sacola: SacolaResolverService
                }
            }
        ])
    ],
    declarations: [ SacolaComponent ]
})
export class SacolaModule {  }
