
import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/conta/model/produtos';

@Component({
  selector: 'produto-count',
 templateUrl: 'produto-count.component.html',
 styleUrls: ['produto-count.component.css']
})
export class ProdutoCountComponent{
  @Input()
  produtos: Produto[];

  contadorAtivos(): number{
    if (!this.produtos) { return; }

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }
}
