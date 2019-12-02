import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './template/default/default.component';
import { EnderecoActivatedService } from './services/activated/endereco.activated.service';
import { PedidosActivatedService } from './services/activated/pedidos-activated.service';


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
        children: [
          {
            path: '',
            pathMatch: 'full',
            loadChildren: () => import('./pages/sacola/sacola.module').then((m) => m.SacolaModule)
          },
          {
            path: 'endereco',
            pathMatch: 'full',
            runGuardsAndResolvers: 'always',
            canActivate: [ EnderecoActivatedService ],
            loadChildren: () => import('./pages/endereco/endereco.module').then((m) => m.EnderecoModule)
          },
          {
            path: 'finalizar',
            pathMatch: 'full',
            loadChildren: () => import('./pages/finalizar-compra/finalizar-compra.module').then((m) => m.FinalizarCompraModule)
          }
        ]
      },
      {
        path: 'motoboy/:id',
        runGuardsAndResolvers: 'always',
        loadChildren: () => import('./pages/motoboy/motoboy.module').then((m) => m.MotoboyModule)
      },
      {
        path: 'cadastro',
        children: [
          {
            path: 'usuario',
            loadChildren: () => import('./pages/usuario/cadastro/cadastro.module').then((m) => m.CadastroModule)
          },
          {
            path: 'endereco',
            loadChildren: () => import('./pages/novo-endereco/novo-endereco.module').then((m) => m.NovoEnderecoModule)
          }
        ]
      },
      {
        path: 'pedidos',
        runGuardsAndResolvers: 'always',
        canActivate: [PedidosActivatedService],
        loadChildren: () => import('./pages/pedidos/pedidos.module').then((m) => m.PedidosModule)
      },
      {
        path: 'promocao',
        loadChildren: () => import('./pages/promocao/promocao.module').then((m) => m.PromocaoModule)
      },

      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
