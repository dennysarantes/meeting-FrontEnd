import { EditItem } from './../model/editItem';
import { ReuniaoService } from 'src/app/services/reuniao/reuniao.service';
import { ItemService } from 'src/app/services/guarda-reuniao/item.service';
import { Component, ElementRef, OnChanges, Input, OnInit, ViewChild, SimpleChanges, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Item } from '../model/item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewItem } from '../model/newItem';
import { Reuniao } from '../model/reuniao';

@Component({
  selector: 'app-modal-editar-item',
  templateUrl: './modal-editar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./modal-editar-item.component.css']
})
export class ModalEditarItemComponent implements OnInit {

  itemTemp! : Item;
  @ViewChild('cancelarButton') cancelar!: ElementRef<HTMLInputElement>;
  @ViewChild('salvarButton') salvarButton!: ElementRef<HTMLInputElement>;
  editarItemForm!: FormGroup;
  @ViewChild('tituloInput') tituloInput!: ElementRef<HTMLInputElement>;
  idReuniao! : number | any;
  alterarReuniao! : number;
  minhasReunioesAux : Reuniao[] = [];



  constructor(private itemService : ItemService,
    private formBuilder: FormBuilder,
    private reuniaoService : ReuniaoService) {

    this.idReuniao = itemService.getIdReuniao();

    //Obtem a lista de todas as próximas reuniões do usuário logado e retira a atual (quer será sempre a primeira)
    reuniaoService.carregarProximasReunioesMenosAtual(this.idReuniao)
    .subscribe( (reunioes : Reuniao[] | any) => {
      this.minhasReunioesAux = reunioes;
      if (this.minhasReunioesAux.length > 10){
        this.minhasReunioesAux =  this.minhasReunioesAux.slice(0,9);
      }
    });

    this.itemTemp =  itemService.getItemTemp();
    this.editarItemForm! = this.formBuilder.group({
      titulo: [this.itemTemp.titulo],
      descricao: [this.itemTemp.descricao],
      idReuniaoNova : ['']
  });

}

ngOnInit() {


    this.alterarReuniao = 0;

    console.table(this.minhasReunioesAux);
      this.editarItemForm.get('titulo')?.valueChanges
    .subscribe(val =>{
      this.salvarButton.nativeElement.disabled =false;
    });

    this.editarItemForm.get('descricao')?.valueChanges
    .subscribe(val =>{
      this.salvarButton.nativeElement.disabled =false;
    })

    this.editarItemForm.get('idReuniaoNova')?.valueChanges
    .subscribe(val =>{
      this.salvarButton.nativeElement.disabled =false;
    })
  }


  ngAfterViewInit(){
    this.salvarButton.nativeElement.disabled =true;
  }



  editarItem(){
    let editItem = this.editarItemForm.getRawValue() as EditItem;
    editItem.idReuniaoAtual = this.itemService.getIdReuniao();

    if (this.alterarReuniao == 0){
      editItem.idReuniaoNova = editItem.idReuniaoAtual;
    }

    console.log('Id da reunião atual: ' + editItem.idReuniaoAtual)
    console.log('Id da reunião da data escolhida: ' + editItem.idReuniaoNova);
    console.log('Valor do slice 0 desabilitado e 1 habilitado: ' + this.alterarReuniao);

    this.salvarButton.nativeElement.disabled =true;

    console.log('salvando edição...');


    this.itemService.editarItem(editItem, this.itemTemp.id)
    .subscribe(
      () => {
        console.log('Item editado com sucesso...');
        this.cancelar.nativeElement.click();
    },
    (err) => {
      console.log('Não foi possível editar o item')
      console.log(err);
    })
  }

  alterarData(value: number) {
    if (value == 1) {
      return 'sim';
    }else{
      return 'não';
    }
  }

setAlterarReuniao(){

  console.log('chamou')
  if (this.alterarReuniao == 0){
    this.alterarReuniao = 1
  }else{
    this.alterarReuniao = 0;
  }
}

  filtroDatas = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
