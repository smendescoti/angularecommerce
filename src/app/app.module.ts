import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//importando o modulo de rotas do angular
import { Routes, RouterModule } from '@angular/router';

//importando os modulos de formulario do angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importando a biblioteca para requisições HTTP na API
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

//mapeamento das rotas
const routes: Routes = [
  { path: 'login-user', component: LoginComponent },
  { path: 'register-user', component: RegisterComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component : ProductsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    //registrando as rotas mapeadas
    RouterModule.forRoot(routes),
    //registrar os modulos de formulario
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
