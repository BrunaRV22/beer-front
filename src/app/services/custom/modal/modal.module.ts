import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ModalService } from './modal.service';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [ NgbModalModule ]
})
export class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [
                ModalService
            ]
        } as ModuleWithProviders;
    }
}
