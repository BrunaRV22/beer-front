import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    login: { usuario: string, senha: string };

    constructor() {
        this.login = {
            usuario: null,
            senha: null
        };
    }

    enviarDados() {
        
    }
}
