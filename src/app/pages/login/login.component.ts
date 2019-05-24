import { Component } from "@angular/core";
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    login: { usuario: string, senha: string };
    message: string;

    constructor(
        private readonly service: LoginService,
        private readonly router: Router
    ) {
        this.login = {
            usuario: null,
            senha: null
        };
    }

    enviarDados() {
        this.service.loginIn(this.login.usuario, this.login.senha)
            .subscribe(() => {
                this.message = null;
                alert('Usuário Logado no sistema!');
                this.router.navigate(['/home']);
            }, (err) => {
                console.log('Error', err);
                this.message = err.message || 'Usuário ou senha incorretos';
            });
    }
}
