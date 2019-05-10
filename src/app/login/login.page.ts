import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  login: { usuario: string, senha: string };

  constructor() {
    this.login = {
      usuario: null,
      senha: null
    };
  }

  enterLogin() {
    console.log('Estou enviando estes dados', this.login);
  }
}
