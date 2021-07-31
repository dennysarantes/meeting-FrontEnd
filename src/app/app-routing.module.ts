import { SidermenuOldComponent } from './navegacao/sidermenu-old/sidermenu-old.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './home/signin/signin.component';
import { TelaInicialComponent } from './home/tela-inicial/tela-inicial.component';
import { TelaPrincipalUserComponent } from './navegacao/tela-principal-user/tela-principal-user.component';
import { SignupComponent } from './home/signup/signup.component';
import { TelaInicialUserComponent } from './navegacao/navegacao-principal-user/tela-inicial-user.component';
import { RelatorioCentralComponent } from './navegacao/relatorio-central/relatorio-central.component';

const routes: Routes = [

   //Rota que cria um alias 'home' para o edereço localhost/
/*    {
    path: '',
    pathMatch:'full', //só se aplica se o usuário colocar ''
    redirectTo:'home'
  }, */

  {
    path: '',
    //pathMatch:'full',
    component : TelaInicialComponent,
    children: [
      { path: '' , component : SigninComponent},
      { path: 'signup' , component: SignupComponent }
    ]
  },

  //Rota para usuario comum após autenticação
  {
    path: 'user' ,
    //pathMatch:'full',
    component : TelaPrincipalUserComponent,
    children:[
      { path: '', component : RelatorioCentralComponent}
    ]
  },

  //{path: 'teste' , component: SignupComponent}

/*   { //Rota antiga depois da autenticação
    path: 'user' , component : SidermenuOldComponent
  } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
