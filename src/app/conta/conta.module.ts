import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ContaRoutingModule } from './conta-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContaAppComponent } from './conta-app.component';
import { ContaService } from './services/conta.service';



@NgModule({
  declarations: [
    CadastroComponent,
    LoginComponent,
    ContaAppComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    RouterModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,

  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
