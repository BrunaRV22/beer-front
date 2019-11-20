import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({ selector: '[appErrorControl]' })
export class ErrorControlDirective {
    private hasView: boolean;

    constructor(
        private readonly templateRef: TemplateRef<any>,
        private readonly viewContainer: ViewContainerRef
    ) { }

    @Input() set appErrorControl([group, name, ...errors]: [FormGroup, string, string]) {
        let condition = false;
        const control = group.get(name);

        errors.forEach((e) => {
            const error = control.getError(e);

            if (error) {
                condition = true;
            } else {
                condition = false;
            }
        });

        if (!this.hasView) {
            if (condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
                this.hasView = true;
            } else {
                this.viewContainer.clear();
                this.hasView = false;
            }
        } else {
            if (!condition) {
                this.viewContainer.clear();
                this.hasView = false;
            }
        }
    }
}
