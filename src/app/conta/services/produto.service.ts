
import { Injectable } from '@angular/core';
import { Produto } from '../model/produtos';

@Injectable()
export class ProdutoService{

  produtos: Produto[] = [{
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg'
    },
    {
      id: 2,
      nome: 'Teste 2',
      ativo: true,
      valor: 200,
      imagem: 'celular2.jpg'
    },
    {
      id: 3,
      nome: 'Teste 3',
      ativo: true,
      valor: 300,
      imagem: 'celular3.jpg'
    },
    {
      id: 4,
      nome: 'Teste 4',
      ativo: true,
      valor: 400,
      imagem: 'celular4.jpg'
    },
    {
      id: 5,
      nome: 'Teste 5',
      ativo: true,
      valor: 500,
      imagem: 'celular5.jpg'
    },
    {
      id: 6,
      nome: 'Teste 6',
      ativo: true,
      valor: 600,
      imagem: 'celular6.jpg'
    },
    {
      id: 7,
      nome: 'Teste 7',
      ativo: true,
      valor: 700,
      imagem: 'celular14.jpg'
    },
    {
      id: 8,
      nome: 'Teste 8',
      ativo: true,
      valor: 800,
      imagem: 'celular16.jpg'
    },
    {
      id: 9,
      nome: 'Teste 9',
      ativo: true,
      valor: 900,
      imagem: 'celular9.jpg'
    },
    {
      id: 10,
      nome: 'Teste 10',
      ativo: true,
      valor: 1000,
      imagem: 'celular13.jpg'
    },
    {
      id: 11,
      nome: 'Teste 11',
      ativo: true,
      valor: 1100,
      imagem: 'celular11.jpg'
    },
    {
      id: 12,
      nome: 'Teste 12',
      ativo: true,
      valor: 1200,
      imagem: 'celular12.jpg'
    }
    ];


  // obterTodos(): Produto[]{
  //   return this.produtos;
  // }

  obterTodos(estado: string): Produto[]{

   if (estado === 'ativos') {
   return this.produtos.filter(produto => produto.ativo);
   }
   if (estado === 'desativos') {
   return this.produtos.filter(produto => !produto.ativo);
   }
   if (estado === 'todos') {
   return this.produtos;
   }
  }


  obterPorId(id: number): Produto{
    return this.produtos.find(produto => produto.id == id);
  }



}
