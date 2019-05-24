import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ LoginComponent ],
    imports: [
        IonicModule,
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
    providers: [ LoginService ]
})
export class LoginModule {  }
