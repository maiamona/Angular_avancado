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
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
