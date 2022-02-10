
import { TestBed } from '@angular/core/testing';
import { Produto } from '../model/produtos';

import { ProdutoService } from './produto.service';

const produtosFake: Produto[] = [{
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
}
];

const produtoFake: Produto =
{
  id: 12,
  nome: 'Teste 12',
  ativo: true,
  valor: 1200,
  imagem: 'celular12.jpg'
};

describe('ProdutoService', () => {
  let service: ProdutoService;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        ProdutoService
      ]
    });
    service = bed.get(ProdutoService)
  });

  it('Deve retornar uma lista de produtos', () => {
    spyOn(service, 'obterTodos').and.returnValue(produtosFake);

    const result = service.obterTodos('ativos')

    expect(result.length).toBe(11);

    expect(result).toEqual(produtosFake);
  });

  it('Deve retornar um produto', () => {
    spyOn(service, 'obterPorId').and.returnValue(produtoFake);

    const result = service.obterPorId(12)

    expect(result).toEqual(produtoFake);
    expect(result.id).toEqual(12);
  });
});
