import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptorService } from './services/api-interceptor.service';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy, APP_BASE_HREF, CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeBR from '@angular/common/locales/pt';
import localeBRExtra from '@angular/common/locales/extra/pt';
import { DefaultModule } from './template/default/default.module';
import { CompraComponent } from './components/modal/compra/compra.component';
import { CompraModule } from './components/modal/compra/compra.module';
import { CompraService } from './services/compra.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CompraEditarComponent } from './components/modal/compra-editar/compra-editar.component';
import { SacolaResolverService } from './services/resolver/sacola-resolver.service';
import { SacolaActivatedService } from './services/activated/sacola.activated.service';
import { EnderecoActivatedService } from './services/activated/endereco.activated.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PedidosActivatedService } from './services/activated/pedidos-activated.service';

registerLocaleData(localeBR, 'pt-BR', localeBRExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      newestOnTop: true
    }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

    DefaultModule,
    CompraModule,
    ModalModule.forRoot()
  ],
  providers: [
    ApiInterceptorService,
    AuthService,
    TokenService,
    CompraService,
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    },

    SacolaResolverService,
    SacolaActivatedService,
    EnderecoActivatedService,
    PedidosActivatedService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CompraComponent,
    CompraEditarComponent
  ]
})
export class AppModule { }
