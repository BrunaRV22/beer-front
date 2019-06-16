import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {
    path: 'produtos',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: './pages/home/home.module#HomePageModule'
      },
      {
        path: 'compra',
        loadChildren: './pages/compra/compra.module#CompraModule'
      }
    ]
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
