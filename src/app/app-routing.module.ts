import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './home/signin/signin.component';
import { TelaInicialComponent } from './home/tela-inicial/tela-inicial.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

   //Rota que cria um alias 'home' para o edereço localhost/
/*    {
    path: '',
    pathMatch:'full', //só se aplica se o usuário colocar ''
    redirectTo:'home'
  }, */

  {
    path: '',
    pathMatch:'full',
    component : TelaInicialComponent,
    children: [
      {
        path: '' , component : SigninComponent,
        children: [{path: '' , component : MenuComponent}]
      },
      //{path: 'user/add' , component : SignupComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
