import { Component, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnDestroy {
    navigate: string;
    subscription: Subscription;
    login: { email: string, senha: string };
    message: string;

    constructor(
        private readonly service: LoginService,
        private readonly router: Router,
        readonly route: ActivatedRoute
    ) {
        route.queryParams.subscribe((params) => this.navigate = params.navigate || null);
        this.login = {
            email: null,
            senha: null
        };
    }

    enviarDados() {
        this.subscription = this.service.loginIn(this.login.email, this.login.senha)
            .subscribe(() => {
                this.message = null;
                this.router.navigate([this.navigate || '/'])
                    .then(() => {
                        this.subscription = null;
                        this.login.senha = null;
                    });
            }, (err) => {
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
