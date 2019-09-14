import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
    constructor(
        private auth: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url !== `${environment.url}/login` || req.method === 'GET') {
            const headers = new HttpHeaders({
                Authorization: this.auth.getAuth.authorization
            });

            req = req.clone({ headers });
        }

        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.auth.setAuth(event.headers.get('Authorization'));
                    }
                })
            );
    }
}
