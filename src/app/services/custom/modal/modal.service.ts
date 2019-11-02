import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modal: BsModalRef;
    private onCloseSubject: Subject<any>;

    constructor(
        private readonly modalService: BsModalService
    ) {  }

    open(content: TemplateRef<any> | any, options?: ModalOptions) {
        this.onCloseSubject = new Subject();
        this.modal = this.modalService.show(content, options);
    }

    close() {
        this.modal.hide();
        this.onCloseSubject.next(true);
        this.onCloseSubject.complete();
    }

    onClose() {
        return this.onCloseSubject;
    }
}
