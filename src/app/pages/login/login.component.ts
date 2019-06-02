import { Component, ElementRef, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
    subscription: Subscription;
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

    ngOnInit() {
        const u = localStorage.getItem('u');

        if (u) {
            this.login.usuario = u;
        }
    }

    enviarDados($checkbox: HTMLInputElement) {
        this.subscription = this.service.loginIn(this.login.usuario, this.login.senha)
            .subscribe(() => {
                if ($checkbox.checked) {
                    localStorage.setItem('u', this.login.usuario);
                }

                this.message = null;
                alert('Usuário Logado no sistema!');
                this.router.navigate(['/home'])
                    .then(() => {
                        this.subscription = null;
                        this.login.senha = null;
                    });
            }, (err) => {
                console.log('Error', err);
                this.message = err.message || 'Usuário ou senha incorretos';
                this.subscription = null;
            });
    }

    get spinner() {
        return this.subscription && this.subscription.closed;
    }
}
