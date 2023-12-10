import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { Cadastro2Guard } from './conta/services/cadastro2.guard';
import { FilmesComponent } from './navegacao/filmes/filmes.component';
import { FileSizePipe } from './navegacao/filmes/file-size.pipe';
import { BarModule } from './navegacao/bar/bar.module';
import { AuthGuard } from './conta/services/app.guard';
import { TasksService } from './navegacao/todo/todo.service';
import { Store } from './navegacao/todo/todo.store';
import { TodoComponent } from './navegacao/todo/todo.component';
import { TasksFinalizadasComponent } from './navegacao/todo/component/tasks-finalizadas/tasks-finalizadas.component';
import { TasksIniciadasComponent } from './navegacao/todo/component/tasks-iniciadas/tasks-iniciadas.component';
import { TodoListComponent } from './navegacao/todo/component/todo-list/todo-list.component';
import { TasksComponent } from './navegacao/todo/component/tasks/tasks.component';
import { ContaRoutingModule } from './conta/conta-routing.module';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FileSizePipe,
    TodoComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent,
    TodoListComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ContaRoutingModule,
    NavegacaoModule,
    NgBrazil,
    CustomFormsModule,
    FormsModule,
     ReactiveFormsModule,
     TextMaskModule,
     BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'ecaa938c99a0e9ff910229dc',
    }),
  ],
  providers: [
    Cadastro2Guard,
    AuthGuard,
    TasksService,
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
