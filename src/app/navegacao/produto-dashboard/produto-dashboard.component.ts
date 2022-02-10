import { ActivatedRouteSnapshot } from '@angular/router';

import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from 'src/app/conta/model/produtos';
import { ProdutoCountComponent } from '../produto-count/produto-count.component';
import { ProdutoCardDetalheComponent } from '../produto-count/produto-card-detalhe.component';
import { ProdutoResolve } from 'src/app/conta/services/produto.resolve';
import { ProdutoService } from 'src/app/conta/services/produto.service';


@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styleUrls: ['./produto-dashboard.component.css']
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

produtos: Produto[];
router2: ActivatedRouteSnapshot;

@ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
@ViewChild('teste', {static: false}) mensagemTela: ElementRef;

@ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent>; // é uma lista de elementos

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produtoResolve: ProdutoResolve,
    private produtoService: ProdutoService
    ) { }

  ngOnInit() {
    this.produtos = this.route.snapshot.data.produtos;
    console.log(this.route.snapshot.data.teste);

// this.produtos = [{
//   id: 1,
//   nome: 'Teste',
//   ativo: true,
//   valor: 100,
//   imagem: 'celular.jpg'
// },
// {
//   id: 2,
//   nome: 'Teste 2',
//   ativo: true,
//   valor: 200,
//   imagem: 'celular2.jpg'
// },
// {
//   id: 3,
//   nome: 'Teste 3',
//   ativo: true,
//   valor: 300,
//   imagem: 'celular3.jpg'
// },
// {
//   id: 4,
//   nome: 'Teste 4',
//   ativo: true,
//   valor: 400,
//   imagem: 'celular4.jpg'
// },
// {
//   id: 5,
//   nome: 'Teste 5',
//   ativo: true,
//   valor: 500,
//   imagem: 'celular5.jpg'
// },
// {
//   id: 6,
//   nome: 'Teste 6',
//   ativo: true,
//   valor: 600,
//   imagem: 'celular6.jpg'
// },
// {
//   id: 7,
//   nome: 'Teste 7',
//   ativo: true,
//   valor: 700,
//   imagem: 'celular14.jpg'
// },
// {
//   id: 8,
//   nome: 'Teste 8',
//   ativo: true,
//   valor: 800,
//   imagem: 'celular16.jpg'
// },
// {
//   id: 9,
//   nome: 'Teste 9',
//   ativo: true,
//   valor: 900,
//   imagem: 'celular9.jpg'
// },
// {
//   id: 10,
//   nome: 'Teste 10',
//   ativo: true,
//   valor: 1000,
//   imagem: 'celular13.jpg'
// },
// {
//   id: 11,
//   nome: 'Teste 11',
//   ativo: true,
//   valor: 1100,
//   imagem: 'celular11.jpg'
// },
// {
//   id: 12,
//   nome: 'Teste 12',
//   ativo: true,
//   valor: 1200,
//   imagem: 'celular12.jpg'
// }
// ];
  }

  ngAfterViewInit(): void {
console.log('Objeto do contador: ', this.contador.produtos);


const clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
clickTexto.subscribe(() => {
        alert('clicou no texto');
        return;
      });

console.log(this.botoes);
this.botoes.forEach(p => {
        console.log(p.produto);

      });

  }

  mudarStatus(event: Produto){
event.ativo = !event.ativo;
  }

  ativos(){
    // this.router.navigate(['/produtos/ativos']);
    // this.produtoService.obterTodos('ativos')

    // this.produtos = this.route.snapshot.data['produtos']
    // console.log(this.produtoService.obterTodos('desativos'));

    this.produtos = this.produtoService.obterTodos('ativos');
    this.produtoResolve.resolve;
  }

  desativos(){
    this.produtos = this.produtoService.obterTodos('desativos');
  }

  todos(){
    this.produtos = this.route.snapshot.data.produtos;
  }
}
