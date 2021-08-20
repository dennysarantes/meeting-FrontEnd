import { MensagensModule } from './../../componentesCompartilhados/mensagens/mensagens.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { SigninComponent } from '../signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../signup/signup.component';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DividerModule} from 'primeng/divider';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
                  TelaInicialComponent,
                  SigninComponent,
                  SignupComponent
                 ],
  imports: [
            CommonModule,
            ReactiveFormsModule,
            MensagensModule,
            RouterModule,
            HttpClientModule,
            ToastModule,
            ProgressSpinnerModule,
            DividerModule,
            TextMaskModule]
})

export class HomeModule {}
