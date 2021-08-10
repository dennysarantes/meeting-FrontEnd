import { NewItem } from './../model/newItem';
import { UserService } from './../../services/user/service/user.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/services/user/model/user';
import { DetectorPlataformaService } from 'src/app/componentesCompartilhados/detector-plataforma/detector-plataforma.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-modal-novo-item',
  templateUrl: './modal-novo-item.component.html',
  styleUrls: ['./modal-novo-item.component.css']
})
export class ModalNovoItemComponent implements OnInit {

  @ViewChild('cancelarButton') fechar!: ElementRef<HTMLInputElement>;
  @ViewChild('registroButton') registroButton!: ElementRef<HTMLInputElement>;
  idReuniao! : number;
  novoItemForm: FormGroup | any;
  user$! : Observable<User>;
  user!: User;


  constructor(
            private itemService : ItemService,
            private formBuilder: FormBuilder,
            private userService : UserService,
            private detectorPlataformaService : DetectorPlataformaService
            ) {

    this.idReuniao = itemService.getIdReuniao();
    this.user$ =  userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit() {
    this.novoItemForm = this.formBuilder.group({
      titulo: [''],
      descricao: ['']
  });

  }
  ngAfterViewInit(){ //Esse método foi usado para dar foco ao tituloInput ao carregar o modal
    if (this.detectorPlataformaService.ehNavegador()){
      //this.tituloInput.nativeElement.focus();
    }
  }

  registraItem(){
    const newItem = this.novoItemForm.getRawValue() as NewItem;


    this.registroButton.nativeElement.disabled =true;

    this.itemService.cadastraNovoItem(newItem, this.idReuniao)
    .subscribe(
      () => {
        this.fechar.nativeElement.click();
    },
    (err) => {
      console.log('Não foi possível registrar o item')
      console.log(err);
    })
  }

}
