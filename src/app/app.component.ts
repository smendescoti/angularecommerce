import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //flag indicando se o usuario esta autenticado
  isLoggedIn = false;

  //atributo para capturar os dados do usuario autenticado
  cliente = {
    idCliente: "",
    nome: "",
    email: "",
    cpf: ""
  }

  //função executada quando a página abre..
  ngOnInit(): void {

    //ler o conteudo da localStorage
    var auth = localStorage.getItem('AUTH');

    //verificar se o cliente esta autenticado
    if (auth != null && auth != undefined) {
      this.isLoggedIn = true; //O usuario esta autenticado!
      //capturar os dados
      this.cliente = JSON.parse(auth).cliente;
    }
    else {
      this.isLoggedIn = false; //O usuário não está autenticado.
    }
  }

  //função para fazer o logout do usuario
  logout(): void {

    if (window.confirm('Deseja realmente encerrar sua sessão?')) {
      this.isLoggedIn = false;
      localStorage.removeItem('AUTH');

      window.location.href = 'login-user';
    }

  }
}
