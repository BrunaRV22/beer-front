import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class LoginService {
    private readonly url: string;

    constructor(
        private readonly http: HttpClient
    ) {
        this.url = `${environment.url}/login`;
    }

    loginIn(usuario: string, senha: string) {
        return this.http.post(this.url, { usuario, senha })
        .pipe(
            catchError((err) => {
                if (err.status) {
                    if (err.status > 0) {
                        throw new Error(err.body);
                    }
                }

                throw new Error('Falha ao conectar na aplicação');
            })
        )
    }
}
