import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import * as modal from 'ngx-bootstrap/modal';

@NgModule({
    imports: [ modal.ModalModule.forRoot() ]
})
export class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [
               modal.BsModalService
            ]
        } as ModuleWithProviders;
    }
}
