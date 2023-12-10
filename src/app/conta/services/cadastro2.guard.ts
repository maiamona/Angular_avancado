import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CadastroComponent } from 'src/app/navegacao/cadastro/cadastro.component';




@Injectable()
export class Cadastro2Guard implements CanDeactivate<CadastroComponent>{// guarda de autenticação

user = {admin: true, logger: false};

canDeactivate(component: CadastroComponent) {
    if (component.mudancasNaoSalvas) {
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
    }

    return true;
}
}
