import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnDestroy {
    subscription: Subscription;
    login: { email: string, senha: string };
    message: string;

    constructor(
        private readonly service: LoginService,
        private readonly router: Router
    ) {
        this.login = {
            email: null,
            senha: null
        };
    }

    enviarDados() {
        this.subscription = this.service.loginIn(this.login.email, this.login.senha)
            .subscribe(() => {
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

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
