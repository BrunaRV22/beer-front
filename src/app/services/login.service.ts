import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Global } from './global';

@Injectable()
export class LoginService extends Global {
    constructor(
        private readonly http: HttpClient,
        private readonly auth: AuthService
    ) {
        super();
    }

    loginIn(email: string, senha: string) {
        return this.http.post<{ usuario: string, email: string, imagem: string }>
        (`${this.url}/login`, { email, senha }, {
            observe: 'response'
        })
        .pipe(
            tap((res) => {
                this.auth.setAuth(
                    res.headers.get('Authorization'),
                    res.body.email,
                    res.body.usuario
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
