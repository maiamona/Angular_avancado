
import { ProdutoDashboardComponent } from './produto-dashboard.component';
import { NgModule } from '@angular/core';

import { ProdutoRoutingModule } from './produto-routing.module';


import { NotFoundComponent } from '../not-found/not-found.component';
import { EditarProdutosComponent } from '../editar-produtos/editar-produtos.component';
import { AppProdutoComponent } from './app-produto.component';

import localePt from '@angular/common/locales/pt';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ProdutoCardDetalheComponent } from '../produto-count/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../produto-count/produto-count.component';
import { ProdutoService } from 'src/app/conta/services/produto.service';
import { ProdutoResolve } from 'src/app/conta/services/produto.resolve';
registerLocaleData(localePt);

@NgModule({
declarations: [// colocamos a nossa coleção de componentes
ProdutoDashboardComponent,
ProdutoCardDetalheComponent,
ProdutoCountComponent,
AppProdutoComponent,
EditarProdutosComponent
],
imports: [// colocamos a nossa coleção de Módulos
CommonModule,
ProdutoRoutingModule
],
providers: [
ProdutoService,
ProdutoResolve
],
exports: [// o que queremos exportar para fora

]
})
export class ProdutoModule{}
