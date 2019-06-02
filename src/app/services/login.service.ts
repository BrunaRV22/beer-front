import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class LoginService {
    private readonly url: string;

    constructor(
        private readonly http: HttpClient,
        private readonly auth: AuthService
    ) {
        this.url = `https://beer-api-bruna.herokuapp.com/login`;
    }

    loginIn(email: string, senha: string) {
        return this.http.post<{ usuario: string, email: string, imagem: string }>
        (this.url, { email, senha }, {
            observe: 'response'
        })
        .pipe(
            tap((res) => {
                this.auth.setAuth(
                    res.headers.get('Authorization'),
                    res.body.email,
                    res.body.usuario,
                    res.body.imagem
                );
            }),
            catchError((err) => {
                if (err.status) {
                    if (err.status > 0) {
                        this.auth.clearAuth();
                        throw new Error(err.body);
                    }
                }

                throw new Error('Falha ao conectar na aplicação');
            })
        );
    }
}
