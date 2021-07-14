import { MensagensModule } from './../../componentesCompartilhados/mensagens/mensagens.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { SigninComponent } from '../signin/signin.component';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
                  SigninComponent,
                  TelaInicialComponent
                 ],
  imports: [CommonModule,
            ReactiveFormsModule,
            MensagensModule,
            RouterModule,
            HttpClientModule]
})

export class HomeModule {}
