import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
    set token(token: string) {
        localStorage.setItem('t', token);
    }

    get token() {
        return localStorage.getItem('t');
    }
}
