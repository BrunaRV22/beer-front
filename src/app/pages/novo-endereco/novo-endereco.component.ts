import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
    selector: 'app-novo-endereco',
    templateUrl: './novo-endereco.component.html',
    styleUrls: ['./novo-endereco.component.scss']
})
export class NovoEnderecoComponent implements OnInit {
    submitted = null;
    endereco: FormGroup;

    constructor(
        readonly meta: Meta,
        readonly renderer: Renderer2,
        @Inject(DOCUMENT) readonly document: Document,
        private readonly toastr: ToastrService,
        private readonly service: EnderecoService
    ) {
        this.renderer.addClass(document.body, 'bg-image');
        meta.addTags([
            {
                name: 'robots',
                content: 'noindex'
            },
            {
                name: 'googlebot',
                content: 'noindex'
            }
        ]);

        this.endereco = new FormGroup({
            tipo: new FormControl(null, [Validators.required]),

            logradouro: new FormControl(null, [Validators.required]),
            numero: new FormControl(null),
            bairro: new FormControl(null, [Validators.required]),
            cidade: new FormControl(null, [Validators.required]),
            estado: new FormControl(null, [Validators.required]),
            complemento: new FormControl(null),
            cep: new FormControl(null, [Validators.required, Validators.minLength(8)])
        });
    }

    ngOnInit() {
    }

    salvar() {
        this.submitted = true;

        if (this.endereco.valid) {
            this.service.adicionar(this.endereco.value)
                .subscribe(
                    () => this.toastr.success('Dados salvos com sucesso', 'Dados salvos'),
                    () => this.toastr.error('Falha ao salvar dados, tente novamente mais tarde', 'Falha ao salvar dados')
                );
        } else {
            this.toastr.warning('Insira todos os dados corretamente antes de salvar', 'Falha ao salvar dados');
        }
    }
}
