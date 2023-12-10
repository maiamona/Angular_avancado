import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContaAppComponent } from './conta-app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 {
   path: '', component: ContaAppComponent,
   children: [
     {path: 'cadastro', component: CadastroComponent},
     {path: 'login', component: LoginComponent}
   ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
