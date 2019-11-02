import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SacolaComponent } from './sacola.component';
import { SacolaResolverService } from './sacola-resolver.service';
import { SacolaActivatedService } from 'src/app/services/activated/sacola.activated.service';

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
    declarations: [ SacolaComponent ],
    providers: [
        SacolaResolverService,
        SacolaActivatedService
     ]
})
export class SacolaModule {  }
