import { Component, OnInit } from '@angular/core';
import { Filme } from './filme';
import { ImageFormaterPipe } from './image-formater.pipe';


@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
  providers: [
    ImageFormaterPipe
  ]
})
export class FilmesComponent implements OnInit {

filmes: Filme[];
mapped: Filme[]; // vamos mapear a nossa coleção de filmes

  constructor(private imageFormat: ImageFormaterPipe) { }

  ngOnInit(): void {
this.filmes = [
  {
    nome: 'Um Sonho de Liberdade',
    dataLancamento: new Date('12/07/1994'),
    valor: 150.00,
    imagem: 'war.jpg',
    tamanho: '513326980'
  },
  {
    nome: 'O Poderoso Chefão',
    dataLancamento: new Date('01/12/1972'),
    valor: 200.00,
    imagem: 'soldiers.jpg',
    tamanho: '1913226980'
  },
  {
    nome: 'Batman: O Cavaleiro das Trevas',
    dataLancamento: new Date('08/01/2008'),
    valor: 70.00,
    imagem: 'police.jpg',
    tamanho: '513323380'
  },
  {
    nome: 'O Poderoso Chefão 2',
    dataLancamento: new Date('01/12/1974'),
    valor: 120.00,
    imagem: 'superhero.jpg',
    tamanho: '1513324480'
  },
  {
    nome: 'Pulp Fiction: Tempo de Violencia',
    dataLancamento: new Date('12/07/1994'),
    valor: 150.00,
    imagem: 'spiderman.png',
    tamanho: '515526980'
  },
  {
    nome: 'Inventado pelo Mona',
    dataLancamento: new Date('01/01/1987'),
    valor: 2150.00,
    imagem: '',
    tamanho: '6515526980'
  }
];

this.mapped = this.filmes.map(filme => {// vamos mapear a nossa coleção de filmes (coleção de filmes porem mapeada)
return{
  nome: filme.nome,
  dataLancamento: filme.dataLancamento,
  valor: filme.valor,
  tamanho: filme.tamanho,
  imagem: this.imageFormat.transform(filme.imagem, 'default', true)
};
});
  }

}
