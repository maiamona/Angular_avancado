import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/conta/model/produtos';
import { ProdutoService } from 'src/app/conta/services/produto.service';


@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

produto: Produto;


  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.produto = this.produtoService.obterPorId(params.id);

    });
  }

  salvar(){
    // fazer comunicação com backend

    this.router.navigate(['/produtos']);
    // this.router.navigateByUrl('/produtos');
  }

}
