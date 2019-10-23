import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './template/default/default.component';


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
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
