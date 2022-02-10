import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TextMaskModule } from "angular2-text-mask";
import { FormularioComponent } from './formulario/formulario.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form-question/dynamic-form.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './produto-count/produto-card-detalhe.component';
import { ProdutoCountComponent } from './produto-count/produto-count.component';
import { AppProdutoComponent } from './produto-dashboard/app-produto.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { ProdutoRoutingModule } from './produto-dashboard/produto-routing.module';
import { ProdutoService } from '../conta/services/produto.service';
import { ProdutoResolve } from '../conta/services/produto.resolve';
import { FilmesComponent } from './filmes/filmes.component';
import { FileSizePipe } from './filmes/file-size.pipe';
import { BarComponent } from './bar/bar.component';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    PrincipalComponent,
    CadastroComponent,
    FormularioComponent,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    ContadorComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,//quando vou utilizar links de roteamento na nossa pagina
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutoRoutingModule
  ],
  providers: [
    ProdutoService,
    ProdutoResolve
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    PrincipalComponent,
    CadastroComponent,


  ]
})
export class NavegacaoModule { }
