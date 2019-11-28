import { Component } from '@angular/core';
import { CompraService } from './services/compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    readonly compra: CompraService
  ) {  }
}
