import { NgModule } from '@angular/core';
import { CompraComponent } from './compra.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/components/header/header.module';
import { CompraResolverService } from './compra-resolver.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HeaderModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: CompraComponent,
                resolve: {
                    produto: CompraResolverService
                }
            }
        ])
    ],
    declarations: [ CompraComponent ],
    providers: [ CompraResolverService ]
})
export class CompraModule {  }
