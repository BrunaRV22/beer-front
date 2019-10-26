import { Injectable, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modal: NgbModalRef<any>;

    constructor(
        private readonly modalService: NgbModal
    ) {  }

    open(content: TemplateRef<any> | any, options?: NgbModalOptions) {
        this.modal = this.modalService.open(content, options);
    }

    close(reason?: string) {
        this.modal.dismiss(reason);
    }
}
