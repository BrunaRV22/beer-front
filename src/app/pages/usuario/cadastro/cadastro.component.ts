import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ImageService } from 'src/app/services/image.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, OnDestroy {
    form: FormGroup;
    submitted = false;
    navigate: string;

    constructor(
        private readonly service: UsuarioService,
        private readonly toastr: ToastrService,
        private readonly router: Router,
        private readonly image: ImageService,
        readonly route: ActivatedRoute
    ) {
        image.setImage('fundo_04');
        route.queryParams.subscribe((params) => this.navigate = params.navigate);
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

        if (this.form.valid) {
            this.service.cadastro(this.form.value)
                .subscribe(
                    () => {
                        this.toastr.success('Cadastro efetuado com sucesso!<br>Agora, cadastre o endereço para entrega', 'Dados salvos', {
                            enableHtml: true
                        });

                        this.router.navigate([this.navigate || '/']);
                    },
                    (error) => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 409) {
                                this.toastr.warning('Usuário já cadastrado, caso tenha esquecido da senha, clique em esqueceu a senha.',
                                    'Usuário cadastrado');
                                return;
                            }
                        }

                        this.toastr.error('Falha ao salvar dados, tente novamente mais tarde', 'Falha ao salvar dados')
                    }
                );
        }
    }

    ngOnDestroy() {
        this.image.setImage('fundo_01');
    }
}
