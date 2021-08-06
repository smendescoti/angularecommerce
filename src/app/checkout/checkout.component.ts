import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  valorTotal = 0;
  quantidadeItens = 0;

  produtos = [{
    idProduto: '',
    nome: '',
    preco: 0,
    quantidade: 0,
    foto: ''
  }];

  constructor() { }

  ngOnInit(): void {
    //ler o conteudo da sessão..
    if (localStorage.getItem('CESTA_DE_COMPRAS') != null) {
      var dados = localStorage.getItem('CESTA_DE_COMPRAS') as string;
      this.produtos = JSON.parse(dados);

      //calcular o valor total e a quantidade de itens
      for (var i = 0; i < this.produtos.length; i++) {
        this.valorTotal += (this.produtos[i].preco * this.produtos[i].quantidade);
        this.quantidadeItens += this.produtos[i].quantidade;
      }
    }
  }

}
