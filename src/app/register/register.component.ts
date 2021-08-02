import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //atributos
  mensagemSucesso = "";
  mensagemErro = "";

  //inicializando a classe ClientesService por injeção de dependencia
  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

  //função para limpar as mensagens
  limparMensagens(): void {
    this.mensagemSucesso = "";
    this.mensagemErro = "";
  }

  //criando um atributo para capturar o conteudo do formulario
  formRegister = new FormGroup({

    //declarando atributos para capturar cada campo do formulário
    nome: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Za-zÀ-Üà-ü\\s]{6,150}$') //REGEX
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    cpf: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{11}$') //REGEX
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ]),
    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])
  });

  //método para utilizar o FormGroup na pagina HTML (formRegister)
  get form(): any {
    return this.formRegister.controls;
  }

  //método para capturar o SUBMIT do formulário
  onSubmit(): void {

    this.limparMensagens();

    //capturando os dados do formulário
    var cliente = this.formRegister.value;

    this.clientesService.create(cliente)
      .subscribe( //capturando o retorno da requisição (PROMISSE)
        (data) => { //callback de sucesso
          this.mensagemSucesso = data;
          //limpar o conteudo o formulário
          this.formRegister.reset();
        },
        (e) => { //callback de erro
          switch (e.status) {
            case 422: //UNPROCESSABLE ENTITY
              this.mensagemErro = e.error;
              break;
            default:
              console.log(e);
              this.mensagemErro = "Não foi possível realizar o cadastro do cliente.";
              break;
          }
        }
      )
  }

}
