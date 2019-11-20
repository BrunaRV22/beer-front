import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({ selector: '[appValidator]' })
export class ValidatorDirective implements OnChanges {
    @Input() appValidator: boolean;
    @Input() validClass = 'is-valid';
    @Input() invalidClass = 'is-invalid';

    constructor(
        private readonly el: ElementRef,
        private readonly ngControl: NgControl,
        private readonly renderer: Renderer2
    ) { }

    ngOnChanges() {
        if (this.appValidator) {
            if (this.ngControl.valid) {
                this.renderer.addClass(this.el.nativeElement, this.validClass);
                this.renderer.removeClass(this.el.nativeElement, this.invalidClass);
            } else {
                this.renderer.addClass(this.el.nativeElement, this.invalidClass);
                this.renderer.removeClass(this.el.nativeElement, this.validClass);
            }
        } else {
            this.renderer.removeClass(this.el.nativeElement, this.validClass);
            this.renderer.removeClass(this.el.nativeElement, this.invalidClass);
        }
    }
}
