import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(
        @Inject(PLATFORM_ID) private readonly PLATFORM: any
    ) { }

    get getAuth() {
        if (isPlatformBrowser(this.PLATFORM)) {
            if (window && window.localStorage) {
                const authorization = localStorage.getItem('A');
                const email = localStorage.getItem('mail');
                const usuario = localStorage.getItem('user');

                if (authorization && email && usuario) {
                    return { authorization, email, usuario };
                } else {
                    return null;
                }
            }
        }

        return null;
    }

    setAuth(authorization: string, email?: string, usuario?: string, image?: string) {
        localStorage.setItem('A', authorization);

        if (email) {
            localStorage.setItem('mail', email);
        }

        if (usuario) {
            localStorage.setItem('user', usuario);
        }
    }

    isLogged() {
        return localStorage.getItem('mail') !== null;
    }

    clearAuth() {
        localStorage.removeItem('A');
        localStorage.removeItem('mail');
        localStorage.removeItem('user');
    }
}
