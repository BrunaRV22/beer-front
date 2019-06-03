import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(
        private readonly auth: AuthService,
        private readonly router: Router
    ) { }

    isLogged() {
        return this.auth.isLogged();
    }

    get getAuth() {
        return this.auth.getAuth;
    }

    logout() {
        this.auth.clearAuth();
        this.router.navigate(['/home']);
    }
}
