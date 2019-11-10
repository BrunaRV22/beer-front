import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
    form: FormGroup;

    submitted = false;

    constructor(
        readonly renderer: Renderer2,
        @Inject(DOCUMENT) readonly document: Document
    ) {
        renderer.addClass(document.body, 'bg-image');
    }

    ngOnInit() {
        this.form = new FormGroup({
            nome: new FormControl(null, Validators.required),
            cpf: new FormControl(null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            senha: new FormControl(null, [
                Validators.required,
                Validators.minLength(8)
            ])
        });

        this.form.valueChanges.subscribe(() => this.submitted = false);
    }

    cadastrar() {
        this.submitted = true;
        console.log(this.form);
        console.log(this.form.errors);
    }
}
