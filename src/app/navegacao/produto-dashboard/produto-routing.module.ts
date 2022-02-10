
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoResolve } from 'src/app/conta/services/produto.resolve';
import { EditarProdutosComponent } from '../editar-produtos/editar-produtos.component';
import { AppProdutoComponent } from './app-produto.component';
import { ProdutoDashboardComponent } from './produto-dashboard.component';

const routes: Routes = [
  { path: '', component: AppProdutoComponent,
   children: [
     {path: '', redirectTo: 'todos', pathMatch: 'full'},
     {
      path: ':estado',
       component: ProdutoDashboardComponent,
       resolve: {
        produtos: ProdutoResolve
       },
       data: {
         teste: 'informacao'
       }
      },
    { path: 'editar/:id', component: EditarProdutosComponent }// ':parametro(id)' => como passamos o parametro na rota
   ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProdutoRoutingModule{}
