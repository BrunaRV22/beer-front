import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modal: BsModalRef;

    constructor(
        private readonly modalService: BsModalService
    ) {  }

    open(content: TemplateRef<any> | any, options?: ModalOptions) {
        this.modal = this.modalService.show(content, options);
    }

    close() {
        this.modal.hide();
    }
}
