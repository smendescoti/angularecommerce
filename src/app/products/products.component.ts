import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //atributo
  isLoading = true;
  isLoadingItem = true;

  //atributo
  produtos = [{
    idProduto: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    foto: ''
  }];

  //atributo
  produto = {
    idProduto: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    foto: ''
  }

  //inicialização (injeção de dependencia)
  constructor(private produtosService: ProdutosService) { }

  //evento executado quando o componente é carregado
  ngOnInit(): void {
    //executando a chamada na API (GET) para consultar os produtos
    this.produtosService.getAll()
      .subscribe( //retorna o promisse
        (data) => { //callback de sucesso
          this.produtos = (data as any[]);
          this.isLoading = false;
        },
        (e) => { //callback de erro
          console.log(e);
        }
      )
  }

  //função para obter 1 produto na API atraves do ID..
  obterPorId(idProduto: string): void {
    this.produtosService.getById(idProduto)
      .subscribe(
        (data) => {
          this.produto = (data as any);
          this.isLoadingItem = false;
        },
        (e) => {
          console.log(e);
        }       
      )
  }
}
