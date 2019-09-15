import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: [ './default.component.scss' ]
})
export class DefaultComponent {
    constructor(
        private readonly auth: AuthService
    ) {  }
}
