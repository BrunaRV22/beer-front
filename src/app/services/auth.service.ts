import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    get getAuth() {
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
