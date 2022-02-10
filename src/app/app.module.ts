import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { Cadastro2Guard } from './conta/services/cadastro2.guard';


@NgModule({
  declarations: [
    AppComponent
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

  ],
  providers: [
    Cadastro2Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
