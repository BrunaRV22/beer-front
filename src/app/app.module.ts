import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptorService } from './services/api-interceptor.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
import localeBRExtra from '@angular/common/locales/extra/pt';
import { DefaultModule } from './template/default/default.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompraComponent } from './components/modal/compra/compra.component';
import { CompraModule } from './components/modal/compra/compra.module';
import { CompraService } from './services/compra.service';
import { ModalModule } from 'ngx-bootstrap/modal';

registerLocaleData(localeBR, 'pt-BR', localeBRExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,

    DefaultModule,
    NgbModule,
    CompraModule,
    ModalModule.forRoot()
  ],
  providers: [
    ApiInterceptorService,
    AuthService,
    TokenService,
    CompraService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CompraComponent
  ]
})
export class AppModule { }
