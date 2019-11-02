import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TooltipModule.forRoot()
    ],
    declarations: [ DefaultComponent ],
    exports: [ DefaultComponent ]
})
export class DefaultModule {  }
