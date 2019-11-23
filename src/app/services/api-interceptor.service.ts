import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
    constructor(
        private readonly auth: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let headers = req.headers;

        if (req.withCredentials) {
            headers = headers.append('Authorization', this.auth.getAuth.authorization);
        }

        req = req.clone({ headers, withCredentials: false });

        return next.handle(req)
            .pipe(
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        const a = event.headers.get('Authorization');

                        if (a) {
                            this.auth.setAuth(a);
                        }
                    }
                })
            );
    }
}
