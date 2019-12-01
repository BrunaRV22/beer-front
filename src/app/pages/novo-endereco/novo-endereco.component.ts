import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-novo-endereco',
    templateUrl: './novo-endereco.component.html',
    styleUrls: ['./novo-endereco.component.scss']
})
export class NovoEnderecoComponent implements OnInit {
    submitted = null;
    endereco: FormGroup;
    navigate: string;

    constructor(
        readonly meta: Meta,
        private readonly toastr: ToastrService,
        private readonly service: EnderecoService,
        private readonly router: Router,
        readonly route: ActivatedRoute
    ) {
        route.queryParams.subscribe((params) => this.navigate = params.navigate);
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

    adicionar() {
        this.submitted = true;

        if (this.endereco.valid) {
            this.service.adicionar(this.endereco.value)
                .subscribe(
                    () => {
                        this.toastr.success('Dados salvos', 'Cadastro de endereço');
                        this.endereco.reset();
                        this.submitted = false;
                    },
                    () => this.toastr.error('Falha ao salvar dados, tente novamente mais tarde', 'Falha ao salvar dados')
                );
        } else {
            this.toastr.warning('Insira todos os dados corretamente antes de salvar', 'Falha ao salvar dados');
        }
    }

    salvar() {
        this.submitted = true;

        if (this.endereco.valid) {
            this.service.adicionar(this.endereco.value)
                .subscribe(
                    () => {
                        this.toastr.success('Dados salvos', 'Cadastro de endereço');
                        this.router.navigate([this.navigate || '/']);
                    },
                    () => this.toastr.error('Falha ao salvar dados, tente novamente mais tarde', 'Falha ao salvar dados')
                );
        } else {
            this.toastr.warning('Insira todos os dados corretamente antes de salvar', 'Falha ao salvar dados');
        }
    }
}
