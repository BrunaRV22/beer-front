import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    get getAuth() {
        return {
            authorization: localStorage.getItem('A'),
            image: localStorage.getItem('img'),
            email: localStorage.getItem('mail'),
            usuario: localStorage.getItem('user')
        };
    }

    setAuth(authorization: string, email?: string, usuario?: string, image?: string) {
        localStorage.setItem('A', authorization);

        if (email) {
            localStorage.setItem('mail', email);
        }

        if (usuario) {
            localStorage.setItem('user', usuario);
        }

        if (image) {
            localStorage.setItem('img', image);
        }
    }

    isLogged() {
        console.log(localStorage.getItem('mail'), localStorage.getItem('mail') !== null);
        return localStorage.getItem('mail') !== null;
    }

    clearAuth() {
        localStorage.removeItem('A');
        localStorage.removeItem('mail');
        localStorage.removeItem('user');
        localStorage.removeItem('img');
    }
}