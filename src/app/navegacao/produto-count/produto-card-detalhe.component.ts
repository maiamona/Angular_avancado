
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/conta/model/produtos';

@Component({
  selector: 'produto-card-detalhe',
  templateUrl: 'produto-card-detalhe.component.html'
})

export class ProdutoCardDetalheComponent{

  @Input()
  produto: Produto;

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  // @Output()
  // editar1: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router) { }

  emitirEvento(){
    this.status.emit(this.produto);
  }

  editar(){
    // this.editar1.emit()
    this.router.navigate(['/produtos/editar/' + this.produto.id]);
  }
}
