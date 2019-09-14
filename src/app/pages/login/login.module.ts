import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ])
    ],
    providers: [
        LoginService,
        AuthService
    ]
})
export class LoginModule {  }
