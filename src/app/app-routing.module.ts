

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './conta/services/app.guard';
import { Cadastro2Guard } from './conta/services/cadastro2.guard';
import { BarComponent } from './navegacao/bar/bar.component';
import { CadastroComponent } from './navegacao/cadastro/cadastro.component';
import { ContadorComponent } from './navegacao/contador/contador.component';
import { FilmesComponent } from './navegacao/filmes/filmes.component';
import { FormularioComponent } from './navegacao/formulario/formulario.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { PrincipalComponent } from './navegacao/principal/principal.component';
import { TodoComponent } from './navegacao/todo/todo.component';



const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'principal', component: PrincipalComponent},
{path: 'cadastro', component: CadastroComponent, canDeactivate: [Cadastro2Guard] },
// {path: 'cadastro', component: CadastroComponent },
{path: 'formulario', component: FormularioComponent},
{
  path: 'conta',
loadChildren: () => import('./conta/conta.module')
.then(m => m.ContaModule)
},
{
  path: 'produtos',
loadChildren: () => import('./navegacao/produto-dashboard/produto.module')
.then(m => m.ProdutoModule)
},
{path: 'filmes', component: FilmesComponent},
{ path: 'bar', component: BarComponent },
{ path: 'todo', component: TodoComponent },
{ path: 'contador', component: ContadorComponent },
{ path: 'admin',
loadChildren: () => import('./navegacao/admin-dashboard/admin-route.module')
.then(m => m.AdminRoutingModule),
canLoad: [ AuthGuard], canActivate: [AuthGuard]},
// {path: 'nao-encontrado', component: NotFoundComponent},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
