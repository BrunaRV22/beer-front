import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './template/default/default.component';
import { SacolaActivatedService } from './services/activated/sacola.activated.service';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule)
      },
      {
        path: 'produtos',
        children: [
          {
            path: ':id',
            loadChildren: () => import('./pages/produto/produto.module').then((m) => m.ProdutoModule)
          }
        ]
      },
      {
        path: 'sacola',
        runGuardsAndResolvers: 'always',
        loadChildren: () => import('./pages/sacola/sacola.module').then((m) => m.SacolaModule)

      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: true,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
