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


@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    PrincipalComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,//quando vou utilizar links de roteamento na nossa pagina
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    PrincipalComponent,
    CadastroComponent
  ]
})
export class NavegacaoModule { }
