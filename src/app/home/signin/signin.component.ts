import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DetectorPlataformaService } from 'src/app/componentesCompartilhados/detector-plataforma/detector-plataforma.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup | any;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>; //Procura o elemento #userName do DOM


  constructor(private formBuilder : FormBuilder,
              private authService: AuthService,
              private router : Router,
              private detectorPlataformaService : DetectorPlataformaService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['']
    })
  }

  ngAfterViewInit(){ //Esse método foi usado para dar foco ao usernameInput ao carregar a página
    if (this.detectorPlataformaService.ehNavegador()){
      this.userNameInput.nativeElement.focus();
    }
  }

  OnChanges(){
  }

  ehValido(u: string, p: string) : Boolean{

    if(!u && !p){ //Verifica se o username e senha estão em branco
      console.log('UserName e senha estão em branco')

      this.loginForm.setErrors({
        userName: true,
        password: true
      });
      return false;
    }

    if(!u){ //verifica se apenas o usuário está em branco
      console.log('username está em branco')
      this.loginForm.setErrors({
        userName: true,
      });
      return false;
    }
    if(!p){ //verifica se apenas a senha está em branco
      console.log('senha está em branco')
      this.loginForm.setErrors({
        password: true
      });
      return false;
    }

    return true;
  }

  login(){

    console.log('entrou no login');

    const userName = this.loginForm.get('userName');
    const password = this.loginForm.get('password');

    if(!this.ehValido(userName.value, password.value)){
      return
    }

    this.authService
    .authenticate(userName.value , password.value)
        .subscribe(
          (resp) => {
            console.log('Autenticado com sucesso!')
            this.router.navigateByUrl('/user');
            //this.router.navigate(['user',  userName.value])  //localhost:4200/user/flavio
          },
          err => {
            console.log('Usuário ou senha inválido!', err)
            alert('Usuário ou senha inválido')
            this.loginForm.reset();

            if (this.detectorPlataformaService.ehNavegador()){
              this.userNameInput.nativeElement.focus();
            }

          });
  }

}
