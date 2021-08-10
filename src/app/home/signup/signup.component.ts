import { UserService } from 'src/app/services/user/service/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetectorPlataformaService } from 'src/app/componentesCompartilhados/detector-plataforma/detector-plataforma.service';
import { NewUser } from 'src/app/navegacao/model/newUser';
import { MessageService } from 'primeng/api';
import { __await } from 'tslib';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {


  @ViewChild('nomeInput') nomeInput!: ElementRef<HTMLInputElement>; //Procura o elemento #userName do DOM
  @ViewChild('registroButton') registroButton!: ElementRef<HTMLButtonElement>

  signupForm: FormGroup | any;
  mostrarSpinner! : boolean;
  public mask: Array<string | RegExp>

  constructor(private formBuilder: FormBuilder,
    //private userNameJaExisteValidator: UserNameJaExisteValidator,
    private userService : UserService,
    private router : Router,
    private detectorPlataformaService : DetectorPlataformaService,
    private messageService: MessageService) {

      this.mask = ['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    }

  ngOnInit() {
    this.mostrarSpinner = false;

    this.signupForm = this.formBuilder.group({
      nome: ['' , /* [Validators.required] */],
      email: ['', /* [Validators.required] */],
      localTrabalho : ['', /* [Validators.required] */],
      telefone: ['', /* [Validators.required] */],
      username: ['', /* [Validators.required] */],
      senha: ['', /* [Validators.required] */]
     /*  username: [null,
          [
              Validators.required,
              //nomeUsuarioValidator //Validador próprio!
          ],
              this.userNameJaExisteValidator.checkUserName() //Validador assíncrono
      ], */
/*       fullName: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      email: ['', [Validators.required, Validators.email]] */
    })
  }

  ngAfterViewInit(){ //Esse método foi usado para dar foco ao emailInput ao carregar a página
    if (this.detectorPlataformaService.ehNavegador()){
      this.nomeInput.nativeElement.focus();
    }
  }

  registrarUsuario(){
    console.log('registrando usuario...')

    //this.showSuccess();

    const newUser = this.signupForm.getRawValue() as NewUser; //getRawValue devolve o objeto com todos os campos do form
    this.userService.registraUsuario(newUser)
    .subscribe(
      () =>{
        //console.log('Usuário cadastrado com sucesso!')
        this.showSuccess();
        this.registroButton.nativeElement.disabled =true;
        this.mostrarSpinner = true;
        setTimeout(() =>
        {
          this.router.navigateByUrl('');
        },
        2000);


      },
      (err) => {
          console.log('Não foi possível registrar o usuário')
          console.log(err);
      }
    );

  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Usuário cadastrado!'});
}
}
